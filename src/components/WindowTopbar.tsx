import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faThLarge,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  TopbarBtn,
  TopbarBtnContainer,
  TopbarTitle,
  TopbarTitleText,
  WindowTopbarContainer,
} from '../GlobalStyle';
import { cn } from '../utils/cn';
import { ViewMode, WindowPositionSetting, WindowSizeSetting } from '../types';
import useScreenSize from '../utils/useScreenSize';
import { IconType, SMALL_ICON_SIZE, getIcon } from './getIcon';
import useWindowsStore from '../utils/useWindowsStore';
import useAboutStore from '../utils/useAboutStore';
import useSkillsStore from '../utils/useSkillsStore';
import useProjectsStore from '../utils/useProjectsStore';
import useCalculatorStore from '../utils/useCalculatorStore';
import useUtilStore from '../utils/useUtilStore';
import useResumeStore from '../utils/useResumeStore';
import useTerminalStore from '../utils/useTerminalStore';
import useSettingsStore from '../utils/useSettingsStore';

export type TopbarNav = {
  onBack: () => void;
  onForward: () => void;
  canBack: boolean;
  canForward: boolean;
};

export type WindowTopbarProps = {
  title: string;
  windowRef: any;
  size: WindowSizeSetting;
  setSize: (size: WindowSizeSetting) => void;
  position: WindowPositionSetting;
  setPosition: (position: WindowPositionSetting) => void;
  prevSetting: (WindowSizeSetting & WindowPositionSetting) | null;
  setPrevSetting: (setting: WindowSizeSetting & WindowPositionSetting) => void;
  isMobileWindow: boolean;
  nav?: TopbarNav;
  view?: ViewMode;
  onViewChange?: (view: ViewMode) => void;
};

const topbarCtrlBtn =
  'w-6 h-6 flex items-center justify-center rounded-md text-[color:var(--wc-text)] text-[13px] transition-colors bg-transparent border-0';

type WindowControls = {
  icon: IconType;
  toggleOpen: () => void;
  setMinimized: (flag: boolean) => void;
  // omit both to make the expand (green) button a no-op for this window
  isExpanded?: boolean;
  toggleExpanded?: () => void;
};

