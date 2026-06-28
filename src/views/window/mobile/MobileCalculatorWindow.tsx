import React from "react";
import { DraggableData } from "react-rnd";
import { WindowPositionSetting, WindowSizeSetting } from "../../../types";
import { Window } from "../../../GlobalStyle";
import useScreenSize, { TABLET_MAX_WIDTH } from "../../../utils/useScreenSize";
import { WindowTopbar } from "../../../components";
import useWindowsStore from "../../../utils/useWindowsStore";
import { Calculator } from "../../../components/calculator";

const MobileCalculatorWindow: React.FC = () => {
  const { width, height } = useScreenSize();
  const { focusedWindow, setFocusedWindow } = useWindowsStore(state => state);

  const calcRef = React.useRef<any>();

  const [size, setSize] = React.useState<WindowSizeSetting>({
    width: 240,
    height: 400,
  });
  const [position, setPosition] = React.useState<WindowPositionSetting>({
    x: 60,
    y: 60,
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

  return (
    <Window
      id="Calculator"
      ref={calcRef}
      size={{ width: size.width, height: size.height }}
      position={{ x: position.x, y: position.y }}
      dragHandleClassName="topbar"
      enableResizing={false}
      minWidth={isMobileWindow ? width : 240}
      minHeight={400}
      style={{ zIndex: focusedWindow === "Calculator" ? 10 : undefined }}
      onDragStart={() => setFocusedWindow("Calculator")}
      onDragStop={(_e: any, data: DraggableData) => setPosition({ x: data.x, y: data.y })}
    >
      <WindowTopbar
        title="Calculator"
        windowRef={calcRef}
        size={size}
        setSize={setSize}
        position={position}
        setPosition={setPosition}
        prevSetting={prevSetting}
        setPrevSetting={setPrevSetting}
        isMobileWindow={isMobileWindow}
      />
      <div className="w-full h-[calc(100%-36px)]">
        <Calculator />
      </div>
    </Window>
  );
};

export default MobileCalculatorWindow;
