import React from "react";
import { DraggableData, Position, ResizableDelta } from "react-rnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faPalette } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { WindowPositionSetting, WindowSizeSetting } from "../../../types";
import {
  NavItmLabel,
  NavSectionLabel,
  Window,
  WindowBody,
  WindowBodyContent,
  WindowBodyNavbar,
  WindowBodyNavItm,
} from "../../../GlobalStyle";
import useScreenSize, { TABLET_MAX_WIDTH } from "../../../utils/useScreenSize";
import { WindowTopbar } from "../../../components";
import useWindowsStore from "../../../utils/useWindowsStore";
import useThemeStore, { ThemeMode } from "../../../utils/useThemeStore";
import { cn } from "../../../utils/cn";

type ThemeCardProps = {
  mode: ThemeMode;
  label: string;
  active: boolean;
  onSelect: () => void;
};

const ThemeCard: React.FC<ThemeCardProps> = ({ mode, label, active, onSelect }) => (
  <button
    onClick={e => {
      e.stopPropagation();
      onSelect();
    }}
    className={cn(
      "flex flex-col items-center gap-1.5 p-1.5 rounded-xl border-2 transition-colors cursor-pointer bg-transparent",
      active ? "border-[var(--accent)]" : "border-transparent hover:border-[var(--hover-overlay-strong)]",
    )}
  >
    <div
      className={cn(
        "w-28 h-[72px] rounded-lg overflow-hidden shadow-md border",
        mode === "light" ? "bg-[#f5f5f7] border-black/10" : "bg-[#1d1f21] border-white/10",
      )}
    >
      <div className={cn("w-full h-3", mode === "light" ? "bg-[#e8e8ed]" : "bg-[#2c2c2f]")} />
      <div className="flex h-full">
        <div className={cn("w-1/3 h-full", mode === "light" ? "bg-[#ececee]" : "bg-[#39393d]")} />
        <div className="flex-1 p-1.5">
          <div className={cn("w-3/4 h-1.5 rounded-full mb-1", mode === "light" ? "bg-black/20" : "bg-white/25")} />
          <div className={cn("w-1/2 h-1.5 rounded-full", mode === "light" ? "bg-black/10" : "bg-white/15")} />
        </div>
      </div>
    </div>
    <div className="flex items-center gap-1.5 text-[13px] text-[color:var(--wc-text)]">
      {active && (
        <FontAwesomeIcon icon={faCheckCircle as IconProp} className="text-[var(--accent)]" />
      )}
      {label}
    </div>
  </button>
);

const SettingsWindow: React.FC = () => {
  const { width, height } = useScreenSize();
  const { focusedWindow, setFocusedWindow } = useWindowsStore(state => state);
  const { theme, setTheme } = useThemeStore(state => state);

  const settingsRef = React.useRef<any>();

  const [size, setSize] = React.useState<WindowSizeSetting>({
    width: 560,
    height: 360,
  });
  const [position, setPosition] = React.useState<WindowPositionSetting>({
    x: 180,
    y: 100,
  });
  const [prevSetting, setPrevSetting] = React.useState<
    (WindowSizeSetting & WindowPositionSetting) | null
  >(null);
  const [isMobileWindow, setIsMobileWindow] = React.useState(false);

  React.useEffect(() => {
    if (width < TABLET_MAX_WIDTH) {
      setSize({ width, height: height - 80 - 25 });
      setPosition({ x: 0, y: 0 });
      setIsMobileWindow(true);
    } else {
      setIsMobileWindow(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  const focusWindow = React.useCallback(() => {
    setFocusedWindow("Settings");
  }, [setFocusedWindow]);

  return (
    <Window
      id="Settings"
      ref={settingsRef}
      size={{ width: size.width, height: size.height }}
      position={{ x: position.x, y: position.y }}
      dragHandleClassName="topbar"
      minWidth={isMobileWindow ? width : 480}
      minHeight={320}
      style={{ zIndex: focusedWindow === "Settings" ? 10 : undefined }}
      onDragStart={() => focusWindow()}
      onDragStop={(_e: any, data: DraggableData) => setPosition({ x: data.x, y: data.y })}
      onResizeStop={(
        _e: MouseEvent | TouchEvent,
        _dir: any,
        ref: any,
        _delta: ResizableDelta,
        pos: Position,
      ) => {
        setSize({ width: ref.style.width, height: ref.style.height });
        setPosition({ x: pos.x, y: pos.y });
      }}
    >
      <WindowTopbar
        title="Settings"
        windowRef={settingsRef}
        size={size}
        setSize={setSize}
        position={position}
        setPosition={setPosition}
        prevSetting={prevSetting}
        setPrevSetting={setPrevSetting}
        isMobileWindow={isMobileWindow}
      />
      <WindowBody onClick={focusWindow}>
        <WindowBodyNavbar>
          <NavSectionLabel>Settings</NavSectionLabel>
          <WindowBodyNavItm focus first>
            <FontAwesomeIcon
              icon={faPalette as IconProp}
              className="text-white"
              style={{ fontSize: 14 }}
            />
            <NavItmLabel>Appearance</NavItmLabel>
          </WindowBodyNavItm>
        </WindowBodyNavbar>
        <WindowBodyContent>
          <div className="p-5">
            <div className="text-sm font-medium mb-1">Appearance</div>
            <div className="text-xs text-[color:var(--wc-muted)] mb-4">
              Customize how the desktop looks.
            </div>
            <div className="flex gap-4">
              <ThemeCard
                mode="light"
                label="Light"
                active={theme === "light"}
                onSelect={() => setTheme("light")}
              />
              <ThemeCard
                mode="dark"
                label="Dark"
                active={theme === "dark"}
                onSelect={() => setTheme("dark")}
              />
            </div>
          </div>
        </WindowBodyContent>
      </WindowBody>
    </Window>
  );
};

export default SettingsWindow;
