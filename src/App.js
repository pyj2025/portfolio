import MenuContainer from "./MenuContainer";
import FooterBar from "./FooterBar";
import BodyContent from "./BodyContent";
import styled from "styled-components";
import React, { useState } from "react";
import img from "./image/macos.jpg";
import MobileTopBar from "./MobileTopBar";
import DesktopTopBar from "./DesktopTopBar";
import { useResizeDetector } from "react-resize-detector";
import { isMobile, browserName, isBrowser, isIE } from "react-device-detect";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TABLET_MAX_WIDTH = 900;
const MOBILE_MAX_WIDTH = 768;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const MaintenanceMessage = styled.div`
  color: white;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const BodyContainer = styled.div`
  height: 100%;
  width: 100%;
`;

function App() {
  const { width, height, ref } = useResizeDetector();

  const [inMaintenance, setMaintenance] = useState(false);

  const [focusedWindow, setFocusedWindow] = useState("");

  const [isWelcomeWindowOpen, setWelcomeWindowOpen] = useState(true);

  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isAboutMinimized, setAboutMinimized] = useState(false);
  const [isAboutExpanded, setAboutExpanded] = useState(false);

  const [isSkillsOpen, setSkillsOpen] = useState(false);
  const [isSkillsMinimized, setSkillsMinimized] = useState(false);
  const [isSkillsExpanded, setSkillsExpanded] = useState(false);

  const [isProjectsOpen, setProjectsOpen] = useState(false);
  const [isProjectsMinimized, setProjectsMinimized] = useState(false);

  const [isDesktopAboutOpen, setDesktopAboutOpen] = useState(false);

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
    if (width < MOBILE_MAX_WIDTH) {
      if (isDesktopAboutOpen) setDesktopAboutOpen(false);
    }
  }, [width]);

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

  const handleEmailClick = () => {
    window.open("mailto:pyj2025@gmail.com");
  };

  return (
    <Wrapper>
      {inMaintenance ? (
        <MaintenanceMessage>
          Site is in maintenance now. Please come back later...
        </MaintenanceMessage>
      ) : null}
      {isIE ? (
        <MaintenanceMessage>
          Sorry, we do not support IE. You can come via other browsers.
        </MaintenanceMessage>
      ) : null}
      {!inMaintenance && !isIE ? (
        <>
          <BodyContainer
            ref={ref}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
            }}
          >
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
        </>
      ) : null}
    </Wrapper>
  );
}

export default App;
