import React from "react";
import styled from "styled-components";
import { Slide, toast, ToastContainer } from "react-toastify";
import { browserName, isBrowser, isMobile } from "react-device-detect";
import ProjectsWindow from "../views/window/desktop/ProjectsWindow";
import AboutWindow from "../views/window/desktop/AboutWindow";
import WelcomeWindow from "../views/window/desktop/WelcomeWindow";
import SkillsWindow from "../views/window/desktop/SkillsWindow";
import useWindowsStore from "../utils/useWindowsStore";
import useAboutStore from "../utils/useAboutStore";
import useSkillsStore from "../utils/useSkillsStore";
import useProjectsStore from "../utils/useProjectsStore";
import { WindowsContent } from ".";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  background-color: transparent;
  color: white;
`;

const BodyContent: React.FC = () => {
  const isWelcomeWindowOpen = useWindowsStore(state => state.isWelcomeWindowOpen);
  const isAboutOpen = useAboutStore(state => state.isAboutOpen);
  const isSkillsOpen = useSkillsStore(state => state.isSkillsOpen);
  const isProjectsOpen = useProjectsStore(state => state.isProjectsOpen);

  React.useEffect(() => {
    const message =
      "You've accessed via " +
      (isBrowser ? "desktop " : isMobile ? "mobile " : "tablet ") +
      browserName.toLowerCase();
    toast(message, {
      transition: Slide,
      type: "info",
    });
  }, []);

  const renderContent = () => {
    const windows = [
      { Component: WelcomeWindow, isOpen: isWelcomeWindowOpen },
      { Component: AboutWindow, isOpen: isAboutOpen },
      { Component: SkillsWindow, isOpen: isSkillsOpen },
      { Component: ProjectsWindow, isOpen: isProjectsOpen },
    ];

    return <WindowsContent windows={windows} />;
  };

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
      {renderContent()}
    </Container>
  );
};

export default BodyContent;