const WindowTopbar: React.FC<WindowTopbarProps> = ({
  title,
  windowRef,
  size,
  setSize,
  position,
  setPosition,
  prevSetting,
  setPrevSetting,
  isMobileWindow,
  nav,
  view,
  onViewChange,
}) => {
  const { width, height } = useScreenSize();
  const focusedWindow = useWindowsStore((state) => state.focusedWindow);

  const about = useAboutStore((state) => state);
  const skills = useSkillsStore((state) => state);
  const projects = useProjectsStore((state) => state);
  const calculator = useCalculatorStore((state) => state);
  const util = useUtilStore((state) => state);
  const resume = useResumeStore((state) => state);
  const terminal = useTerminalStore((state) => state);
  const settings = useSettingsStore((state) => state);

  const controls: Record<string, WindowControls> = {
    About: {
      icon: 'About',
      toggleOpen: about.toggleAboutOpen,
      setMinimized: about.setAboutMinimized,
      isExpanded: about.isAboutExpanded,
      toggleExpanded: about.toggleAboutExpanded,
    },
    Skills: {
      icon: 'Skills',
      toggleOpen: skills.toggleSkillsOpen,
      setMinimized: skills.setSkillsMinimized,
      isExpanded: skills.isSkillsExpanded,
      toggleExpanded: skills.toggleSkillsExpanded,
    },
    Projects: {
      icon: 'Projects',
      toggleOpen: projects.toggleProjectsOpen,
      setMinimized: projects.setProjectsMinimized,
      isExpanded: projects.isProjectsExpanded,
      toggleExpanded: projects.toggleProjectsExpanded,
    },
    Calculator: {
      icon: 'Calculator',
      toggleOpen: calculator.toggleCalculatorOpen,
      setMinimized: calculator.setCalculatorMinimized,
    },
    Utils: {
      icon: 'Folder',
      toggleOpen: util.toggleUtilOpen,
      setMinimized: util.setUtilMinimized,
      isExpanded: util.isUtilExpanded,
      toggleExpanded: util.toggleUtilExpanded,
    },
    Resume: {
      icon: 'Resume',
      toggleOpen: resume.toggleResumeOpen,
      setMinimized: resume.setResumeMinimized,
      isExpanded: resume.isResumeExpanded,
      toggleExpanded: resume.toggleResumeExpanded,
    },
    Terminal: {
      icon: 'Terminal',
      toggleOpen: terminal.toggleTerminalOpen,
      setMinimized: terminal.setTerminalMinimized,
      isExpanded: terminal.isTerminalExpanded,
      toggleExpanded: terminal.toggleTerminalExpanded,
    },
    Settings: {
      icon: 'Settings',
      toggleOpen: settings.toggleSettingsOpen,
      setMinimized: settings.setSettingsMinimized,
    },
  };

  const control: WindowControls | undefined = controls[title];

  const handleClose = () => {
    if (focusedWindow === title && control) {
      control.toggleOpen();
    }
  };

  const handleMinimized = () => {
    if (focusedWindow === title && control) {
      control.setMinimized(true);
      control.toggleOpen();
    }
  };

  const expand = React.useCallback(
    (isExpanded: boolean) => {
      if (isExpanded) {
        if (prevSetting === null) {
          setSize({
            width: 500,
            height: 300,
          });
          setPosition({
            x: 20,
            y: 20,
          });
        } else {
          setSize({
            width: prevSetting.width,
            height: prevSetting.height,
          });
          setPosition({
            x: prevSetting.x,
            y: prevSetting.y,
          });
        }
      } else {
        setPrevSetting({
          width: size.width,
          height: size.height,
          x: position.x,
          y: position.y,
        });

        // 36 is windowTopbar height
        setSize({
          width: width,
          height: height - 36,
        });
        setPosition({
          x: 0,
          y: 0,
        });
      }
      windowRef?.current.updateSize(size);
      windowRef?.current.updatePosition(position);
    },
    [
      height,
      position,
      prevSetting,
      setPosition,
      setPrevSetting,
      setSize,
      size,
      width,
      windowRef,
    ]
  );

  const handleExpand = () => {
    if (focusedWindow === title && control?.toggleExpanded) {
      expand(control.isExpanded ?? false);
      control.toggleExpanded();
    }
  };

  return (
    <WindowTopbarContainer className="topbar">
      <TopbarBtnContainer>
        <TopbarBtn
          color="close"
          title={focusedWindow === title ? 'Close' : undefined}
          onClick={handleClose}
          onTouchStart={handleClose}
          disabled={focusedWindow !== title}
        />
        <TopbarBtn
          color="minimize"
          title={
            focusedWindow === title && !isMobileWindow ? 'Minimize' : undefined
          }
          onClick={!isMobileWindow ? handleMinimized : undefined}
          disabled={focusedWindow !== title || isMobileWindow}
        />
        <TopbarBtn
          color="expand"
          title={
            focusedWindow === title && !isMobileWindow ? 'Expand' : undefined
          }
          onClick={!isMobileWindow ? handleExpand : undefined}
          disabled={focusedWindow !== title || isMobileWindow}
        />
        {nav && (
          <div className="flex items-center gap-0.5 ml-3">
            <button
              aria-label="Back"
              onClick={nav.onBack}
              disabled={!nav.canBack}
              className={cn(
                topbarCtrlBtn,
                nav.canBack
                  ? 'hover:bg-[var(--hover-overlay)] cursor-pointer'
                  : 'opacity-30',
              )}
            >
              <FontAwesomeIcon icon={faChevronLeft as IconProp} />
            </button>
            <button
              aria-label="Forward"
              onClick={nav.onForward}
              disabled={!nav.canForward}
              className={cn(
                topbarCtrlBtn,
                nav.canForward
                  ? 'hover:bg-[var(--hover-overlay)] cursor-pointer'
                  : 'opacity-30',
              )}
            >
              <FontAwesomeIcon icon={faChevronRight as IconProp} />
            </button>
          </div>
        )}
      </TopbarBtnContainer>
      <TopbarTitle>
        {getIcon(control?.icon ?? '', SMALL_ICON_SIZE)}
        <TopbarTitleText>{title}</TopbarTitleText>
      </TopbarTitle>
      <div className="flex justify-end items-center">
        {view && onViewChange && (
          <div className="flex items-center gap-0.5 rounded-md bg-[var(--hover-overlay)] p-0.5">
            <button
              aria-label="Icon view"
              onClick={() => onViewChange('icon')}
              className={cn(
                topbarCtrlBtn,
                view === 'icon'
                  ? 'bg-[var(--hover-overlay-strong)]'
                  : 'opacity-55 hover:opacity-100',
              )}
            >
              <FontAwesomeIcon icon={faThLarge as IconProp} />
            </button>
            <button
              aria-label="List view"
              onClick={() => onViewChange('list')}
              className={cn(
                topbarCtrlBtn,
                view === 'list'
                  ? 'bg-[var(--hover-overlay-strong)]'
                  : 'opacity-55 hover:opacity-100',
              )}
            >
              <FontAwesomeIcon icon={faList as IconProp} />
            </button>
          </div>
        )}
      </div>
    </WindowTopbarContainer>
  );
};

export default WindowTopbar;
