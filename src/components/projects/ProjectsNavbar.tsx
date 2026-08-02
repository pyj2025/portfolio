import React from 'react';
import info from '../../info.json';
import { ProjectIndexType } from '../../types';
import {
  NavItmLabel,
  NavSectionLabel,
  WindowBodyNavItm,
  WindowBodyNavbar,
} from '../WindowChrome';
import { getNavIcon } from '../getIcon';

type ProjectCategory = {
  id: ProjectIndexType;
  label: string;
  category: string;
};

const CATEGORIES: ProjectCategory[] = [
  { id: 'WebProjects', label: 'Web', category: 'web' },
  { id: 'MobileProjects', label: 'Mobile', category: 'mobile' },
];

// the nav item's id is the info.json key, which is what ProjectsContent routes on —
// the display name can differ (e.g. Portfolio -> "Joon's Portfolio")
const projectsOf = (category: string) =>
  Object.entries(info.project)
    .filter(([, project]) => project.category === category)
    .map(([key, project]) => ({ id: key as ProjectIndexType, name: project.name }));

type ProjectsNavbarProps = {
  index: ProjectIndexType;
  onClick: (name: ProjectIndexType) => void;
};

const ProjectsNavbar: React.FC<ProjectsNavbarProps> = ({ index, onClick }) => {
  const isCategoryFocused = (category: ProjectCategory): boolean =>
    index === category.id ||
    projectsOf(category.category).some(project => project.id === index);

  return (
    <WindowBodyNavbar>
      <NavSectionLabel>Favorites</NavSectionLabel>
      <WindowBodyNavItm first onClick={() => onClick('Projects')} focus>
        {getNavIcon('Folder', true)}
        <NavItmLabel>Projects</NavItmLabel>
      </WindowBodyNavItm>
      {CATEGORIES.map(category => (
        <React.Fragment key={category.id}>
          <WindowBodyNavItm
            onClick={() => onClick(category.id)}
            focus={isCategoryFocused(category)}
            isChild
          >
            {getNavIcon('Folder', isCategoryFocused(category))}
            <NavItmLabel>{category.label}</NavItmLabel>
          </WindowBodyNavItm>
          {projectsOf(category.category).map(project => (
            <WindowBodyNavItm
              key={project.id}
              className="pl-10"
              onClick={() => onClick(project.id)}
              focus={index === project.id}
            >
              {getNavIcon('File', index === project.id)}
              <NavItmLabel>{project.name}</NavItmLabel>
            </WindowBodyNavItm>
          ))}
        </React.Fragment>
      ))}
    </WindowBodyNavbar>
  );
};

export default React.memo(ProjectsNavbar);
