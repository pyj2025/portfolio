import React from 'react';
import styled from 'styled-components';
import { Slide, toast, ToastContainer } from 'react-toastify';
import { browserName, isBrowser, isMobile } from 'react-device-detect';
import ProjectsWindow from '../views/window/desktop/ProjectsWindow';
import AboutWindow from '../views/window/desktop/AboutWindow';
import WelcomeWindow from '../views/window/desktop/WelcomeWindow';
import SkillsWindow from '../views/window/desktop/SkillsWindow';
import useWindowsStore from '../utils/useWindowsStore';
import 'react-toastify/dist/ReactToastify.css';
import useAboutStore from '../utils/useAboutStore';
import useSkillsStore from '../utils/useSkillsStore';
import useProjectsStore from '../utils/useProjectsStore';

const Container = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  background-color: transparent;
  color: white;
`;

const BodyContent: React.FC = () => {
  const isWelcomeWindowOpen = useWindowsStore(
    (state) => state.isWelcomeWindowOpen
  );
  const isAboutOpen = useAboutStore((state) => state.isAboutOpen);
  const isSkillsOpen = useSkillsStore((state) => state.isSkillsOpen);
  const isProjectsOpen = useProjectsStore((state) => state.isProjectsOpen);

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
      {isWelcomeWindowOpen && <WelcomeWindow />}
      {isAboutOpen && <AboutWindow />}
      {isSkillsOpen && <SkillsWindow />}
      {isProjectsOpen && <ProjectsWindow />}
    </Container>
  );
};

export default BodyContent;
