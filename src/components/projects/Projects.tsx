import React from 'react';
import FoodieLogo from '../../image/projects/Foodie.png';
import GitCardLogo from '../../image/projects/GitCard.png';
import DatApexLogo from '../../image/projects/DatApex.png';
import MovieLogo from '../../image/projects/Movie.png';
import { getIcon } from '../getIcon';
import { ProjectIndexType } from '../../types';
import ParstagramLogo from '../../image/projects/Parstagram.png';
import TwitterLogo from '../../image/projects/Twitter.png';

const ICON_SIZE = 53;

const IconListContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="flex flex-row flex-wrap gap-2.5 m-2.5">{children}</div>
);

interface IconContainerProps {
  title: string;
  onClick: () => void;
  children: React.ReactNode;
}

const IconContainer: React.FC<IconContainerProps> = ({
  title,
  onClick,
  children,
}) => (
  <div
    title={title}
    onClick={onClick}
    className="flex flex-col w-[60px] justify-center items-center p-0.5 cursor-pointer"
  >
    {children}
  </div>
);

const IconLogoImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-12 h-12 mb-1" />
);

const IconLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-xs">{children}</div>
);

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
          <IconLogoImage src={e.logo as string} alt={e.title} />
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
            <IconLogoImage src={e.logo as string} alt={e.title} />
          )}
          <IconLabel>{e.title}</IconLabel>
        </IconContainer>
      ));
    };

    return <IconListContainer>{renderProjects()}</IconListContainer>;
  }
);
