import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { useWindows } from "../utils/context/context";
import useScreenSize, { TABLET_MAX_WIDTH } from "../utils/useScreenSize";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
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

const Menu: React.FC = () => {
  const { width } = useScreenSize();
  const {
    isAboutOpen,
    isSkillsOpen,
    isProjectsOpen,
    isAboutMinimized,
    isSkillsMinimized,
    isProjectsMinimized,
    toggleAboutOpen,
    toggleSkillsOpen,
    toggleProjectsOpen,
    closeAbout,
    closeSkills,
    closeProjects,
  } = useWindows();
  const [isMobileWindow, setIsMobileWindow] = React.useState(false);

  React.useEffect(() => {
    if (width < TABLET_MAX_WIDTH) {
      setIsMobileWindow(true);
    } else {
      setIsMobileWindow(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  const handleAboutClick = () => {
    if (isMobileWindow) {
      if (isSkillsOpen) {
        closeSkills();
      } else if (isProjectsOpen) {
        closeProjects();
      }
    }

    toggleAboutOpen();
  };

  const handleSkillsClick = () => {
    if (isMobileWindow) {
      if (isAboutOpen) {
        closeAbout();
      } else if (isProjectsOpen) {
        closeProjects();
      }
    }

    toggleSkillsOpen();
  };

  const handleProjectsClick = () => {
    if (isMobileWindow) {
      if (isAboutOpen) {
        closeAbout();
      } else if (isSkillsOpen) {
        closeSkills();
      }
    }

    toggleProjectsOpen();
  };

  const handleEmailClick = () => {
    window.open("mailto:pyj2025@gmail.com");
  };

  return (
    <Container>
      <MenuWrapper>
        <MenuItem title="About" onClick={handleAboutClick}>
          <img
            src="https://img.icons8.com/color/48/000000/mac-logo.png"
            alt="Finder"
          />
          {isAboutMinimized ? <MinimizedIcon icon={faCircle} /> : null}
        </MenuItem>
        <MenuItem title="Skills" onClick={handleSkillsClick}>
          <img
            src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
            alt="visual-studio-code"
          />
          {isSkillsMinimized ? <MinimizedIcon icon={faCircle} /> : null}
        </MenuItem>
        <MenuItem title="Projects" onClick={handleProjectsClick}>
          <img
            src="https://img.icons8.com/color/48/000000/mac-folder.png"
            alt="mac-folder"
          />
          {isProjectsMinimized ? <MinimizedIcon icon={faCircle} /> : null}
        </MenuItem>
        <MenuItem
          title="Resume"
          href="https://drive.google.com/file/d/1cK6hYsbjwWTExdAzHPuWgYGHKINsOphg/view?usp=sharing"
        >
          <img
            src="https://img.icons8.com/color/48/000000/google-docs.png"
            alt="google-docs"
          />
        </MenuItem>
        <MenuItem title="Github" href="https://github.com/pyj2025">
          <img
            src="https://img.icons8.com/material-outlined/48/000000/github.png"
            alt="Github"
          />
        </MenuItem>
        <MenuItem title="Linkedin" href="https://www.linkedin.com/in/devjoon/">
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
        <MenuItem title="Email" onClick={handleEmailClick}>
          <img
            src="https://img.icons8.com/color/48/000000/gmail-new.png"
            alt="Email"
          />
        </MenuItem>
      </MenuWrapper>
    </Container>
  );
};

export default Menu;
