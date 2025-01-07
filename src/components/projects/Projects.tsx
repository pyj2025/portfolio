import React from 'react';
import styled from 'styled-components';
import FoodieLogo from '../../image/projects/Foodie.png';
import GitCardLogo from '../../image/projects/GitCard.png';
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

interface ProjectsProps {
  click: (name: ProjectIndexType) => void;
}

export const Projects: React.FC<ProjectsProps> = React.memo(({ click }) => {
  const projectList = [
    { title: 'Web', id: 'WebProjects' },
    { title: 'Mobile', id: 'MobileProjects' },
  ];

  const renderFolders = () => {
    return projectList.map((e) => (
      <IconContainer
        key={e.id}
        title={e.title}
        onClick={() => click(e.id as unknown as ProjectIndexType)}
      >
        {getIcon('Folder')}
        <IconLabel>{e.title}</IconLabel>
      </IconContainer>
    ));
  };

  return <IconListContainer>{renderFolders()}</IconListContainer>;
});

export const WebProjects: React.FC<ProjectsProps> = React.memo(({ click }) => {
  const projectList = [
    { title: 'GitCard', id: 'GitCard', logo: GitCardLogo },
    { title: 'DatApex', id: 'DatApex', logo: DatApexLogo },
    { title: 'MovieNext', id: 'MovieNext', logo: MovieLogo },
    { title: 'Portfolio', id: 'Portfolio', useIcon: true },
  ];

  const renderProjects = () => {
    return projectList.map((e) => (
      <IconContainer
        key={e.id}
        title={e.title}
        onClick={() => click(e.id as unknown as ProjectIndexType)}
      >
        {e.useIcon ? (
          getIcon('CodeFile', ICON_SIZE)
        ) : (
          <IconLogoImage src={e.logo} alt={e.title} />
        )}
        <IconLabel>{e.title}</IconLabel>
      </IconContainer>
    ));
  };

  return <IconListContainer>{renderProjects()}</IconListContainer>;
});

export const MobileProjects: React.FC<ProjectsProps> = React.memo(
  ({ click }) => {
    const projectList = [
      { title: 'Foodie', id: 'Foodie', logo: FoodieLogo },
      { title: 'WebGame', id: 'WebGame', useIcon: true },
      { title: 'ToonFlix', id: 'ToonFlix', useIcon: true },
      { title: 'Tippy', id: 'Tippy', useIcon: true },
      { title: 'Flix', id: 'Flix', useIcon: true },
      { title: 'Twitter', id: 'Twitter', logo: TwitterLogo },
      { title: 'Parstagram', id: 'Parstagram', logo: ParstagramLogo },
    ];

    const renderProjects = () => {
      return projectList.map((e) => (
        <IconContainer
          key={e.id}
          title={e.title}
          onClick={() => click(e.id as unknown as ProjectIndexType)}
        >
          {e.useIcon ? (
            getIcon('CodeFile', ICON_SIZE)
          ) : (
            <IconLogoImage src={e.logo} alt={e.title} />
          )}
          <IconLabel>{e.title}</IconLabel>
        </IconContainer>
      ));
    };

    return <IconListContainer>{renderProjects()}</IconListContainer>;
  }
);
