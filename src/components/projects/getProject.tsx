import DatApex from './DatApex';
import Portfolio from './Portfolio';
import Foodie from './Foodie';
import Tippy from './Tippy';
import Flix from './Flix';
import Twitter from './Twitter';
import Parstagram from './Parstagram';
import ToonFlix from './ToonFlix';
import { MobileProjects, Projects, WebProjects } from './Projects';
import { ProjectIndexType } from '../../types';

export const getProject = (
  index: ProjectIndexType,
  onClick?: (name: ProjectIndexType) => void
) => {
  switch (index) {
    case 'Projects':
      return <Projects click={onClick!} />;
    case 'WebProjects':
      return <WebProjects click={onClick!} />;
    case 'MobileProjects':
      return <MobileProjects click={onClick!} />;
    case 'DatApex':
      return <DatApex />;
    case 'Portfolio':
      return <Portfolio />;
    case 'Foodie':
      return <Foodie />;
    case 'Tippy':
      return <Tippy />;
    case 'Flix':
      return <Flix />;
    case 'Twitter':
      return <Twitter />;
    case 'Parstagram':
      return <Parstagram />;
    case 'ToonFlix':
      return <ToonFlix />;
    default:
      return;
  }
};
