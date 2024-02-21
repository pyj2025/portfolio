import React from 'react';
import styled from 'styled-components';
import FoodieLogo from '../../image/projects/Foodie.png';
import DatApexLogo from '../../image/projects/DatApex.png';
import MovieLogo from '../../image/projects/Movie.png';
import { getIcon } from '../getIcon';
import { ProjectIndexType } from '../../types';
import ParstagramLogo from '../../image/projects/Parstagram.png';
import TwitterLogo from '../../image/projects/Twitter.png';

const ICON_SIZE = 53;

const IconListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px;
`;

const IconContainer = styled.div<{ noWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ noWidth }) => (noWidth ? undefined : '60px')};
  justify-content: center;
  align-items: center;
  padding: 2px;
  cursor: pointer;
`;

const IconLogoImage = styled.img`
  width: 3rem;
  height: 3rem;
  margin-bottom: 4px;
`;

const IconLabel = styled.div`
  font-size: 0.75rem;
`;

type ProjectsProps = {
  click: (name: ProjectIndexType) => void;
};

export const Projects: React.FC<ProjectsProps> = React.memo(({ click }) => {
  const projectCategories = ['Web', 'Mobile'];
  return (
    <IconListContainer>
      {projectCategories.map((category) => (
        <IconContainer
          title={category}
          onClick={() =>
            click(category === 'Web' ? 'WebProjects' : 'MobileProjects')
          }
        >
          {getIcon('Folder')}
          <IconLabel>{category}</IconLabel>
        </IconContainer>
      ))}
    </IconListContainer>
  );
});

export const WebProjects: React.FC<ProjectsProps> = React.memo(({ click }) => {
  return (
    <>
      <IconListContainer>
        <IconContainer onClick={() => click('DatApex')}>
          <IconLogoImage src={DatApexLogo} alt="DatApex" />
          <IconLabel>DatApex</IconLabel>
        </IconContainer>
        <IconContainer onClick={() => click('MovieNext')}>
          <IconLogoImage src={MovieLogo} alt="MovieNext" />
          <IconLabel>MovieNext</IconLabel>
        </IconContainer>
        <IconContainer onClick={() => click('Portfolio')}>
          {getIcon('CodeFile', ICON_SIZE)}
          <IconLabel>Portfolio</IconLabel>
        </IconContainer>
      </IconListContainer>
    </>
  );
});

export const MobileProjects: React.FC<ProjectsProps> = React.memo(
  ({ click }) => {
    return (
      <>
        <IconListContainer>
          <IconContainer onClick={() => click('Foodie')}>
            <IconLogoImage src={FoodieLogo} alt="Foodie" />
            <IconLabel>Foodie</IconLabel>
          </IconContainer>
          <IconContainer onClick={() => click('WebGame')}>
            {getIcon('CodeFile', ICON_SIZE)}
            <IconLabel>WebGame</IconLabel>
          </IconContainer>
          <IconContainer onClick={() => click('ToonFlix')}>
            {getIcon('CodeFile', ICON_SIZE)}
            <IconLabel>ToonFlix</IconLabel>
          </IconContainer>
          <IconContainer onClick={() => click('Tippy')}>
            {getIcon('CodeFile', ICON_SIZE)}
            <IconLabel>Tippy</IconLabel>
          </IconContainer>
          <IconContainer onClick={() => click('Flix')}>
            {getIcon('CodeFile', ICON_SIZE)}
            <IconLabel>Flix</IconLabel>
          </IconContainer>
          <IconContainer onClick={() => click('Twitter')}>
            <IconLogoImage src={TwitterLogo} alt="Twitter" />
            <IconLabel>Twitter</IconLabel>
          </IconContainer>
          <IconContainer onClick={() => click('Parstagram')}>
            <IconLogoImage src={ParstagramLogo} alt="Parstagram" />
            <IconLabel>Parstagram</IconLabel>
          </IconContainer>
        </IconListContainer>
      </>
    );
  }
);
