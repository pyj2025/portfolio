import React from 'react';
import { ProjectIndexType } from '../../types';
import {
  MobileNavbar,
  MobileNavbarItem,
  MobileNavbarMenuLabel,
} from '../../GlobalStyle';
import { getMobileNavbarMenuIcon } from '../getIcon';

type MobileProjectsNavbarProps = {
  index: ProjectIndexType;
  onClick: (name: ProjectIndexType) => void;
};

const MobileProjectsNavbar: React.FC<MobileProjectsNavbarProps> = ({
  index,
  onClick,
}) => {
  return (
    <MobileNavbar>
      <MobileNavbarItem
        title="Projects"
        onClick={() => onClick('Projects')}
        focus
      >
        {getMobileNavbarMenuIcon('Folder')}
        <MobileNavbarMenuLabel>Projects</MobileNavbarMenuLabel>
      </MobileNavbarItem>
      <MobileNavbarItem
        title="Web"
        onClick={() => onClick('WebProjects')}
        focus={['WebProjects', 'DatApex', 'Portfolio'].includes(index)}
        isChild
      >
        {getMobileNavbarMenuIcon('Folder')}
        <MobileNavbarMenuLabel>Web</MobileNavbarMenuLabel>
      </MobileNavbarItem>
      <MobileNavbarItem
        title="Mobile"
        onClick={() => onClick('MobileProjects')}
        focus={[
          'MobileProjects',
          'Foodie',
          'WebGame',
          'Tippy',
          'Flix',
          'Twitter',
          'Parstagram',
          'ToonFlix',
        ].includes(index)}
        isChild
      >
        {getMobileNavbarMenuIcon('Folder')}
        <MobileNavbarMenuLabel>Mobile</MobileNavbarMenuLabel>
      </MobileNavbarItem>
    </MobileNavbar>
  );
};

export default React.memo(MobileProjectsNavbar);
