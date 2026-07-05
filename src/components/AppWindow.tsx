import React from "react";
import { DraggableData, Position, ResizableDelta } from "react-rnd";
import { Window } from "../GlobalStyle";
import {
  AppId,
  ViewMode,
  WindowPositionSetting,
  WindowSizeSetting,
} from "../types";
import useScreenSize, { TABLET_MAX_WIDTH } from "../utils/useScreenSize";
import useWindowsStore from "../utils/useWindowsStore";
import WindowTopbar, { TopbarNav } from "./WindowTopbar";

type ScreenSize = { width: number; height: number };

type ChildrenContext = {
  isMobileWindow: boolean;
  size: WindowSizeSetting;
};

export type AppWindowProps = {
  id: AppId;
  defaultSize: WindowSizeSetting;
  defaultPosition:
    | WindowPositionSetting
    | ((screen: ScreenSize) => WindowPositionSetting);
  minWidth?: number;
  minHeight?: number;
  resizable?: boolean;
  nav?: TopbarNav;
  view?: ViewMode;
  onViewChange?: (view: ViewMode) => void;
  children:
    | React.ReactNode
    | ((context: ChildrenContext) => React.ReactNode);
};

/**
 * Shared shell for every app window: geometry state, mobile full-screen
 * behavior, focus handling, drag/resize wiring, and the Finder topbar.
 */
const AppWindow: React.FC<AppWindowProps> = ({
  id,
  defaultSize,
  defaultPosition,
  minWidth = 500,
  minHeight = 300,
  resizable = true,
  nav,
  view,
  onViewChange,
  children,
}) => {
  const { width, height } = useScreenSize();
  const { focusedWindow, setFocusedWindow } = useWindowsStore(state => state);

  const windowRef = React.useRef<any>();

  const [size, setSize] = React.useState<WindowSizeSetting>(defaultSize);
  const [position, setPosition] = React.useState<WindowPositionSetting>(() =>
    typeof defaultPosition === "function"
      ? defaultPosition({ width, height })
      : defaultPosition,
  );
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

  const focus = React.useCallback(() => {
    setFocusedWindow(id);
  }, [setFocusedWindow, id]);

  return (
    <Window
      id={id}
      ref={windowRef}
      size={{ width: size.width, height: size.height }}
      position={{ x: position.x, y: position.y }}
      dragHandleClassName="topbar"
      enableResizing={resizable}
      minWidth={isMobileWindow ? width : minWidth}
      minHeight={minHeight}
      style={{ zIndex: focusedWindow === id ? 10 : undefined }}
      onDragStart={(_e: any, _data: DraggableData) => {
        focus();
      }}
      onDragStop={(_e: any, data: DraggableData) => {
        setPosition({ x: data.x, y: data.y });
      }}
      onResizeStop={(
        _e: MouseEvent | TouchEvent,
        _dir: any,
        ref: any,
        _delta: ResizableDelta,
        pos: Position,
      ) => {
        setSize({
          width: parseInt(ref.style.width, 10),
          height: parseInt(ref.style.height, 10),
        });
        setPosition({ x: pos.x, y: pos.y });
      }}
    >
      <WindowTopbar
        title={id}
        windowRef={windowRef}
        size={size}
        setSize={setSize}
        position={position}
        setPosition={setPosition}
        prevSetting={prevSetting}
        setPrevSetting={setPrevSetting}
        isMobileWindow={isMobileWindow}
        nav={nav}
        view={view}
        onViewChange={onViewChange}
      />
      <div className="w-full h-[calc(100%-36px)]" onClick={focus}>
        {typeof children === "function"
          ? children({ isMobileWindow, size })
          : children}
      </div>
    </Window>
  );
};

export default AppWindow;
