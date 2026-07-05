import React from "react";
import AppWindow from "../../../components/AppWindow";
import { WindowBody } from "../../../components/WindowChrome";
import { ProjectIndexType, ViewMode } from "../../../types";
import ProjectsContent from "../../../components/projects/ProjectsContent";
import useNavHistory from "../../../utils/useNavHistory";
import ProjectsNavbar from "../../../components/projects/ProjectsNavbar";

const ProjectsWindow: React.FC = () => {
  const {
    current: index,
    navigate,
    back,
    forward,
    canBack,
    canForward,
  } = useNavHistory<ProjectIndexType>("Projects");
  const [view, setView] = React.useState<ViewMode>("icon");

  const handleClick = React.useCallback(
    (name: ProjectIndexType) => {
      navigate(name);
    },
    [navigate],
  );

  return (
    <AppWindow
      id="Projects"
      defaultSize={{ width: 500, height: 300 }}
      defaultPosition={{ x: 100, y: 100 }}
      minWidth={525}
      minHeight={300}
      nav={{ onBack: back, onForward: forward, canBack, canForward }}
      view={view}
      onViewChange={setView}
    >
      <WindowBody className="h-full">
        <ProjectsNavbar index={index} onClick={handleClick} />
        <ProjectsContent index={index} onClick={handleClick} view={view} />
      </WindowBody>
    </AppWindow>
  );
};

export default ProjectsWindow;
