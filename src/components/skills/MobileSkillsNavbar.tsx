import React from 'react';
import { SkillsIndexType } from '../../types';
import {
  MobileNavbar,
  MobileNavbarItem,
  MobileNavbarMenuLabel,
} from '../../GlobalStyle';
import { getMobileNavbarMenuIcon } from '../getIcon';

type NavItem = {
  id: SkillsIndexType;
  label: string;
  title: string;
  icon: 'Folder' | 'CodeFile';
};

const NAV_ITEMS: NavItem[] = [
  {
    id: 'Front',
    label: 'Front',
    title: 'Front-End',
    icon: 'Folder',
  },
  {
    id: 'Back',
    label: 'Back',
    title: 'Back-End',
    icon: 'Folder',
  },
  {
    id: 'Mobile',
    label: 'Mobile',
    title: 'Mobile',
    icon: 'Folder',
  },
  {
    id: 'Programming',
    label: 'Language',
    title: 'Programming Language',
    icon: 'CodeFile',
  },
];

type MobileSkillsNavbarProps = {
  index: SkillsIndexType;
  onClick: (index: SkillsIndexType) => void;
};

const MobileSkillsNavbar: React.FC<MobileSkillsNavbarProps> = ({
  index,
  onClick,
}) => {
  return (
    <MobileNavbar>
      {NAV_ITEMS.map((item) => (
        <MobileNavbarItem
          key={item.id}
          title={item.title}
          onClick={() => onClick(item.id)}
          focus={index === item.id}
        >
          {getMobileNavbarMenuIcon(item.icon)}
          <MobileNavbarMenuLabel>{item.label}</MobileNavbarMenuLabel>
        </MobileNavbarItem>
      ))}
    </MobileNavbar>
  );
};

export default React.memo(MobileSkillsNavbar);
