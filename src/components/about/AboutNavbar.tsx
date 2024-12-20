import React from 'react';
import { AboutIndexType } from '../../types';
import {
  NavItmLabel,
  WindowBodyNavItm,
  WindowBodyNavbar,
} from '../../GlobalStyle';
import { SMALL_ICON_SIZE, getIcon } from '../getIcon';

type AboutNavbarProps = {
  index: AboutIndexType;
  onClick: (name: AboutIndexType) => void;
};

const AboutNavbar: React.FC<AboutNavbarProps> = ({ index, onClick }) => {
  return (
    <WindowBodyNavbar>
      <WindowBodyNavItm
        first
        onClick={() => onClick('Info')}
        focus={index === 'Info'}
      >
        {getIcon('File', SMALL_ICON_SIZE)}
        <NavItmLabel>Personal Info</NavItmLabel>
      </WindowBodyNavItm>
      <WindowBodyNavItm
        onClick={() => onClick('Experience')}
        focus={index === 'Experience'}
      >
        {getIcon('Folder', SMALL_ICON_SIZE)}
        <NavItmLabel>Experience</NavItmLabel>
      </WindowBodyNavItm>
      <WindowBodyNavItm
        onClick={() => onClick('Education')}
        focus={index === 'Education'}
      >
        {getIcon('File', SMALL_ICON_SIZE)}
        <NavItmLabel>Education</NavItmLabel>
      </WindowBodyNavItm>
      <WindowBodyNavItm
        onClick={() => onClick('Certifications')}
        focus={index === 'Certifications'}
      >
        {getIcon('Folder', SMALL_ICON_SIZE)}
        <NavItmLabel>Certifications</NavItmLabel>
      </WindowBodyNavItm>
    </WindowBodyNavbar>
  );
};

export default React.memo(AboutNavbar);
