import MenuContainer from "./MenuContainer";
import FooterBar from "./FooterBar";
import BodyContent from "./BodyContent";
import styled from "styled-components";
import React, { useState } from "react";
import img from "./macos.jpg";
import TopBar from "./TopBar";
import { useResizeDetector } from "react-resize-detector";
import { isBrowser, isMobile, browserName } from "react-device-detect";

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

  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isAboutMinimized, setAboutMinimized] = useState(false);
  const [isAboutExpanded, setAboutExpanded] = useState(false);

  const [isSkillsOpen, setSkillsOpen] = useState(false);
  const [isSkillsMinimized, setSkillsMinimized] = useState(false);
  const [isProjectsOpen, setProjectsOpen] = useState(false);
  const [isProjectsMinimized, setProjectsMinimized] = useState(false);
  const [isEmailOpen, setEmailOpen] = useState(false);
  const [isEmailMinimized, setEmailMinimized] = useState(false);

  React.useEffect(() => {
    console.log("width = ", width);
    console.log("height = ", height);

    console.log("browserName = ", browserName);
    console.log("isBrowser = ", isBrowser);
    console.log("isMobile = ", isMobile);
  }, [width, height]);

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

  const toggleProjectsOpen = () => {
    setProjectsOpen((state) => !state);

    if (!isProjectsOpen) {
      setFocusedWindow("Projects");
    } else {
      setFocusedWindow("");
    }
  };

  const toggleEmailOpen = () => {
    setEmailOpen((state) => !state);

    if (!isEmailOpen) {
      setFocusedWindow("Email");
    } else {
      setFocusedWindow("");
    }
  };

  return (
    <Wrapper>
      {inMaintenance ? (
        <MaintenanceMessage>
          Site is in maintenance now. Please come back later...
        </MaintenanceMessage>
      ) : (
        <>
          <BodyContainer
            ref={ref}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
            }}
          >
            <TopBar />
            <MenuContainer
              toggleAboutOpen={toggleAboutOpen}
              toggleSkillsOpen={toggleSkillsOpen}
              toggleProjectsOpen={toggleProjectsOpen}
              toggleEmailOpen={toggleEmailOpen}
            />
            <BodyContent
              width={width}
              height={height}
              focusedWindow={focusedWindow}
              isAboutOpen={isAboutOpen}
              isAboutExpanded={isAboutExpanded}
              isSkillsOpen={isSkillsOpen}
              isProjectsOpen={isProjectsOpen}
              toggleAboutOpen={toggleAboutOpen}
              setAboutMinimized={setAboutMinimized}
              toggleAboutExpanded={toggleAboutExpanded}
              toggleSkillsOpen={toggleSkillsOpen}
              setSkillsMinimized={setSkillsMinimized}
              toggleProjectsOpen={toggleProjectsOpen}
              setProjectsMinimized={setProjectsMinimized}
              toggleEmailOpen={toggleEmailOpen}
              setEmailMinimized={setEmailMinimized}
              setFocusedWindow={setFocusedWindow}
            />
          </BodyContainer>
          <FooterBar
            isAboutMinimized={isAboutMinimized}
            isSkillsMinimized={isSkillsMinimized}
            isProjectsMinimized={isProjectsMinimized}
            isEmailMinimized={isEmailMinimized}
            toggleAboutOpen={toggleAboutOpen}
            setAboutMinimized={setAboutMinimized}
            toggleSkillsOpen={toggleSkillsOpen}
            setSkillsMinimized={setSkillsMinimized}
            toggleProjectsOpen={toggleProjectsOpen}
            setProjectsMinimized={setProjectsMinimized}
            toggleEmailOpen={toggleEmailOpen}
            setEmailMinimized={setEmailMinimized}
          />
        </>
      )}
    </Wrapper>
  );
}

export default App;
