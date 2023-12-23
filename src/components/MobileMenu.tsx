import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { useWindows } from '../utils/context/context';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { getIcon } from './getIcon';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 1.2rem;
  box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.4);
  background-color: rgba(255, 255, 192, 0.1);
  backdrop-filter: blur(10px);
  /* height: 80px; */
`;

const MenuItem = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  box-sizing: border-box;
  transition: background-color 0.2s;
  border-radius: 0.2rem;
  padding: 1rem;
  text-decoration: none;
  cursor: pointer;
`;

const MinimizedIcon = styled(FontAwesomeIcon)`
  position: absolute;
  height: 4px;
  width: 4px;
  padding-top: 3.5rem;
  color: #aaaaaa;
`;

const MobileMenu: React.FC = () => {
  const {
    isAboutOpen,
    isSkillsOpen,
    isProjectsOpen,
    isWelcomeWindowOpen,
    isAboutMinimized,
    isSkillsMinimized,
    isProjectsMinimized,
    toggleAboutOpen,
    toggleSkillsOpen,
    toggleProjectsOpen,
    closeAbout,
    closeSkills,
    closeProjects,
    closeWelcomeWindow,
  } = useWindows();

  const handleAboutClick = () => {
    if (isWelcomeWindowOpen) {
      closeWelcomeWindow();
    }
    if (isSkillsOpen) {
      closeSkills();
    }
    if (isProjectsOpen) {
      closeProjects();
    }

    toggleAboutOpen();
  };

  const handleSkillsClick = () => {
    if (isWelcomeWindowOpen) {
      closeWelcomeWindow();
    }
    if (isAboutOpen) {
      closeAbout();
    }
    if (isProjectsOpen) {
      closeProjects();
    }

    toggleSkillsOpen();
  };

  const handleProjectsClick = () => {
    if (isWelcomeWindowOpen) {
      closeWelcomeWindow();
    }
    if (isAboutOpen) {
      closeAbout();
    }
    if (isSkillsOpen) {
      closeSkills();
    }

    toggleProjectsOpen();
  };

  return (
    <Container>
      <MenuWrapper>
        <MenuItem title="About" onClick={handleAboutClick}>
          {getIcon('About')}
          {isAboutMinimized ? (
            <MinimizedIcon icon={faCircle as IconProp} />
          ) : null}
        </MenuItem>
        <MenuItem title="Skills" onClick={handleSkillsClick}>
          {getIcon('Skills')}
          {isSkillsMinimized ? (
            <MinimizedIcon icon={faCircle as IconProp} />
          ) : null}
        </MenuItem>
        <MenuItem title="Projects" onClick={handleProjectsClick}>
          {getIcon('Projects')}
          {isProjectsMinimized ? (
            <MinimizedIcon icon={faCircle as IconProp} />
          ) : null}
        </MenuItem>
      </MenuWrapper>
    </Container>
  );
};

export default MobileMenu;
