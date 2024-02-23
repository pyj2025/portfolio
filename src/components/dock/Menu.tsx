import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { getIcon } from '../getIcon';
import useAboutStore from '../../utils/useAboutStore';
import useSkillsStore from '../../utils/useSkillsStore';
import useProjectsStore from '../../utils/useProjectsStore';

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
  const { isAboutMinimized, openAbout } = useAboutStore((state) => state);
  const { isSkillsMinimized, openSkills } = useSkillsStore((state) => state);
  const { isProjectsMinimized, openProjects } = useProjectsStore(
    (state) => state
  );

  const handleAboutClick = React.useCallback(() => {
    openAbout();
  }, [openAbout]);

  const handleSkillsClick = React.useCallback(() => {
    openSkills();
  }, [openSkills]);

  const handleProjectsClick = React.useCallback(() => {
    openProjects();
  }, [openProjects]);

  const handleEmailClick = React.useCallback(() => {
    window.open('mailto:pyj2025@gmail.com');
  }, []);

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
        <MenuItem
          title="Resume"
          href="https://drive.google.com/file/d/1eKA2yZLv_271nj6TJD316C5zGx-NPiMH/view?usp=sharing"
        >
          {getIcon('Resume')}
        </MenuItem>
        <MenuItem title="Github" href="https://github.com/pyj2025">
          {getIcon('Github')}
        </MenuItem>
        <MenuItem title="Linkedin" href="https://www.linkedin.com/in/devjoon/">
          {getIcon('Linkedin')}
        </MenuItem>
        <MenuItem
          title="Facebook"
          href="https://www.facebook.com/youngjoon.park.71"
        >
          {getIcon('Facebook')}
        </MenuItem>
        <MenuItem title="Email" onClick={handleEmailClick}>
          {getIcon('Email')}
        </MenuItem>
      </MenuWrapper>
    </Container>
  );
};

export default Menu;
