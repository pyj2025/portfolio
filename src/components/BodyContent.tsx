import React from 'react';
import styled from 'styled-components';
import { DraggableData } from 'react-rnd';
import { Slide, toast, ToastContainer } from 'react-toastify';
import { browserName, isBrowser, isMobile } from 'react-device-detect';
import ProjectsWindow from '../views/window/desktop/ProjectsWindow';
import AboutWindow from '../views/window/desktop/AboutWindow';
import WelcomeWindow from '../views/window/desktop/WelcomeWindow';
import SkillsWindow from '../views/window/desktop/SkillsWindow';
import { FocusedWindowType } from '../types';
import useWindowsStore from '../utils/useWindowsStore';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  background-color: transparent;
  color: white;
`;

export type WindowProps = {
  handleFocus: (_e: any, data: DraggableData) => void;
};

const BodyContent: React.FC = () => {
  const isWelcomeWindowOpen = useWindowsStore(
    (state) => state.isWelcomeWindowOpen
  );

  const isAboutOpen = useWindowsStore((state) => state.isAboutOpen);
  const isSkillsOpen = useWindowsStore((state) => state.isSkillsOpen);
  const isProjectsOpen = useWindowsStore((state) => state.isProjectsOpen);
  const setFocusedWindow = useWindowsStore((state) => state.setFocusedWindow);

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

  const handleFocus = React.useCallback(
    (_e: any, data: DraggableData) => {
      setFocusedWindow(data.node.id as FocusedWindowType);
    },
    [setFocusedWindow]
  );

  return (
    <Container>
      <ToastContainer
        position="top-right"
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
      {isWelcomeWindowOpen && <WelcomeWindow handleFocus={handleFocus} />}
      {isAboutOpen && <AboutWindow handleFocus={handleFocus} />}
      {isSkillsOpen && <SkillsWindow handleFocus={handleFocus} />}
      {isProjectsOpen && <ProjectsWindow handleFocus={handleFocus} />}
    </Container>
  );
};

export default BodyContent;
