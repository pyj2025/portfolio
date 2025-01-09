import React from 'react';
import { ProjectIndexType } from '../../types';
import {
  MobileNavbar,
  MobileNavbarItem,
  MobileNavbarMenuLabel,
} from '../../GlobalStyle';
import { getMobileNavbarMenuIcon } from '../getIcon';

type NavItem = {
  id: ProjectIndexType;
  label: string;
  title: string;
  isChild?: boolean;
  focusConditions?: ProjectIndexType[];
  alwaysFocus?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  {
    id: 'Projects',
    label: 'Projects',
    title: 'Projects',
    alwaysFocus: true,
  },
  {
    id: 'WebProjects',
    label: 'Web',
    title: 'Web',
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
    title: 'Mobile',
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

type MobileProjectsNavbarProps = {
  index: ProjectIndexType;
  onClick: (name: ProjectIndexType) => void;
};

const MobileProjectsNavbar: React.FC<MobileProjectsNavbarProps> = ({
  index,
  onClick,
}) => {
  const isFocused = (item: NavItem): boolean => {
    if (item.alwaysFocus) return true;
    return item.focusConditions?.includes(index) ?? false;
  };

  return (
    <MobileNavbar>
      {NAV_ITEMS.map((item) => (
        <MobileNavbarItem
          key={item.id}
          title={item.title}
          onClick={() => onClick(item.id)}
          focus={isFocused(item)}
          isChild={item.isChild}
        >
          {getMobileNavbarMenuIcon('Folder')}
          <MobileNavbarMenuLabel>{item.label}</MobileNavbarMenuLabel>
        </MobileNavbarItem>
      ))}
    </MobileNavbar>
  );
};

export default React.memo(MobileProjectsNavbar);
