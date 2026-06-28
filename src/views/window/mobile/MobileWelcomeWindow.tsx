import React from "react";
import { DraggableData, Rnd } from "react-rnd";
import useScreenSize, { TABLET_MAX_WIDTH } from "../../../utils/useScreenSize";
import { WindowPositionSetting, WindowSizeSetting } from "../../../types";
import Loaded from "../../../components/welcome/line/Loaded";
import Intro from "../../../components/welcome/line/Intro";
import Contact from "../../../components/welcome/line/Contact";
import useWindowsStore from "../../../utils/useWindowsStore";
import WelcomeTopbar from "../../../components/welcome/WelcomeTopbar";
import TerminalFirstLine from "../../../components/welcome/line/TerminalFirstLine";
import TerminalSecondLine from "../../../components/welcome/line/TerminalSecondLine";
import TerminalThirdLine from "../../../components/welcome/line/TerminalThirdLine";

const MobileWelcomeWindow: React.FC = () => {
  const { width, height } = useScreenSize();
  const setFocusedWindow = useWindowsStore(state => state.setFocusedWindow);

  const welcomeRef = React.useRef<any>();

  const [windowPosition, setWindowPosition] = React.useState<WindowPositionSetting>({
    x: Math.round(Math.max((width - 700) / 2, 0)),
    y: 0,
  });
  const [windowSize, setWindowSize] = React.useState<WindowSizeSetting>({
    width: 700,
    height: 450,
  });

  const [firstLine, setFirstLine] = React.useState(false);
  const [secondLine, setSecondLine] = React.useState(false);
  const [secondContent, setSecondContent] = React.useState(false);
  const [thirdLine, setThirdLine] = React.useState(false);
  const [thirdContent, setThirdContent] = React.useState(false);

  React.useEffect(() => {
    if (width <= TABLET_MAX_WIDTH) {
      setWindowSize({
        width,
        height: height - 80 - 25,
      });
      setWindowPosition({
        x: 0,
        y: 0,
      });
    }
  }, [width, height]);

  return (
    <Rnd
      className="w-full grid items-center justify-center bg-white shadow-[0px_0px_8px_black]"
      id="Welcome"
      ref={welcomeRef}
      size={{ width: windowSize.width, height: windowSize.height }}
      position={{ x: windowPosition.x, y: windowPosition.y }}
      dragHandleClassName="topbar"
      onDragStart={(_e: any, _data: DraggableData) => {
        setFocusedWindow("Welcome");
      }}
      enableResizing={false}
    >
      <WelcomeTopbar />
      <div className="flex flex-col justify-start w-full h-[calc(100%-28px)] bg-[#282a36] text-white">
        <Loaded setFirstLine={setFirstLine} />
        {firstLine ? <TerminalFirstLine directory="~/" setSecondLine={setSecondLine} /> : null}
        {secondLine ? (
          <TerminalSecondLine
            directory="~/portfolio/"
            setSecondContent={setSecondContent}
            setThirdLine={setThirdLine}
          />
        ) : null}
        {secondContent ? <Intro /> : null}
        {thirdLine ? (
          <TerminalThirdLine directory="~/portfolio/" setThirdContent={setThirdContent} />
        ) : null}
        {thirdContent ? <Contact /> : null}
      </div>
    </Rnd>
  );
};

export default MobileWelcomeWindow;
