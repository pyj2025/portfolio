import React from "react";
import { DraggableData, Position, ResizableDelta } from "react-rnd";
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
import { getIcon, getNavIcon } from "../../../components/getIcon";
import useWindowsStore from "../../../utils/useWindowsStore";
import useCalculatorStore from "../../../utils/useCalculatorStore";

type UtilApp = {
  label: string;
  icon: string;
  onOpen: () => void;
};

const UtilWindow: React.FC = () => {
  const { width, height } = useScreenSize();
  const { focusedWindow, setFocusedWindow } = useWindowsStore(state => state);
  const openCalculator = useCalculatorStore(state => state.openCalculator);

  const utilRef = React.useRef<any>();

  const [size, setSize] = React.useState<WindowSizeSetting>({
    width: 500,
    height: 320,
  });
  const [position, setPosition] = React.useState<WindowPositionSetting>({
    x: 200,
    y: 90,
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

  const focusUtilWindow = React.useCallback(() => {
    setFocusedWindow("Utils");
  }, [setFocusedWindow]);

  const apps: UtilApp[] = [
    { label: "Calculator", icon: "Calculator", onOpen: openCalculator },
  ];

  return (
    <Window
      id="Utils"
      ref={utilRef}
      size={{ width: size.width, height: size.height }}
      position={{ x: position.x, y: position.y }}
      dragHandleClassName="topbar"
      minWidth={isMobileWindow ? width : 420}
      minHeight={280}
      style={{ zIndex: focusedWindow === "Utils" ? 10 : undefined }}
      onDragStart={() => focusUtilWindow()}
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
        title="Utils"
        windowRef={utilRef}
        size={size}
        setSize={setSize}
        position={position}
        setPosition={setPosition}
        prevSetting={prevSetting}
        setPrevSetting={setPrevSetting}
        isMobileWindow={isMobileWindow}
      />
      <WindowBody onClick={focusUtilWindow}>
        <WindowBodyNavbar>
          <NavSectionLabel>Favorites</NavSectionLabel>
          <WindowBodyNavItm focus first>
            {getNavIcon("Folder", true)}
            <NavItmLabel>Utils</NavItmLabel>
          </WindowBodyNavItm>
        </WindowBodyNavbar>
        <WindowBodyContent>
          <div className="flex flex-row flex-wrap gap-2.5 m-2.5">
            {apps.map(app => (
              <button
                key={app.label}
                title={app.label}
                onClick={e => {
                  e.stopPropagation();
                  app.onOpen();
                }}
                className="flex flex-col w-[60px] justify-center items-center p-0.5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
              >
                <div className="mb-1">{getIcon(app.icon, 48)}</div>
                <div className="text-xs text-white text-center">{app.label}</div>
              </button>
            ))}
          </div>
        </WindowBodyContent>
      </WindowBody>
    </Window>
  );
};

export default UtilWindow;
