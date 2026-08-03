import React from "react";
import { DraggableData, Position, ResizableDelta } from "react-rnd";
import { Window } from "./WindowChrome";
import {
  AppId,
  ViewMode,
  WindowPositionSetting,
  WindowSizeSetting,
} from "../types";
import useScreenSize, { TABLET_MAX_WIDTH } from "../utils/useScreenSize";
import useWindowsStore from "../utils/useWindowsStore";
import { cn } from "../utils/cn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
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
  /** Window has a sidebar — gets a collapse toggle in the mobile topbar. */
  sidebar?: boolean;
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
  sidebar = false,
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
  // mobile sidebars start collapsed — 168px of a phone screen is most of the content
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    if (width < TABLET_MAX_WIDTH) {
      setSize({ width, height: height - 80 - 25 });
      setPosition({ x: 0, y: 0 });
      setIsMobileWindow(true);
      // no view toggle on mobile — list is the only useful layout there
      onViewChange?.("list");
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
      // mobile windows are full-screen; dragging or resizing only breaks the layout
      disableDragging={isMobileWindow}
      enableResizing={resizable && !isMobileWindow}
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
      <div
        className={cn(
          "relative w-full h-[calc(100%-36px)] group",
          isMobileWindow && !sidebarOpen && "nav-collapsed",
        )}
        onClick={() => {
          focus();
          // any tap dismisses the mobile sidebar, including picking an item in it
          if (sidebarOpen) setSidebarOpen(false);
        }}
      >
        {typeof children === "function"
          ? children({ isMobileWindow, size })
          : children}
        {sidebar && isMobileWindow && (
          // opaque footer spanning the sidebar — the list scrolls behind it, not over it
          <div
            style={{ width: sidebarOpen ? 168 : 56 }}
            className="absolute bottom-0 left-0 z-20 h-11 bg-[var(--wc-bg)]"
          >
            <div
              className={cn(
                "flex items-center w-full h-full bg-[var(--sidebar-bg)]",
                // expanded: right edge with a gutter. collapsed: centered in the rail.
                sidebarOpen ? "justify-end pr-3" : "justify-center",
              )}
            >
              <button
                aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
                aria-expanded={sidebarOpen}
                onClick={e => {
                  e.stopPropagation();
                  setSidebarOpen(prev => !prev);
                }}
                className="w-8 h-8 flex items-center justify-center rounded-md border-0 bg-[var(--hover-overlay)] text-[color:var(--wc-text)] text-[13px] cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={(sidebarOpen ? faAngleDoubleLeft : faAngleDoubleRight) as IconProp}
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </Window>
  );
};

export default AppWindow;
