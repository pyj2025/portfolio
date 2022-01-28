import React from "react";
import { DraggableData, Position, ResizableDelta } from "react-rnd";
import {
  DatApex,
  Foodie,
  MobileProjects,
  Portfolio,
  Projects,
  WebProjects,
} from "../../components/Projects";
import {
  NavItmLabel,
  TopbarBtn,
  TopbarBtnContainer,
  TopbarTitle,
  TopbarTitleImage,
  TopbarTitleText,
  Window,
  WindowBody,
  WindowBodyContent,
  WindowBodyNavbar,
  WindowBodyNavItm,
  WindowTopbar,
} from "../../GlobalStyle";
import { WindowPositionSetting, WindowSizeSetting } from "../../types";

export type IndexType =
  | "Projects"
  | "WebProjects"
  | "MobileProjects"
  | "DatApex"
  | "Foodie"
  | "Portfolio";

type ProjectsWindowProps = {
  width: number;
  height: number;
  focusedWindow: string;
  handleFocus: (_e: any, data: DraggableData) => void;
  isProjectsExpanded: boolean;
  setProjectsMinimized: (flag: boolean) => void;
  toggleProjectsOpen: () => void;
  toggleProjectsExpanded: () => void;
};

const ProjectsWindow: React.FC<ProjectsWindowProps> = ({
  width,
  height,
  focusedWindow,
  handleFocus,
  isProjectsExpanded,
  setProjectsMinimized,
  toggleProjectsOpen,
  toggleProjectsExpanded,
}) => {
  const projectsRef = React.useRef<any>();

  const [projectsSize, setProjectsSize] = React.useState<WindowSizeSetting>({
    width: 500,
    height: 300,
  });
  const [projectsPosition, setProjectsPosition] =
    React.useState<WindowPositionSetting>({
      x: 40,
      y: -600,
    });

  const [projectsPrevSetting, setProjectsPrevSetting] = React.useState<
    (WindowSizeSetting & WindowPositionSetting) | null
  >(null);
  const [index, setIndex] = React.useState<IndexType>("Projects");

  const handleProjectsClose = () => {
    if (focusedWindow === "Projects") toggleProjectsOpen();
  };

  const handleProjectsMinimized = () => {
    if (focusedWindow === "Projects") {
      setProjectsMinimized(true);
      toggleProjectsOpen();
    }
  };

  const handleProjectsExpand = () => {
    if (focusedWindow === "Projects") {
      if (isProjectsExpanded) {
        if (projectsPrevSetting === null) {
          setProjectsSize({
            width: 500,
            height: 300,
          });
          setProjectsPosition({
            x: 40,
            y: -600,
          });
        } else {
          setProjectsSize({
            width: projectsPrevSetting.width,
            height: projectsPrevSetting.height,
          });
          setProjectsPosition({
            x: projectsPrevSetting.x,
            y: projectsPrevSetting.y,
          });
        }
      } else {
        setProjectsPrevSetting({
          width: projectsSize.width,
          height: projectsSize.height,
          x: projectsPosition.x,
          y: projectsPosition.y,
        });

        setProjectsSize({
          width: width,
          height: height,
        });
        setProjectsPosition({
          x: 0,
          y: -1 * height,
        });
      }
      projectsRef.current.updateSize(projectsSize);
      projectsRef.current.updatePosition(projectsPosition);

      toggleProjectsExpanded();
    }
  };

  const handleClick = (name: IndexType) => {
    setIndex(name);
  };

  return (
    <Window
      id="Projects"
      ref={projectsRef}
      size={{ width: projectsSize.width, height: projectsSize.height }}
      position={{ x: projectsPosition.x, y: projectsPosition.y }}
      dragHandleClassName="topbar"
      minWidth={525}
      minHeight={300}
      onDragStart={handleFocus}
      onDragStop={(_e: any, data: DraggableData) => {
        setProjectsPosition({ x: data.x, y: data.y });
      }}
      onResizeStop={(
        _e: MouseEvent | TouchEvent,
        _dir: any,
        ref: any,
        _delta: ResizableDelta,
        position: Position
      ) => {
        setProjectsSize({
          width: ref.style.width,
          height: ref.style.height,
        });
        setProjectsPosition({ x: position.x, y: position.y });
      }}
    >
      <WindowTopbar className="topbar">
        <TopbarBtnContainer>
          <TopbarBtn
            color="close"
            title={focusedWindow === "Projects" ? "Close" : undefined}
            onClick={handleProjectsClose}
            disabled={focusedWindow !== "Projects"}
          />
          <TopbarBtn
            color="minimize"
            title={focusedWindow === "Projects" ? "Minimize" : undefined}
            onClick={handleProjectsMinimized}
            disabled={focusedWindow !== "Projects"}
          />
          <TopbarBtn
            color="expand"
            title={focusedWindow === "Projects" ? "Expand" : undefined}
            onClick={handleProjectsExpand}
            disabled={focusedWindow !== "Projects"}
          />
        </TopbarBtnContainer>
        <TopbarTitle>
          <TopbarTitleImage
            src="https://img.icons8.com/color/48/000000/mac-folder.png"
            alt="Projects"
          />
          <TopbarTitleText>Projects</TopbarTitleText>
        </TopbarTitle>
      </WindowTopbar>
      <WindowBody>
        <WindowBodyNavbar>
          <WindowBodyNavItm first onClick={() => handleClick("Projects")} focus>
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/mac-folder.png"
              alt="folder"
            />
            <NavItmLabel>Projects</NavItmLabel>
          </WindowBodyNavItm>
          <WindowBodyNavItm
            onClick={() => handleClick("WebProjects")}
            focus={
              index === "DatApex" ||
              index === "Portfolio" ||
              index === "WebProjects"
            }
            isChild
          >
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/mac-folder.png"
              alt="folder"
            />
            <NavItmLabel>Web</NavItmLabel>
          </WindowBodyNavItm>
          <WindowBodyNavItm
            onClick={() => handleClick("MobileProjects")}
            focus={index === "Foodie" || index === "MobileProjects"}
            isChild
          >
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/mac-folder.png"
              alt="folder"
            />
            <NavItmLabel>Mobile</NavItmLabel>
          </WindowBodyNavItm>
        </WindowBodyNavbar>
        <WindowBodyContent>
          {index === "Projects" ? <Projects click={handleClick} /> : null}
          {index === "WebProjects" ? <WebProjects click={handleClick} /> : null}
          {index === "MobileProjects" ? (
            <MobileProjects click={handleClick} />
          ) : null}
          {index === "DatApex" ? <DatApex /> : null}
          {index === "Portfolio" ? <Portfolio /> : null}
          {index === "Foodie" ? <Foodie /> : null}
        </WindowBodyContent>
      </WindowBody>
    </Window>
  );
};

export default ProjectsWindow;
