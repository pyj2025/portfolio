import { faFolderOpen, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #333333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
  flex-shrink: 1;
  overflow-y: auto;
  padding: 1rem;
`;

const ListItem = styled.a`
  font-size: 1.5em;
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
  border-radius: 0.2rem;
  cursor: pointer;

  :hover {
    background-color: #3c3c3c;
  }
`;

export type MenuContainerProps = {
  toggleAboutOpen: () => void;
  toggleSkillsOpen: () => void;
  toggleProjectsOpen: () => void;
};

const MenuContainer: React.FC<MenuContainerProps> = ({
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
        <FontAwesomeIcon icon={faFolderOpen} />
        Projects
      </ListItem>
     
    </SidebarContainer>
  );
}

export default MenuContainer;
