import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faFile,
  faFolderOpen,
  faFolder,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #333333;
  color: white;
  /* display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
  flex-shrink: 1;
  overflow-y: auto;
  padding: 1rem; */
`;

const ListItem = styled.a`
  /* font-size: 1.5em;
  text-align: center;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 8rem;
  height: 8rem;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.2rem; */

  width: 8rem;
  height: 8rem;
  color: white;
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
  const [isOpen, setOpen] = useState(false);

  return (
    <SidebarContainer>
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
    </SidebarContainer>
  );
};

export default MenuContainer;
