import React from "react";
import styled from "styled-components";

import { isMobile, browserName, isBrowser } from "react-device-detect";
import { Slide, toast, ToastContainer } from "react-toastify";
import BodyContent from "../BodyContent";
import DesktopTopBar from "../DesktopTopBar";
import FooterBar from "../FooterBar";
import MenuContainer from "../MenuContainer";
import MobileTopBar from "../MobileTopBar";
import macOS from "../image/macos.jpg";
import "react-toastify/dist/ReactToastify.css";

const TABLET_MAX_WIDTH = 900;
const MOBILE_MAX_WIDTH = 768;

const BodyContainer = styled.div`
  background-image: url(${macOS});
  background-size: cover;
  height: 100%;
  width: 100%;
`;

type MainAppProps = {
  width: number;
  height: number;
};

const MainApp: React.FC<MainAppProps> = ({ width, height }) => {
  const [focusedWindow, setFocusedWindow] = React.useState("Welcome");

  const [isWelcomeWindowOpen, setWelcomeWindowOpen] = React.useState(true);

  const [isAboutOpen, setAboutOpen] = React.useState(false);
  const [isAboutMinimized, setAboutMinimized] = React.useState(false);
  const [isAboutExpanded, setAboutExpanded] = React.useState(false);

  const [isSkillsOpen, setSkillsOpen] = React.useState(false);
  const [isSkillsMinimized, setSkillsMinimized] = React.useState(false);
  const [isSkillsExpanded, setSkillsExpanded] = React.useState(false);

  const [isProjectsOpen, setProjectsOpen] = React.useState(false);
  const [isProjectsMinimized, setProjectsMinimized] = React.useState(false);
  const [isProjectsExpanded, setProjectsExpanded] = React.useState(false);

  const [isDesktopAboutOpen, setDesktopAboutOpen] = React.useState(false);

  React.useEffect(() => {
    const message =
      "You've accessed via " +
      (isBrowser ? "desktop " : isMobile ? "mobile " : "tablet") +
      browserName.toLowerCase();

    toast(message, {
      transition: Slide,
      type: "info",
    });
  }, []);

  React.useEffect(() => {
    console.log("width = ", width);
    console.log("height = ", height);

    console.log("window.innerWidth = ", window.innerWidth);
    console.log("window.innerHeight = ", window.innerHeight);

    if (width < MOBILE_MAX_WIDTH) {
      if (isDesktopAboutOpen) setDesktopAboutOpen(false);
    }
  }, [width, height]);

  const toggleDesktopAboutOpen = () => {
    setDesktopAboutOpen((state) => !state);

    if (!isDesktopAboutOpen) {
      setFocusedWindow("DesktopAbout");
    } else {
      setFocusedWindow("");
    }
  };

  const toggleAboutOpen = () => {
    setAboutOpen((state) => !state);

    if (!isAboutOpen) {
      setFocusedWindow("About");
    } else {
      setFocusedWindow("");
    }
  };

  const toggleAboutExpanded = () => {
    setAboutExpanded((state) => !state);
  };

  const toggleSkillsOpen = () => {
    setSkillsOpen((state) => !state);

    if (!isSkillsOpen) {
      setFocusedWindow("Skills");
    } else {
      setFocusedWindow("");
    }
  };

  const toggleSkillsExpanded = () => {
    setSkillsExpanded((state) => !state);
  };

  const toggleProjectsOpen = () => {
    setProjectsOpen((state) => !state);

    if (!isProjectsOpen) {
      setFocusedWindow("Projects");
    } else {
      setFocusedWindow("");
    }
  };

  const toggleProjectsExpanded = () => {
    setProjectsExpanded((state) => !state);
  };

  const handleEmailClick = () => {
    window.open("mailto:pyj2025@gmail.com");
  };

  return (
    <BodyContainer>
      {isMobile || width < MOBILE_MAX_WIDTH ? (
        <MobileTopBar />
      ) : (
        <DesktopTopBar toggleDesktopAboutOpen={toggleDesktopAboutOpen} />
      )}
      <ToastContainer
        position={isMobile ? "top-center" : "top-right"}
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
      <MenuContainer
        width={width}
        height={height}
        toggleAboutOpen={toggleAboutOpen}
        toggleSkillsOpen={toggleSkillsOpen}
        toggleProjectsOpen={toggleProjectsOpen}
        emailClick={handleEmailClick}
      />
      <BodyContent
        width={width}
        height={height}
        focusedWindow={focusedWindow}
        isWelcomeWindowOpen={isWelcomeWindowOpen}
        isAboutOpen={isAboutOpen}
        isAboutExpanded={isAboutExpanded}
        isSkillsOpen={isSkillsOpen}
        isSkillsExpanded={isSkillsExpanded}
        isProjectsOpen={isProjectsOpen}
        isProjectsExpanded={isProjectsExpanded}
        isDesktopAboutOpen={isDesktopAboutOpen}
        closeWelcomeWindow={setWelcomeWindowOpen}
        toggleAboutOpen={toggleAboutOpen}
        setAboutMinimized={setAboutMinimized}
        toggleAboutExpanded={toggleAboutExpanded}
        toggleSkillsOpen={toggleSkillsOpen}
        setSkillsMinimized={setSkillsMinimized}
        toggleSkillsExpanded={toggleSkillsExpanded}
        toggleProjectsOpen={toggleProjectsOpen}
        setProjectsMinimized={setProjectsMinimized}
        toggleProjectsExpanded={toggleProjectsExpanded}
        toggleDesktopAboutOpen={toggleDesktopAboutOpen}
        setFocusedWindow={setFocusedWindow}
      />
      <FooterBar
        isAboutMinimized={isAboutMinimized}
        isSkillsMinimized={isSkillsMinimized}
        isProjectsMinimized={isProjectsMinimized}
        toggleAboutOpen={toggleAboutOpen}
        setAboutMinimized={setAboutMinimized}
        toggleSkillsOpen={toggleSkillsOpen}
        setSkillsMinimized={setSkillsMinimized}
        toggleProjectsOpen={toggleProjectsOpen}
        setProjectsMinimized={setProjectsMinimized}
      />
    </BodyContainer>
  );
};

export default MainApp;
