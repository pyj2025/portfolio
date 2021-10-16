import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faFile,
  faFolderOpen,
  faFolder,
  faUser,
  faCog,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import TopBar from "./TopBar";

const SidebarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  background-color: #333333;
  color: white;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #3c3c3c;
  box-shadow: 1px 1px #333333;
  border-radius: 0.2rem;
`;

const ListItem = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  margin: 0 auto;
  box-sizing: border-box;
  transition: background-color 0.2s;
  border-radius: 0.2rem;
  padding: 1.5rem;
  text-decoration: none;
  cursor: pointer;

  :hover {
    background-color: #3c3c3c;
  }
`;

export type MenuContainerProps = {
  isProjectsOpen: boolean;
  toggleAboutOpen: () => void;
  toggleSkillsOpen: () => void;
  toggleProjectsOpen: () => void;
};

const MenuContainer: React.FC<MenuContainerProps> = ({
  isProjectsOpen,
  toggleAboutOpen,
  toggleSkillsOpen,
  toggleProjectsOpen,
}) => {
  return (
    <>
      <TopBar />
      <SidebarContainer>
        <MenuWrapper>
          <ListItem onClick={toggleAboutOpen}>
            <FontAwesomeIcon icon={faUser} />
            About
          </ListItem>
          <ListItem onClick={toggleSkillsOpen}>
            <FontAwesomeIcon icon={faCode} />
            Skills
          </ListItem>
          <ListItem onClick={toggleProjectsOpen}>
            <FontAwesomeIcon icon={isProjectsOpen ? faFolderOpen : faFolder} />
            Projects
          </ListItem>
          <ListItem onClick={toggleProjectsOpen}>
            <FontAwesomeIcon icon={faCog} />
            Settings
          </ListItem>
          <ListItem onClick={toggleProjectsOpen}>
            <FontAwesomeIcon icon={faFile} />
            Resume
          </ListItem>
          <ListItem href="https://github.com/pyj2025">
            <FontAwesomeIcon icon={faGithub} />
            Github
          </ListItem>
          <ListItem href="https://www.linkedin.com/in/devjoon/">
            <FontAwesomeIcon icon={faLinkedin} />
            Linkedin
          </ListItem>
          <ListItem onClick={toggleProjectsOpen}>
            <FontAwesomeIcon icon={faEnvelope} />
            Email
          </ListItem>
        </MenuWrapper>
      </SidebarContainer>
    </>
  );
};

export default MenuContainer;
