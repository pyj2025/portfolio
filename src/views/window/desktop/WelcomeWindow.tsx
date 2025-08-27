import React from "react";
import styled from "styled-components";
import { DraggableData, Rnd } from "react-rnd";
import useScreenSize, { TABLET_MAX_WIDTH } from "../../../utils/useScreenSize";
import useWindowsStore from "../../../utils/useWindowsStore";
import { WindowPositionSetting, WindowSizeSetting } from "../../../types";
import Loaded from "../../../components/welcome/line/Loaded";
import Intro from "../../../components/welcome/Intro";
import Contact from "../../../components/welcome/Contact";
import WelcomeTopbar from "../../../components/welcome/WelcomeTopbar";
import TerminalFirstLine from "../../../components/welcome/TerminalFirstLine";
import TerminalSecondLine from "../../../components/welcome/TerminalSecondLine";
import TerminalThirdLine from "../../../components/welcome/TerminalThirdLine";

const WelcomeWindowContainer = styled(Rnd)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 0.375rem;
  -webkit-border-radius: 0.375rem;
  -moz-border-radius: 0.375rem;
  -khtml-border-radius: 0.375rem;
  overflow: hidden;
  box-shadow: 0px 0px 8px black;
`;

const WelcomeWindowBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: calc(100% - 28px);
  background-color: #282a36;
  color: #ffffff;
`;

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
    <WelcomeWindowContainer
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
      <WelcomeWindowBody>
        <Loaded setFirstLine={setFirstLine} />
        {firstLine ? <TerminalFirstLine setSecondLine={setSecondLine} /> : null}
        {secondLine ? (
          <TerminalSecondLine setSecondContent={setSecondContent} setThirdLine={setThirdLine} />
        ) : null}
        {secondContent ? <Intro /> : null}
        {thirdLine ? <TerminalThirdLine setThirdContent={setThirdContent} /> : null}
        {thirdContent ? <Contact /> : null}
      </WelcomeWindowBody>
    </WelcomeWindowContainer>
  );
};

export default WelcomeWindow;
