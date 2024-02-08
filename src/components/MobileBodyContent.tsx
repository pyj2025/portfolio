import React from 'react';
import styled from 'styled-components';
import { DraggableData } from 'react-rnd';

import { Slide, toast, ToastContainer } from 'react-toastify';
import { browserName, isBrowser, isMobile } from 'react-device-detect';
import 'react-toastify/dist/ReactToastify.css';
import { FocusedWindowType } from '../types';
import useScreenSize, { MOBILE_MAX_WIDTH } from '../utils/useScreenSize';
import MobileApp from './MobileApp';
import MobileWelcomeWindow from '../views/window/mobile/MobileWelcomeWindow';
import MobileAboutWindow from '../views/window/mobile/MobileAboutWindow';
import MobileSkillsWindow from '../views/window/mobile/MobileSkillsWindow';
import MobileProjectsWindow from '../views/window/mobile/MobileProjectsWindow';
import useWindowsStore from '../utils/useWindowsStore';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 25px - 80px);
  background-color: transparent;
  color: white;
`;

export type WindowProps = {
  handleFocus: (_e: any, data: DraggableData) => void;
};

const MobileBodyContent: React.FC = () => {
  const isWelcomeWindowOpen = useWindowsStore(
    (state) => state.isWelcomeWindowOpen
  );

  const isAboutOpen = useWindowsStore((state) => state.isAboutOpen);

  const isSkillsOpen = useWindowsStore((state) => state.isSkillsOpen);

  const isProjectsOpen = useWindowsStore((state) => state.isProjectsOpen);

  const setFocusedWindow = useWindowsStore((state) => state.setFocusedWindow);

  const { width } = useScreenSize();
  const [checkMobile, setCheckMobile] = React.useState(false);

  React.useEffect(() => {
    const message =
      "You've accessed via " +
      (isBrowser ? 'desktop ' : isMobile ? 'mobile ' : 'tablet ') +
      browserName.toLowerCase();
    toast(message, {
      transition: Slide,
      type: 'info',
    });
  }, []);

  React.useEffect(() => {
    if (isMobile || width <= MOBILE_MAX_WIDTH) {
      setCheckMobile(true);
    }
  }, [width]);
  const handleFocus = (_e: any, data: DraggableData) => {
    setFocusedWindow(data.node.id as FocusedWindowType);
  };

  return (
    <Container>
      <ToastContainer
        position={checkMobile ? 'top-center' : 'top-right'}
        autoClose={5000}
        newestOnTop
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
        draggablePercent={60}
      />
      <MobileApp />
      {isWelcomeWindowOpen && <MobileWelcomeWindow handleFocus={handleFocus} />}
      {isAboutOpen && <MobileAboutWindow handleFocus={handleFocus} />}
      {isSkillsOpen && <MobileSkillsWindow handleFocus={handleFocus} />}
      {isProjectsOpen && <MobileProjectsWindow handleFocus={handleFocus} />}
    </Container>
  );
};

export default MobileBodyContent;
