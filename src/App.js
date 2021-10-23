import MenuContainer from "./MenuContainer";
import FooterBar from "./FooterBar";
import BodyContent from "./BodyContent";
import styled from "styled-components";
import { useState } from "react";
import img from "./macos.jpg";

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
  const [inMaintenance, setMaintenance] = useState(false);

  const [focusedWindow, setFocusedWindow] = useState("");

  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isAboutMinimized, setAboutMinimized] = useState(false);
  const [isSkillsOpen, setSkillsOpen] = useState(false);
  const [isSkillsMinimized, setSkillsMinimized] = useState(false);
  const [isProjectsOpen, setProjectsOpen] = useState(false);
  const [isProjectsMinimized, setProjectsMinimized] = useState(false);
  const [isEmailOpen, setEmailOpen] = useState(false);
  const [isEmailMinimized, setEmailMinimized] = useState(false);

  const toggleAboutOpen = () => {
    setAboutOpen((state) => !state);

    if (!isAboutOpen) {
      setFocusedWindow("About");
    } else {
      setFocusedWindow("");
    }
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
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
            }}
          >
            <MenuContainer
              toggleAboutOpen={toggleAboutOpen}
              toggleSkillsOpen={toggleSkillsOpen}
              toggleProjectsOpen={toggleProjectsOpen}
              toggleEmailOpen={toggleEmailOpen}
            />
            <BodyContent
              focusedWindow={focusedWindow}
              isAboutOpen={isAboutOpen}
              isSkillsOpen={isSkillsOpen}
              isProjectsOpen={isProjectsOpen}
              toggleAboutOpen={toggleAboutOpen}
              setAboutMinimized={setAboutMinimized}
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
