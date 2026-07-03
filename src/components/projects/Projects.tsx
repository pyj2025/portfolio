import React from 'react';
import FoodieLogo from '../../image/projects/Foodie.png';
import GitCardLogo from '../../image/projects/GitCard.png';
import DatApexLogo from '../../image/projects/DatApex.png';
import MovieLogo from '../../image/projects/Movie.png';
import { getIcon } from '../getIcon';
import { ProjectIndexType } from '../../types';
import { ViewMode } from '../../types';
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

const GridItem: React.FC<{ item: ProjectItem; onClick: () => void }> = ({
  item,
  onClick,
}) => (
  <button
    aria-label={item.title}
    onClick={onClick}
    className="group flex flex-col items-center w-16 cursor-pointer select-none bg-transparent"
  >
    <div className="flex items-center justify-center rounded-lg p-1 transition-colors group-hover:bg-[var(--hover-overlay)]">
      {renderIcon(item, ICON_SIZE)}
    </div>
    <div className="mt-1 max-w-full px-1.5 py-px rounded text-xs leading-tight text-center text-[color:var(--wc-text)] transition-colors group-hover:bg-[var(--hover-overlay-strong)]">
      {item.title}
    </div>
  </button>
);

const ListItem: React.FC<{ item: ProjectItem; onClick: () => void }> = ({
  item,
  onClick,
}) => (
  <button
    aria-label={item.title}
    onClick={onClick}
    className="flex flex-row items-center gap-2.5 w-full px-3 py-1.5 rounded-md cursor-pointer hover:bg-[var(--hover-overlay)] transition-colors text-left"
  >
    <span className="flex items-center justify-center w-6 h-6 shrink-0">
      {renderIcon(item, 22)}
    </span>
    <span className="text-sm text-[color:var(--wc-text)]">{item.title}</span>
  </button>
);

const ItemsView: React.FC<{
  items: ProjectItem[];
  view: ViewMode;
  click: (id: ProjectIndexType) => void;
}> = ({ items, view, click }) =>
  view === 'list' ? (
    <div className="flex flex-col gap-0.5 p-2">
      {items.map((it) => (
        <ListItem
          key={it.id}
          item={it}
          onClick={() => click(it.id as unknown as ProjectIndexType)}
        />
      ))}
    </div>
  ) : (
    <div className="flex flex-row flex-wrap gap-2 m-2.5">
      {items.map((it) => (
        <GridItem
          key={it.id}
          item={it}
          onClick={() => click(it.id as unknown as ProjectIndexType)}
        />
      ))}
    </div>
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
