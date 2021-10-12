import MenuContainer from "./MenuContainer";
import HeaderBar from "./HeaderBar";
import FooterBar from "./FooterBar";
import BodyContent from "./BodyContent";
import styled from "styled-components";
import React, { useState } from "react";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 3% auto 10%;
  height: 100vh;
  width: 100vw;
  background-color: black;
  text-align: center;
`;

const BodyContainer = styled.div`
  background-color: #1e1e1e;
  justify-content: center;
  text-align: center;
`;

const MaintenanceMessage = styled.div`
  color: white;
  font-weight: bold;
  justify-content: center;
  text-align: center;
`;

function App() {
  const [inMaintenance, setMaintenance] = useState(true);

  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isAboutMinimized, setAboutMinimized] = useState(false);
  const [isSkillsOpen, setSkillsOpen] = useState(false);
  const [isSkillsMinimized, setSkillsMinimized] = useState(false);
  const [isProjectsOpen, setProjectsOpen] = useState(false);
  const [isProjectsMinimized, setProjectsMinimized] = useState(false);

  const toggleAboutOpen = () => {
    setAboutOpen((state) => !state);
  };

  const toggleSkillsOpen = () => {
    setSkillsOpen((state) => !state);
  };

  const toggleProjectsOpen = () => {
    setProjectsOpen((state) => !state);
  };

  return (
    <Wrapper>
      {inMaintenance ? (
        <MaintenanceMessage>
          Site is in maintenance now. Please come back later...
        </MaintenanceMessage>
      ) : (
        <>
          <HeaderBar />
          <BodyContainer>
            <MenuContainer
              isProjectsOpen={isProjectsOpen}
              toggleAboutOpen={toggleAboutOpen}
              toggleSkillsOpen={toggleSkillsOpen}
              toggleProjectsOpen={toggleProjectsOpen}
            />
            <BodyContent
              isAboutOpen={isAboutOpen}
              isSkillsOpen={isSkillsOpen}
              isProjectsOpen={isProjectsOpen}
              toggleAboutOpen={toggleAboutOpen}
              setAboutMinimized={setAboutMinimized}
              toggleSkillsOpen={toggleSkillsOpen}
              setSkillsMinimized={setSkillsMinimized}
              toggleProjectsOpen={toggleProjectsOpen}
              setProjectsMinimized={setProjectsMinimized}
            />
          </BodyContainer>
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
        </>
      )}
    </Wrapper>
  );
}

export default App;
