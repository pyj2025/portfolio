import React from "react";
import styled from "styled-components";
import TopBar from "./TopBar";

const SidebarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100vw;
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
  toggleAboutOpen: () => void;
  toggleSkillsOpen: () => void;
  toggleProjectsOpen: () => void;
  toggleEmailOpen: () => void;
};

const MenuContainer: React.FC<MenuContainerProps> = ({
  toggleAboutOpen,
  toggleSkillsOpen,
  toggleProjectsOpen,
  toggleEmailOpen,
}) => {
  return (
    <>
      <TopBar />
      <SidebarContainer>
        <MenuWrapper>
          <ListItem title="About" onClick={toggleAboutOpen}>
            <img
              src="https://img.icons8.com/color/48/000000/mac-logo.png"
              alt="About"
            />
          </ListItem>
          <ListItem title="Skills" onClick={toggleSkillsOpen}>
            <img
              src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
              alt="Skills"
            />
          </ListItem>
          <ListItem title="Projects" onClick={toggleProjectsOpen}>
            <img
              src="https://img.icons8.com/color/48/000000/mac-folder.png"
              alt="Projects"
            />
          </ListItem>
          <ListItem title="Settings" onClick={toggleProjectsOpen}>
            <img
              src="https://img.icons8.com/color/48/000000/apple-settings.png"
              alt="Settings"
            />
          </ListItem>
          <ListItem title="Resume" onClick={toggleProjectsOpen}>
            <img
              src="https://img.icons8.com/color/48/000000/google-docs--v1.png"
              alt="Resume"
            />
          </ListItem>
          <ListItem title="Github" href="https://github.com/pyj2025">
            <img
              src="https://img.icons8.com/material-outlined/48/000000/github.png"
              alt="Github"
            />
          </ListItem>
          <ListItem
            title="Linkedin"
            href="https://www.linkedin.com/in/devjoon/"
          >
            <img
              src="https://img.icons8.com/fluency/48/000000/linkedin.png"
              alt="Linkedin"
            />
          </ListItem>
          <ListItem title="Email" onClick={toggleEmailOpen}>
            <img
              src="https://img.icons8.com/color/48/000000/gmail-new.png"
              alt="Email"
            />
          </ListItem>
        </MenuWrapper>
      </SidebarContainer>
    </>
  );
};

export default MenuContainer;
