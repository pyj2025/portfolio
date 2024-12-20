import GitCard from './GitCard';
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
import WebGame from './WebGame';
import MovieNext from './MovieNext';

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
    case 'GitCard':
      return <GitCard />;
    case 'DatApex':
      return <DatApex />;
    case 'MovieNext':
      return <MovieNext />;
    case 'Portfolio':
      return <Portfolio />;
    case 'Foodie':
      return <Foodie />;
    case 'WebGame':
      return <WebGame />;
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
