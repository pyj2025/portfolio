import React from "react";
import styled from "styled-components";
import { Rnd } from "react-rnd";
import {
  faCode,
  faExpandAlt,
  faFolder,
  faMinus,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  background-color: #3c3c3c;
  color: white;
`;

const MenuItemWindow = styled(Rnd)`
  display: grid;
  align-items: center;
  justify-content: center;
  border: solid 1px #ddd;
  background-color: #1e232a;
  color: white;
`;

const MenuItemTopbar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  background-color: #333436;
`;

const TopbarContainer = styled.div`
  margin-right: auto;
`;

const CloseBtn = styled.button`
  padding: 0;
  border: none;
  background: none;
  color: white;
  margin-left: 10px;
`;

const TopbarTitle = styled.div`
  text-align: center;
`;

export type BodyContentProps = {
  isAboutOpen: boolean;
  isSkillsOpen: boolean;
  isProjectsOpen: boolean;
  toggleAboutOpen: () => void;
  setAboutMinimized: (flag: boolean) => void;
  toggleSkillsOpen: () => void;
  setSkillsMinimized: (flag: boolean) => void;
  toggleProjectsOpen: () => void;
  setProjectsMinimized: (flag: boolean) => void;
};

const BodyContent: React.FC<BodyContentProps> = ({
  isAboutOpen,
  isSkillsOpen,
  isProjectsOpen,
  toggleAboutOpen,
  setAboutMinimized,
  toggleSkillsOpen,
  setSkillsMinimized,
  toggleProjectsOpen,
  setProjectsMinimized,
}) => {
  const handleAboutMinimized = () => {
    setAboutMinimized(true);
    toggleAboutOpen();
  };

  const handleSkillsMinimized = () => {
    setSkillsMinimized(true);
    toggleSkillsOpen();
  };

  const handleProjectsMinimized = () => {
    setProjectsMinimized(true);
    toggleProjectsOpen();
  };

  return (
    <Container>
      {isAboutOpen ? (
        <MenuItemWindow
          default={{
            x: -100,
            y: -100,
            width: 500,
            height: 300,
          }}
          minWidth={500}
          minHeight={300}
        >
          <MenuItemTopbar>
            <TopbarContainer>
              <CloseBtn onClick={toggleAboutOpen}>
                <FontAwesomeIcon icon={faTimes} />
              </CloseBtn>
              <CloseBtn onClick={handleAboutMinimized}>
                <FontAwesomeIcon icon={faMinus} />
              </CloseBtn>
              <CloseBtn onClick={toggleAboutOpen}>
                <FontAwesomeIcon icon={faExpandAlt} />
              </CloseBtn>
            </TopbarContainer>
            <TopbarTitle>
              <FontAwesomeIcon icon={faUser} />
              About
            </TopbarTitle>
          </MenuItemTopbar>
          <div>Body</div>
        </MenuItemWindow>
      ) : null}
      {isSkillsOpen ? (
        <MenuItemWindow
          default={{
            x: 0,
            y: 0,
            width: 500,
            height: 300,
          }}
          minWidth={500}
          minHeight={300}
        >
          <MenuItemTopbar>
            <TopbarContainer>
              <CloseBtn onClick={toggleSkillsOpen}>
                <FontAwesomeIcon icon={faTimes} />
              </CloseBtn>
              <CloseBtn onClick={handleSkillsMinimized}>
                <FontAwesomeIcon icon={faMinus} />
              </CloseBtn>
              <CloseBtn onClick={toggleSkillsOpen}>
                <FontAwesomeIcon icon={faExpandAlt} />
              </CloseBtn>
            </TopbarContainer>
            <TopbarTitle>
              <FontAwesomeIcon icon={faCode} />
              Skills
            </TopbarTitle>
          </MenuItemTopbar>
          <div>Body</div>
        </MenuItemWindow>
      ) : null}
      {isProjectsOpen ? (
        <MenuItemWindow
          default={{
            x: 0,
            y: 0,
            width: 500,
            height: 300,
          }}
          minWidth={500}
          minHeight={300}
        >
          <MenuItemTopbar>
            <TopbarContainer>
              <CloseBtn onClick={toggleProjectsOpen}>
                <FontAwesomeIcon icon={faTimes} />
              </CloseBtn>
              <CloseBtn onClick={handleProjectsMinimized}>
                <FontAwesomeIcon icon={faMinus} />
              </CloseBtn>
              <CloseBtn onClick={toggleProjectsOpen}>
                <FontAwesomeIcon icon={faExpandAlt} />
              </CloseBtn>
            </TopbarContainer>
            <TopbarTitle>
              <FontAwesomeIcon icon={faFolder} />
              Projects
            </TopbarTitle>
          </MenuItemTopbar>
          <div>Body</div>
        </MenuItemWindow>
      ) : null}
    </Container>
  );
};

export default BodyContent;
