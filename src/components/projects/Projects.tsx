import React from 'react';
import info from '../../info.json';
import { getIcon } from '../getIcon';
import { ProjectIndexType, ViewMode } from '../../types';
import {
  FinderGrid,
  FinderGridItem,
  FinderList,
  FinderListRow,
} from '../FinderItems';
import { PROJECT_LOGOS, ProjectKey } from './ProjectDetail';

const ICON_SIZE = 53;

type ProjectItem = {
  id: string;
  title: string;
  icon: 'Folder' | 'CodeFile';
  logo?: string;
};

const projectsByCategory = (category: 'web' | 'mobile'): ProjectItem[] =>
  (Object.keys(info.project) as ProjectKey[])
    .filter(key => info.project[key].category === category)
    .map(key => ({
      id: key,
      title: key,
      icon: 'CodeFile' as const,
      logo: PROJECT_LOGOS[key],
    }));

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
  ({ click, view = 'icon' }) => (
    <ItemsView items={projectsByCategory('web')} view={view} click={click} />
  )
);

export const MobileProjects: React.FC<ProjectsProps> = React.memo(
  ({ click, view = 'icon' }) => (
    <ItemsView items={projectsByCategory('mobile')} view={view} click={click} />
  )
);
