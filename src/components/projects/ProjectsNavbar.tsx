import React from 'react';
import { ProjectIndexType } from '../../types';
import {
  NavItmLabel,
  WindowBodyNavItm,
  WindowBodyNavbar,
} from '../../GlobalStyle';
import { SMALL_ICON_SIZE, getIcon } from '../getIcon';

type ProjectCategory = {
  id: ProjectIndexType;
  label: string;
  isChild?: boolean;
  focusConditions?: ProjectIndexType[];
};

const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: 'Projects',
    label: 'Projects',
    focusConditions: ['Projects'],
  },
  {
    id: 'WebProjects',
    label: 'Web',
    isChild: true,
    focusConditions: [
      'WebProjects',
      'GitCard',
      'DatApex',
      'MovieNext',
      'Portfolio',
    ],
  },
  {
    id: 'MobileProjects',
    label: 'Mobile',
    isChild: true,
    focusConditions: [
      'MobileProjects',
      'Foodie',
      'WebGame',
      'Tippy',
      'Flix',
      'Twitter',
      'Parstagram',
      'ToonFlix',
    ],
  },
];

type ProjectsNavbarProps = {
  index: ProjectIndexType;
  onClick: (name: ProjectIndexType) => void;
};

const ProjectsNavbar: React.FC<ProjectsNavbarProps> = ({ index, onClick }) => {
  const isFocused = (category: ProjectCategory): boolean => {
    if (category.id === 'Projects') return true;
    return category.focusConditions?.includes(index) ?? false;
  };

  return (
    <WindowBodyNavbar>
      {PROJECT_CATEGORIES.map((category, idx) => (
        <WindowBodyNavItm
          key={category.id}
          first={idx === 0}
          onClick={() => onClick(category.id)}
          focus={isFocused(category)}
          isChild={category.isChild}
        >
          {getIcon('Folder', SMALL_ICON_SIZE)}
          <NavItmLabel>{category.label}</NavItmLabel>
        </WindowBodyNavItm>
      ))}
    </WindowBodyNavbar>
  );
};

export default React.memo(ProjectsNavbar);
