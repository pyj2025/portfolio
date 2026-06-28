import React from 'react';
import { AboutIndexType } from '../../types';
import {
  NavItmLabel,
  NavSectionLabel,
  WindowBodyNavItm,
  WindowBodyNavbar,
} from '../../GlobalStyle';
import { getNavIcon } from '../getIcon';

type NavItem = {
  id: AboutIndexType;
  label: string;
  icon: 'File' | 'Folder';
  isChild?: boolean;
  focusConditions?: AboutIndexType[];
};

const NAV_ITEMS: NavItem[] = [
  {
    id: 'Info',
    label: 'Personal Info',
    icon: 'File',
    focusConditions: ['Info'],
  },
  {
    id: 'Experience',
    label: 'Experience',
    icon: 'Folder',
    focusConditions: ['Experience'],
  },
  {
    id: 'Education',
    label: 'Education',
    icon: 'File',
    focusConditions: ['Education'],
  },
  {
    id: 'Certifications',
    label: 'Certifications',
    icon: 'Folder',
    focusConditions: ['Certifications', 'GenAI'],
  },
  {
    id: 'GenAI',
    label: 'GenAI',
    icon: 'File',
    isChild: true,
    focusConditions: ['GenAI'],
  },
];

type AboutNavbarProps = {
  index: AboutIndexType;
  onClick: (name: AboutIndexType) => void;
};

const AboutNavbar: React.FC<AboutNavbarProps> = ({ index, onClick }) => {
  const isFocused = (item: NavItem): boolean => {
    return item.focusConditions?.includes(index) ?? false;
  };

  return (
    <WindowBodyNavbar>
      <NavSectionLabel>Favorites</NavSectionLabel>
      {NAV_ITEMS.map((item, idx) => (
        <WindowBodyNavItm
          key={item.id}
          first={idx === 0}
          onClick={() => onClick(item.id)}
          focus={isFocused(item)}
          isChild={item.isChild}
        >
          {getNavIcon(item.icon, isFocused(item))}
          <NavItmLabel>{item.label}</NavItmLabel>
        </WindowBodyNavItm>
      ))}
    </WindowBodyNavbar>
  );
};

export default React.memo(AboutNavbar);
