import React from 'react';
import { ProjectIndexType } from '../../types';
import {
  NavItmLabel,
  WindowBodyNavItm,
  WindowBodyNavbar,
} from '../../GlobalStyle';
import { SMALL_ICON_SIZE, getIcon } from '../getIcon';

type ProjectsNavbarProps = {
  index: ProjectIndexType;
  onClick: (name: ProjectIndexType) => void;
};

const ProjectsNavbar: React.FC<ProjectsNavbarProps> = ({ index, onClick }) => {
  return (
    <WindowBodyNavbar>
      <WindowBodyNavItm first onClick={() => onClick('Projects')} focus>
        {getIcon('Folder', SMALL_ICON_SIZE)}
        <NavItmLabel>Projects</NavItmLabel>
      </WindowBodyNavItm>
      <WindowBodyNavItm
        onClick={() => onClick('WebProjects')}
        focus={['WebProjects', 'DatApex', 'Portfolio'].includes(index)}
        isChild
      >
        {getIcon('Folder', SMALL_ICON_SIZE)}
        <NavItmLabel>Web</NavItmLabel>
      </WindowBodyNavItm>
      <WindowBodyNavItm
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
        {getIcon('Folder', SMALL_ICON_SIZE)}
        <NavItmLabel>Mobile</NavItmLabel>
      </WindowBodyNavItm>
    </WindowBodyNavbar>
  );
};

export default React.memo(ProjectsNavbar);
