import React from 'react';
import { AboutIndexType } from '../../types';
import {
  MobileNavbar,
  MobileNavbarItem,
  MobileNavbarMenuLabel,
} from '../../GlobalStyle';
import { getMobileNavbarMenuIcon } from '../getIcon';

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
      <MobileNavbarItem
        title="About"
        onClick={() => onClick('About')}
        focus={index === 'About'}
      >
        {getMobileNavbarMenuIcon('File')}
        <MobileNavbarMenuLabel>About</MobileNavbarMenuLabel>
      </MobileNavbarItem>
      <MobileNavbarItem
        title="Experience"
        onClick={() => onClick('Experience')}
        focus={index === 'Experience'}
      >
        {getMobileNavbarMenuIcon('Folder')}
        <MobileNavbarMenuLabel>Experience</MobileNavbarMenuLabel>
      </MobileNavbarItem>
      <MobileNavbarItem
        title="Education"
        onClick={() => onClick('Education')}
        focus={index === 'Education'}
      >
        {getMobileNavbarMenuIcon('File')}
        <MobileNavbarMenuLabel>Education</MobileNavbarMenuLabel>
      </MobileNavbarItem>
    </MobileNavbar>
  );
};

export default React.memo(MobileAboutNavbar);
