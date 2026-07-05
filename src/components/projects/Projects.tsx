import React from 'react';
import FoodieLogo from '../../image/projects/Foodie.png';
import GitCardLogo from '../../image/projects/GitCard.png';
import DatApexLogo from '../../image/projects/DatApex.png';
import MovieLogo from '../../image/projects/Movie.png';
import { getIcon } from '../getIcon';
import { ProjectIndexType, ViewMode } from '../../types';
import {
  FinderGrid,
  FinderGridItem,
  FinderList,
  FinderListRow,
} from '../FinderItems';
import ParstagramLogo from '../../image/projects/Parstagram.png';
import TwitterLogo from '../../image/projects/Twitter.png';

const ICON_SIZE = 53;

type ProjectItem = {
  id: string;
  title: string;
  icon: 'Folder' | 'CodeFile';
  logo?: string;
};

const renderIcon = (item: ProjectItem, size: number) =>
  item.logo ? (
    <img src={item.logo} alt={item.title} style={{ width: size, height: size }} />
  ) : (
    getIcon(item.icon, size)
  );

const ItemsView: React.FC<{
  items: ProjectItem[];
  view: ViewMode;
  click: (id: ProjectIndexType) => void;
}> = ({ items, view, click }) =>
  view === 'list' ? (
    <FinderList>
      {items.map((item) => (
        <FinderListRow
          key={item.id}
          label={item.title}
          icon={renderIcon(item, 22)}
          onClick={() => click(item.id as unknown as ProjectIndexType)}
        />
      ))}
    </FinderList>
  ) : (
    <FinderGrid>
      {items.map((item) => (
        <FinderGridItem
          key={item.id}
          label={item.title}
          icon={renderIcon(item, ICON_SIZE)}
          onClick={() => click(item.id as unknown as ProjectIndexType)}
        />
      ))}
    </FinderGrid>
  );

interface ProjectsProps {
  click: (name: ProjectIndexType) => void;
  view?: ViewMode;
}

export const Projects: React.FC<ProjectsProps> = React.memo(
  ({ click, view = 'icon' }) => {
    const items: ProjectItem[] = [
      { id: 'WebProjects', title: 'Web', icon: 'Folder' },
      { id: 'MobileProjects', title: 'Mobile', icon: 'Folder' },
    ];
    return <ItemsView items={items} view={view} click={click} />;
  }
);

export const WebProjects: React.FC<ProjectsProps> = React.memo(
  ({ click, view = 'icon' }) => {
    const items: ProjectItem[] = [
      { id: 'GitCard', title: 'GitCard', icon: 'CodeFile', logo: GitCardLogo },
      { id: 'DatApex', title: 'DatApex', icon: 'CodeFile', logo: DatApexLogo },
      { id: 'MovieNext', title: 'MovieNext', icon: 'CodeFile', logo: MovieLogo },
      { id: 'Portfolio', title: 'Portfolio', icon: 'CodeFile' },
    ];
    return <ItemsView items={items} view={view} click={click} />;
  }
);

export const MobileProjects: React.FC<ProjectsProps> = React.memo(
  ({ click, view = 'icon' }) => {
    const items: ProjectItem[] = [
      { id: 'Foodie', title: 'Foodie', icon: 'CodeFile', logo: FoodieLogo },
      { id: 'WebGame', title: 'WebGame', icon: 'CodeFile' },
      { id: 'ToonFlix', title: 'ToonFlix', icon: 'CodeFile' },
      { id: 'Tippy', title: 'Tippy', icon: 'CodeFile' },
      { id: 'Flix', title: 'Flix', icon: 'CodeFile' },
      { id: 'Twitter', title: 'Twitter', icon: 'CodeFile', logo: TwitterLogo },
      {
        id: 'Parstagram',
        title: 'Parstagram',
        icon: 'CodeFile',
        logo: ParstagramLogo,
      },
    ];
    return <ItemsView items={items} view={view} click={click} />;
  }
);
