import React from 'react';
import { AboutIndexType } from '../../types';
import {
  MobileNavbar,
  MobileNavbarItem,
  MobileNavbarMenuLabel,
} from '../../GlobalStyle';
import { getMobileNavbarMenuIcon } from '../getIcon';

type NavItem = {
  id: AboutIndexType;
  label: string;
  title: string;
  icon: 'File' | 'Folder';
};

const NAV_ITEMS: NavItem[] = [
  {
    id: 'Info',
    label: 'About',
    title: 'About',
    icon: 'File',
  },
  {
    id: 'Experience',
    label: 'Experience',
    title: 'Experience',
    icon: 'Folder',
  },
  {
    id: 'Education',
    label: 'Education',
    title: 'Education',
    icon: 'File',
  },
  {
    id: 'Certifications',
    label: 'Certification',
    title: 'Certification',
    icon: 'Folder',
  },
];

type MobileAboutNavbarProps = {
  index: AboutIndexType;
  onClick: (index: AboutIndexType) => void;
};

const MobileAboutNavbar: React.FC<MobileAboutNavbarProps> = ({
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

export default React.memo(MobileAboutNavbar);
