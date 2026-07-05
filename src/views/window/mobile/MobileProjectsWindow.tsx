import React from "react";
import AppWindow from "../../../components/AppWindow";
import { MobileBodyContent, MobileWindowBody } from "../../../GlobalStyle";
import { ProjectIndexType, ViewMode } from "../../../types";
import ProjectsContent from "../../../components/projects/ProjectsContent";
import useNavHistory from "../../../utils/useNavHistory";
import MobileProjectsNavbar from "../../../components/projects/MobileProjectsNavbar";
import { MobilePanel } from "../../../components";

const MAIN_PROJECT_VIEWS = ["Projects", "WebProjects", "MobileProjects"] as const;
const WEB_PROJECTS = ["GitCard", "DatApex", "MovieNext", "Portfolio"] as const;

interface MobileProjectsContentProps {
  index: ProjectIndexType;
  onClick: (name: ProjectIndexType) => void;
  view: ViewMode;
}

const MobileProjectsContent: React.FC<MobileProjectsContentProps> = ({
  index,
  onClick,
  view,
}) => {
  const isMainView = MAIN_PROJECT_VIEWS.includes(index as (typeof MAIN_PROJECT_VIEWS)[number]);

  const handleBackClick = () => {
    const isWebProject = WEB_PROJECTS.includes(index as (typeof WEB_PROJECTS)[number]);
    onClick(isWebProject ? "WebProjects" : "MobileProjects");
  };

  return (
    <MobileBodyContent>
      {isMainView ? (
        <ProjectsContent index={index} onClick={onClick} view={view} />
      ) : (
        <MobilePanel onClick={handleBackClick}>
          <ProjectsContent index={index} onClick={onClick} view={view} />
        </MobilePanel>
      )}
    </MobileBodyContent>
  );
};

const MobileProjectsWindow: React.FC = () => {
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
      <MobileWindowBody className="h-full">
        <MobileProjectsNavbar index={index} onClick={handleClick} />
        <MobileProjectsContent index={index} onClick={handleClick} view={view} />
      </MobileWindowBody>
    </AppWindow>
  );
};

export default MobileProjectsWindow;
