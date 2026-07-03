import React from "react";
import { DraggableData, Position, ResizableDelta } from "react-rnd";
import { WindowPositionSetting, WindowSizeSetting } from "../../../types";
import { Window } from "../../../GlobalStyle";
import useScreenSize, { TABLET_MAX_WIDTH } from "../../../utils/useScreenSize";
import { WindowTopbar } from "../../../components";
import useWindowsStore from "../../../utils/useWindowsStore";
import Terminal from "../../../components/terminal/Terminal";

const TerminalWindow: React.FC = () => {
  const { width, height } = useScreenSize();
  const { focusedWindow, setFocusedWindow } = useWindowsStore(state => state);

  const terminalRef = React.useRef<any>();

  const [size, setSize] = React.useState<WindowSizeSetting>({
    width: 600,
    height: 400,
  });
  const [position, setPosition] = React.useState<WindowPositionSetting>({
    x: 140,
    y: 120,
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
    setFocusedWindow("Terminal");
  }, [setFocusedWindow]);

  return (
    <Window
      id="Terminal"
      ref={terminalRef}
      size={{ width: size.width, height: size.height }}
      position={{ x: position.x, y: position.y }}
      dragHandleClassName="topbar"
      minWidth={isMobileWindow ? width : 420}
      minHeight={280}
      style={{ zIndex: focusedWindow === "Terminal" ? 10 : undefined }}
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
        title="Terminal"
        windowRef={terminalRef}
        size={size}
        setSize={setSize}
        position={position}
        setPosition={setPosition}
        prevSetting={prevSetting}
        setPrevSetting={setPrevSetting}
        isMobileWindow={isMobileWindow}
      />
      <div className="w-full h-[calc(100%-36px)]" onClick={focusWindow}>
        <Terminal />
      </div>
    </Window>
  );
};

export default TerminalWindow;
