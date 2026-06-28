import React from "react";
import { DraggableData, Rnd } from "react-rnd";
import useScreenSize, { TABLET_MAX_WIDTH } from "../../../utils/useScreenSize";
import useWindowsStore from "../../../utils/useWindowsStore";
import { WindowPositionSetting, WindowSizeSetting } from "../../../types";
import Loaded from "../../../components/welcome/line/Loaded";
import Intro from "../../../components/welcome/line/Intro";
import Contact from "../../../components/welcome/line/Contact";
import WelcomeTopbar from "../../../components/welcome/WelcomeTopbar";
import TerminalFirstLine from "../../../components/welcome/line/TerminalFirstLine";
import TerminalSecondLine from "../../../components/welcome/line/TerminalSecondLine";
import TerminalThirdLine from "../../../components/welcome/line/TerminalThirdLine";

const WelcomeWindow: React.FC = () => {
  const { width, height } = useScreenSize();
  const setFocusedWindow = useWindowsStore(state => state.setFocusedWindow);

  const welcomeRef = React.useRef<any>();

  const [welcomeSize, setWelcomeSize] = React.useState<WindowSizeSetting>({
    width: 700,
    height: 450,
  });
  const [welcomePosition, setWelcomePosition] = React.useState<WindowPositionSetting>({
    x: Math.round(Math.max((width - 700) / 2, 0)),
    y: 0,
  });

  const [firstLine, setFirstLine] = React.useState(false);
  const [secondLine, setSecondLine] = React.useState(false);
  const [secondContent, setSecondContent] = React.useState(false);
  const [thirdLine, setThirdLine] = React.useState(false);
  const [thirdContent, setThirdContent] = React.useState(false);

  React.useEffect(() => {
    if (width <= TABLET_MAX_WIDTH) {
      setWelcomeSize({
        width,
        height: height - 80 - 25,
      });
      setWelcomePosition({
        x: 0,
        y: 0,
      });
    }
  }, [width, height]);

  return (
    <Rnd
      className="w-full flex items-center justify-center bg-transparent rounded-md overflow-hidden shadow-[0px_0px_8px_black]"
      id="Welcome"
      ref={welcomeRef}
      size={{ width: welcomeSize.width, height: welcomeSize.height }}
      position={{ x: welcomePosition.x, y: welcomePosition.y }}
      dragHandleClassName="topbar"
      onDragStart={(_e: any, _data: DraggableData) => {
        setFocusedWindow("Welcome");
      }}
      onDragStop={(_e: any, data: DraggableData) => {
        setWelcomePosition({ x: data.x, y: data.y });
      }}
      enableResizing={false}
    >
      <WelcomeTopbar />
      <div className="flex flex-col justify-start w-full h-[calc(100%-28px)] bg-[#282a36] text-white">
        <Loaded setFirstLine={setFirstLine} />
        {firstLine ? <TerminalFirstLine setSecondLine={setSecondLine} /> : null}
        {secondLine ? (
          <TerminalSecondLine setSecondContent={setSecondContent} setThirdLine={setThirdLine} />
        ) : null}
        {secondContent ? <Intro /> : null}
        {thirdLine ? <TerminalThirdLine setThirdContent={setThirdContent} /> : null}
        {thirdContent ? <Contact /> : null}
      </div>
    </Rnd>
  );
};

export default WelcomeWindow;
