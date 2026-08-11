import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faThLarge,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { cn } from '../../utils/cn';
import { AppId, ViewMode } from '../../types';
import { SMALL_ICON_SIZE, getIcon } from '../getIcon';
import useWindowsStore from '../../utils/useWindowsStore';
import { getApp } from '../../utils/appRegistry';

type DivProps = React.HTMLAttributes<HTMLDivElement>;

const TopbarContainer: React.FC<DivProps> = ({ className, ...props }) => (
  <div
    className={cn(
      'w-full h-9 bg-[var(--titlebar-bg)] backdrop-blur-xl text-[color:var(--wc-text)] border-t border-t-[color:var(--titlebar-highlight)] px-2.5 cursor-default grid grid-cols-3 mx-auto items-center box-border border-b-[0.2px] border-b-[color:var(--win-border)]',
      className,
    )}
    {...props}
  />
);

type TrafficLightColor = 'close' | 'minimize' | 'expand';

const TRAFFIC_LIGHT_BG: Record<TrafficLightColor, string> = {
  close: 'bg-[#ee514a]',
  minimize: 'bg-[#F7BD45]',
  expand: 'bg-[#5FCB43]',
};

type TrafficLightProps = DivProps & { color: TrafficLightColor; disabled: boolean };

const TrafficLight: React.FC<TrafficLightProps> = ({
  className,
  color,
  disabled,
  ...props
}) => (
  <div
    className={cn(
      'w-3 h-3 inline-block rounded-lg items-center align-middle text-[#62574c] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.25)]',
      color === 'close' ? 'ml-0' : 'ml-2',
      disabled ? 'bg-[#686B6D] cursor-default' : `${TRAFFIC_LIGHT_BG[color]} cursor-pointer`,
      className,
    )}
    {...props}
  />
);


export type TopbarNav = {
  onBack: () => void;
  onForward: () => void;
  canBack: boolean;
  canForward: boolean;
};

export type WindowTopbarProps = {
  title: AppId;
  isMobileWindow: boolean;
  /** Focuses this window — the topbar is often the only thing a user can tap. */
  onActivate: () => void;
  /** Toggles between the stored geometry and full-screen. Owned by AppWindow. */
  onExpand: (isExpanded: boolean) => void;
  nav?: TopbarNav;
  view?: ViewMode;
  onViewChange?: (view: ViewMode) => void;
};

const topbarCtrlBtn =
  'w-6 h-6 flex items-center justify-center rounded-md text-[color:var(--wc-text)] text-[13px] transition-colors bg-transparent border-0';

type TopbarIconBtnProps = {
  label: string;
  icon: IconProp;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const TopbarIconBtn: React.FC<TopbarIconBtnProps> = ({
  label,
  icon,
  onClick,
  disabled,
  className,
}) => (
  <button
    aria-label={label}
    onClick={onClick}
    disabled={disabled}
    className={cn(topbarCtrlBtn, className)}
  >
    <FontAwesomeIcon icon={icon} />
  </button>
);

const VIEW_BUTTONS: Array<{ mode: ViewMode; label: string; icon: IconProp }> = [
  { mode: 'icon', label: 'Icon view', icon: faThLarge as IconProp },
  { mode: 'list', label: 'List view', icon: faList as IconProp },
];

const WindowTopbar: React.FC<WindowTopbarProps> = ({
  title,
  isMobileWindow,
  onActivate,
  onExpand,
  nav,
  view,
  onViewChange,
}) => {
  const focusedWindow = useWindowsStore((state) => state.focusedWindow);

  const app = getApp(title);
  // `title` is stable for a given window instance, so this hook is consistent
  const control = app.store();
  const isFocused = focusedWindow === title;

  const handleClose = () => {
    control.close();
  };

  const handleMinimized = () => {
    if (isFocused) {
      control.setMinimized(true);
      control.toggleOpen();
    }
  };

  const handleExpand = () => {
    if (isFocused && app.canExpand) {
      onExpand(control.isExpanded);
      control.toggleExpanded();
    }
  };

  // minimize/expand are desktop-only; close stays reachable on mobile
  const trafficLights: Array<{
    color: TrafficLightColor;
    label: string;
    onClick: () => void;
    desktopOnly?: boolean;
    alwaysEnabled?: boolean;
  }> = [
    { color: 'close', label: 'Close', onClick: handleClose, alwaysEnabled: true },
    { color: 'minimize', label: 'Minimize', onClick: handleMinimized, desktopOnly: true },
    { color: 'expand', label: 'Expand', onClick: handleExpand, desktopOnly: true },
  ];

  const navButtons = nav
    ? [
        { label: 'Back', icon: faChevronLeft as IconProp, onClick: nav.onBack, enabled: nav.canBack },
        {
          label: 'Forward',
          icon: faChevronRight as IconProp,
          onClick: nav.onForward,
          enabled: nav.canForward,
        },
      ]
    : [];

  return (
    <TopbarContainer className="topbar" onPointerDown={onActivate}>
      <div className="flex justify-start items-center">
        {trafficLights.map(({ color, label, onClick, desktopOnly, alwaysEnabled }) => {
          const disabled = alwaysEnabled
            ? false
            : !isFocused || (desktopOnly === true && isMobileWindow);
          return (
            <TrafficLight
              key={color}
              color={color}
              title={disabled ? undefined : label}
              onClick={disabled ? undefined : onClick}
              onTouchStart={color === 'close' ? onClick : undefined}
              disabled={disabled}
            />
          );
        })}
        {navButtons.length > 0 && (
          <div className="flex items-center gap-0.5 ml-3">
            {navButtons.map(({ label, icon, onClick, enabled }) => (
              <TopbarIconBtn
                key={label}
                label={label}
                icon={icon}
                onClick={onClick}
                disabled={!enabled}
                className={
                  enabled ? 'hover:bg-[var(--hover-overlay)] cursor-pointer' : 'opacity-30'
                }
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center items-center text-center text-sm">
        {getIcon(app.icon, SMALL_ICON_SIZE)}
        <span className="ml-1.5 pointer-events-none">{title}</span>
      </div>
      <div className="flex justify-end items-center">
        {view && onViewChange && !isMobileWindow && (
          <div className="flex items-center gap-0.5 rounded-md bg-[var(--hover-overlay)] p-0.5">
            {VIEW_BUTTONS.map(({ mode, label, icon }) => (
              <TopbarIconBtn
                key={mode}
                label={label}
                icon={icon}
                onClick={() => onViewChange(mode)}
                className={
                  view === mode
                    ? 'bg-[var(--hover-overlay-strong)]'
                    : 'opacity-55 hover:opacity-100'
                }
              />
            ))}
          </div>
        )}
      </div>
    </TopbarContainer>
  );
};

export default WindowTopbar;
