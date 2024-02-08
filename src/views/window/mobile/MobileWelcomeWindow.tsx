import React from 'react';
import styled from 'styled-components';
import { DraggableData, Rnd } from 'react-rnd';
import useScreenSize, { TABLET_MAX_WIDTH } from '../../../utils/useScreenSize';
import { WindowPositionSetting, WindowSizeSetting } from '../../../types';
import Loaded from '../../../components/welcome/Loaded';
import Intro from '../../../components/welcome/Intro';
import Contact from '../../../components/welcome/Contact';
import useWindowsStore from '../../../utils/useWindowsStore';
import WelcomeTopbar from '../../../components/WelcomeTopbar';
import TerminalFirstLine from '../../../components/welcome/TerminalFirstLine';
import TerminalSecondLine from '../../../components/welcome/TerminalSecondLine';
import TerminalThirdLine from '../../../components/welcome/TerminalThirdLine';

const WelcomeWindowContainer = styled(Rnd)`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: white;
  /* border-radius: 6px; */
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
  /* border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px; */
`;

const MobileWelcomeWindow: React.FC = () => {
  const { width, height } = useScreenSize();
  const setFocusedWindow = useWindowsStore((state) => state.setFocusedWindow);

  const welcomeRef = React.useRef<any>();

  const [windowPosition, setWindowPosition] =
    React.useState<WindowPositionSetting>({
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
    <WelcomeWindowContainer
      id="Welcome"
      ref={welcomeRef}
      size={{ width: windowSize.width, height: windowSize.height }}
      position={{ x: windowPosition.x, y: windowPosition.y }}
      dragHandleClassName="topbar"
      onDragStart={(_e: any, _data: DraggableData) => {
        setFocusedWindow('Welcome');
      }}
      enableResizing={false}
    >
      <WelcomeTopbar />
      <WelcomeWindowBody>
        <Loaded setFirstLine={setFirstLine} />
        {firstLine ? (
          <TerminalFirstLine directory="~/" setSecondLine={setSecondLine} />
        ) : null}
        {secondLine ? (
          <TerminalSecondLine
            directory="~/portfolio/"
            setSecondContent={setSecondContent}
            setThirdLine={setThirdLine}
          />
        ) : null}
        {secondContent ? <Intro /> : null}
        {thirdLine ? (
          <TerminalThirdLine
            directory="~/portfolio/"
            setThirdContent={setThirdContent}
          />
        ) : null}
        {thirdContent ? <Contact /> : null}
      </WelcomeWindowBody>
    </WelcomeWindowContainer>
  );
};

export default MobileWelcomeWindow;
