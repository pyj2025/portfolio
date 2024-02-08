import React from 'react';
import { SkillsIndexType } from '../../types';
import {
  NavItmLabel,
  WindowBodyNavItm,
  WindowBodyNavbar,
} from '../../GlobalStyle';
import { SMALL_ICON_SIZE, getIcon } from '../getIcon';

type SkillsNavbarProps = {
  index: SkillsIndexType;
  onClick: (name: SkillsIndexType) => void;
};

const SkillsNavbar: React.FC<SkillsNavbarProps> = ({ index, onClick }) => {
  return (
    <WindowBodyNavbar>
      <WindowBodyNavItm
        first
        onClick={() => onClick('Front')}
        focus={index === 'Front'}
        title="Front-End"
      >
        {getIcon('Folder', SMALL_ICON_SIZE)}
        <NavItmLabel>Front-End</NavItmLabel>
      </WindowBodyNavItm>
      <WindowBodyNavItm
        onClick={() => onClick('Back')}
        focus={index === 'Back'}
        title="Back-End"
      >
        {getIcon('Folder', SMALL_ICON_SIZE)}
        <NavItmLabel>Back-End</NavItmLabel>
      </WindowBodyNavItm>
      <WindowBodyNavItm
        onClick={() => onClick('Mobile')}
        focus={index === 'Mobile'}
        title="Mobile"
      >
        {getIcon('Folder', SMALL_ICON_SIZE)}
        <NavItmLabel>Mobile</NavItmLabel>
      </WindowBodyNavItm>
      <WindowBodyNavItm
        onClick={() => onClick('Programming')}
        focus={index === 'Programming'}
        title="Language"
      >
        {getIcon('CodeFile', SMALL_ICON_SIZE)}
        <NavItmLabel>Language</NavItmLabel>
      </WindowBodyNavItm>
    </WindowBodyNavbar>
  );
};

export default React.memo(SkillsNavbar);
