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
import { WindowBodyContent } from '../../GlobalStyle';

type WithClickComponent = React.ComponentType<{
  click: (name: ProjectIndexType) => void;
}>;
type WithoutClickComponent = React.ComponentType;

const PROJECTS_WITH_CLICK: Record<string, WithClickComponent> = {
  Projects: Projects,
  WebProjects: WebProjects,
  MobileProjects: MobileProjects,
};

const PROJECTS_WITHOUT_CLICK: Record<string, WithoutClickComponent> = {
  GitCard: GitCard,
  DatApex: DatApex,
  MovieNext: MovieNext,
  Portfolio: Portfolio,
  Foodie: Foodie,
  WebGame: WebGame,
  Tippy: Tippy,
  Flix: Flix,
  Twitter: Twitter,
  Parstagram: Parstagram,
  ToonFlix: ToonFlix,
};

interface ProjectsContentProps {
  index: ProjectIndexType;
  onClick: (name: ProjectIndexType) => void;
}

const ProjectsContent: React.FC<ProjectsContentProps> = ({
  index,
  onClick,
}) => {
  if (index in PROJECTS_WITH_CLICK) {
    const Component = PROJECTS_WITH_CLICK[index];
    return (
      <WindowBodyContent>
        <Component click={onClick} />
      </WindowBodyContent>
    );
  }

  if (index in PROJECTS_WITHOUT_CLICK) {
    const Component = PROJECTS_WITHOUT_CLICK[index];
    return (
      <WindowBodyContent>
        <Component />
      </WindowBodyContent>
    );
  }

  return null;
};

export default ProjectsContent;
