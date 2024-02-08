import React from 'react';
import { SkillsIndexType } from '../../types';
import {
  MobileNavbar,
  MobileNavbarItem,
  MobileNavbarMenuLabel,
} from '../../GlobalStyle';
import { getMobileNavbarMenuIcon } from '../getIcon';

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
      <MobileNavbarItem
        title="Front-End"
        onClick={() => onClick('Front')}
        focus={index === 'Front'}
      >
        {getMobileNavbarMenuIcon('Folder')}
        <MobileNavbarMenuLabel>Front</MobileNavbarMenuLabel>
      </MobileNavbarItem>
      <MobileNavbarItem
        title="Back-End"
        onClick={() => onClick('Back')}
        focus={index === 'Back'}
      >
        {getMobileNavbarMenuIcon('Folder')}
        <MobileNavbarMenuLabel>Back</MobileNavbarMenuLabel>
      </MobileNavbarItem>
      <MobileNavbarItem
        title="Mobile"
        onClick={() => onClick('Mobile')}
        focus={index === 'Mobile'}
      >
        {getMobileNavbarMenuIcon('Folder')}
        <MobileNavbarMenuLabel>Mobile</MobileNavbarMenuLabel>
      </MobileNavbarItem>
      <MobileNavbarItem
        title="Programming Language"
        onClick={() => onClick('Programming')}
        focus={index === 'Programming'}
      >
        {getMobileNavbarMenuIcon('CodeFile')}
        <MobileNavbarMenuLabel>Language</MobileNavbarMenuLabel>
      </MobileNavbarItem>
    </MobileNavbar>
  );
};

export default React.memo(MobileSkillsNavbar);
