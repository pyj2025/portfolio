import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { useWindows } from "./utils/context/context";
import useScreenSize from "./utils/useScreenSize";

const SidebarContainer = styled.div<{ width: number; height: number }>`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `calc(${height}px - 25px)`};
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.4);
  background-color: rgba(255, 255, 192, 0.1);
  backdrop-filter: blur(10px);
`;

const MenuItem = styled.a`
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
  padding: 1rem;
  text-decoration: none;
  cursor: pointer;

  :hover {
    background-color: rgba(255, 255, 192, 0.1);
  }
`;

const MinimizedIcon = styled(FontAwesomeIcon)`
  position: absolute;
  height: 4px;
  width: 4px;
  padding-top: 3.5rem;
  color: #aaaaaa;
`;

export type MenuContainerProps = {
  emailClick: () => void;
};

const MenuContainer: React.FC<MenuContainerProps> = ({ emailClick }) => {
  const { width, height } = useScreenSize();
  const {
    isAboutMinimized,
    isSkillsMinimized,
    isProjectsMinimized,
    toggleAboutOpen,
    toggleSkillsOpen,
    toggleProjectsOpen,
  } = useWindows();

  return (
    <>
      <SidebarContainer width={width} height={height}>
        <MenuWrapper>
          <MenuItem title="About" onClick={toggleAboutOpen}>
            <img
              src="https://img.icons8.com/color/48/000000/mac-logo.png"
              alt="Finder"
            />
            {isAboutMinimized ? <MinimizedIcon icon={faCircle} /> : null}
          </MenuItem>
          <MenuItem title="Skills" onClick={toggleSkillsOpen}>
            <img
              src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
              alt="visual-studio-code"
            />
            {isSkillsMinimized ? <MinimizedIcon icon={faCircle} /> : null}
          </MenuItem>
          <MenuItem title="Projects" onClick={toggleProjectsOpen}>
            <img
              src="https://img.icons8.com/color/48/000000/mac-folder.png"
              alt="mac-folder"
            />
            {isProjectsMinimized ? <MinimizedIcon icon={faCircle} /> : null}
          </MenuItem>
          <MenuItem title="Settings" onClick={toggleProjectsOpen}>
            <img
              src="https://img.icons8.com/color/48/000000/apple-settings.png"
              alt="apple-settings"
            />
          </MenuItem>
          <MenuItem title="Resume" href="https://github.com/pyj2025">
            <img
              src="https://img.icons8.com/color/48/000000/pdf.png"
              alt="pdf"
            />
          </MenuItem>
          <MenuItem title="Github" href="https://github.com/pyj2025">
            <img
              src="https://img.icons8.com/material-outlined/48/000000/github.png"
              alt="Github"
            />
          </MenuItem>
          <MenuItem
            title="Linkedin"
            href="https://www.linkedin.com/in/devjoon/"
          >
            <img
              src="https://img.icons8.com/fluency/48/000000/linkedin.png"
              alt="Linkedin"
            />
          </MenuItem>
          <MenuItem
            title="Facebook"
            href="https://www.facebook.com/youngjoon.park.71"
          >
            <img
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt="Facebook"
            />
          </MenuItem>
          <MenuItem title="Email" onClick={emailClick}>
            <img
              src="https://img.icons8.com/color/48/000000/gmail-new.png"
              alt="Email"
            />
          </MenuItem>
        </MenuWrapper>
      </SidebarContainer>
    </>
  );
};

export default MenuContainer;
