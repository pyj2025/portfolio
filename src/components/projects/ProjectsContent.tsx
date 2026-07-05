import React from "react";
import info from "../../info.json";
import { MobileProjects, Projects, WebProjects } from "./Projects";
import ProjectDetail, { ProjectKey } from "./ProjectDetail";
import { ProjectIndexType } from "../../types";
import { WindowBodyContent } from "../WindowChrome";
import { ViewMode } from "../../types";

type WithClickComponent = React.ComponentType<{
  click: (name: ProjectIndexType) => void;
  view?: ViewMode;
}>;

const PROJECTS_WITH_CLICK: Record<string, WithClickComponent> = {
  Projects: Projects,
  WebProjects: WebProjects,
  MobileProjects: MobileProjects,
};

const isProjectKey = (index: ProjectIndexType): index is ProjectKey =>
  index in info.project;

interface ProjectsContentProps {
  index: ProjectIndexType;
  onClick: (name: ProjectIndexType) => void;
  view?: ViewMode;
}

const ProjectsContent: React.FC<ProjectsContentProps> = ({
  index,
  onClick,
  view = "icon",
}) => {
  if (index in PROJECTS_WITH_CLICK) {
    const Component = PROJECTS_WITH_CLICK[index];
    return (
      <WindowBodyContent>
        <Component click={onClick} view={view} />
      </WindowBodyContent>
    );
  }

  if (isProjectKey(index)) {
    return (
      <WindowBodyContent>
        <ProjectDetail name={index} />
      </WindowBodyContent>
    );
  }

  return null;
};

export default ProjectsContent;
