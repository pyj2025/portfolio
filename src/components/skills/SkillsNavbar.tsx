import React from 'react';
import { SkillsIndexType } from '../../types';
import {
  NavItmLabel,
  NavSectionLabel,
  WindowBodyNavItm,
  WindowBodyNavbar,
} from '../WindowChrome';
import { getNavIcon } from '../getIcon';

type NavItem = {
  id: SkillsIndexType;
  title: string;
  icon: 'Folder' | 'CodeFile';
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    id: 'Front',
    title: 'Front-End',
    icon: 'Folder',
    label: 'Front-End',
  },
  {
    id: 'Back',
    title: 'Back-End',
    icon: 'Folder',
    label: 'Back-End',
  },
  {
    id: 'Mobile',
    title: 'Mobile',
    icon: 'Folder',
    label: 'Mobile',
  },
  {
    id: 'Programming',
    title: 'Language',
    icon: 'CodeFile',
    label: 'Language',
  },
];

type SkillsNavbarProps = {
  index: SkillsIndexType;
  onClick: (name: SkillsIndexType) => void;
};

const SkillsNavbar: React.FC<SkillsNavbarProps> = ({ index, onClick }) => {
  return (
    <WindowBodyNavbar>
      <NavSectionLabel>Favorites</NavSectionLabel>
      {NAV_ITEMS.map((item, idx) => (
        <WindowBodyNavItm
          key={item.id}
          first={idx === 0}
          onClick={() => onClick(item.id)}
          focus={index === item.id}
          title={item.title}
        >
          {getNavIcon(item.icon, index === item.id)}
          <NavItmLabel>{item.label}</NavItmLabel>
        </WindowBodyNavItm>
      ))}
    </WindowBodyNavbar>
  );
};

export default React.memo(SkillsNavbar);
