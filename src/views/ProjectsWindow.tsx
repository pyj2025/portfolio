import React from "react";
import styled from "styled-components";
import { DraggableData, Position, ResizableDelta, Rnd } from "react-rnd";
import { WindowPositionSetting, WindowSizeSetting } from "./AboutWindow";

const Window = styled(Rnd)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  box-shadow: 0px 0px 8px black;
`;

const WindowTopbar = styled.div`
  width: 100%;
  height: 28px;
  background-color: rgb(51, 52, 54);
  border-top: 1px solid rgb(70, 75, 80);
  padding: 0px 10px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  cursor: default;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 0.2px solid #141516;
`;

const TopbarBtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TopbarBtn = styled.div<{ color: string; disabled: boolean }>`
  width: 12px;
  height: 12px;
  color: #62574c;
  display: inline-block;
  margin-left: ${({ color }: { color: string }) =>
    color === "close" ? "0px" : "8px"};
  border-radius: 8px;
  align-items: center;
  vertical-align: middle;
  background-color: ${({
    color,
    disabled,
  }: {
    color: string;
    disabled: boolean;
  }) =>
    disabled
      ? "#686B6D"
      : color === "minimize"
      ? "#F7BD45"
      : color === "expand"
      ? "#5FCB43"
      : "#ee514a"};
  cursor: ${({ disabled }: { disabled: boolean }) =>
    disabled ? undefined : "pointer"};
`;

const TopbarTitleImage = styled.img`
  width: 16px;
  height: 16px;
`;

const TopbarTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
`;

const TopbarTitleText = styled.span`
  margin-left: 6px;
  pointer-events: none;
`;

const WindowBody = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  width: 100%;
  height: calc(100% - 28px);
`;

const WindowBodyNavbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  background-color: rgba(51, 49, 51, 0.9);
  color: white;
  border-right: 0.2px solid #141516;
`;

const WindowBodyNavItm = styled.div<{ focus: boolean; isChild?: boolean }>`
  display: grid;
  grid-template-columns: 20px auto;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ focus }) =>
    focus ? "rgba(120, 120, 120, 0.5)" : "transparent"};
  color: white;
  margin-top: 1px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: ${({ isChild }) => (isChild ? "24px" : "8px")};
  cursor: pointer;
`;

const NavItmLabel = styled.span`
  font-weight: bold;
  justify-content: center;
  margin-left: 4px;
`;

const WindowBodyContent = styled.div`
  height: 100%;
  background-color: #1d1f21;
  color: white;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px;
`;

const IconContainer = styled.div<{ noWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ noWidth }) => (noWidth ? undefined : "60px")};
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const IconLabel = styled.div`
  font-size: 0.75rem;
`;

type IndexType =
  | "Projects"
  | "WebProjects"
  | "MobileProjects"
  | "DatApex"
  | "Foodie";

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

const Projects: React.FC<{ click: (name: IndexType) => void }> = ({
  click,
}) => {
  return (
    <>
      <ContentContainer>
        <IconContainer onClick={() => click("WebProjects")}>
          <img
            src="https://img.icons8.com/color/48/000000/mac-folder.png"
            alt="Folder"
          />
          <IconLabel>Web</IconLabel>
        </IconContainer>
        <IconContainer onClick={() => click("MobileProjects")}>
          <img
            src="https://img.icons8.com/color/48/000000/mac-folder.png"
            alt="Folder"
          />
          <IconLabel>Mobile</IconLabel>
        </IconContainer>
      </ContentContainer>
    </>
  );
};

const WebProjects: React.FC<{ click: (name: IndexType) => void }> = ({
  click,
}) => {
  return (
    <>
      <ContentContainer>
        <IconContainer onClick={() => click("DatApex")}>
          <img
            src="https://img.icons8.com/color/48/000000/code-file.png"
            alt="Folder"
          />
          <IconLabel>DatApex</IconLabel>
        </IconContainer>
      </ContentContainer>
    </>
  );
};

const MobileProjects: React.FC<{ click: (name: IndexType) => void }> = ({
  click,
}) => {
  return (
    <>
      <ContentContainer>
        <IconContainer onClick={() => click("Foodie")}>
          <img
            src="https://img.icons8.com/color/48/000000/code-file.png"
            alt="Folder"
          />
          <IconLabel>Foodie</IconLabel>
        </IconContainer>
      </ContentContainer>
    </>
  );
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
          <WindowBodyNavItm
            onClick={() => handleClick("Projects")}
            focus={
              index === "Projects" ||
              index === "WebProjects" ||
              index === "DatApex" ||
              index === "MobileProjects" ||
              index === "Foodie"
            }
          >
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/mac-folder.png"
              alt="folder"
            />
            <NavItmLabel>Projects</NavItmLabel>
          </WindowBodyNavItm>
          <WindowBodyNavItm
            onClick={() => handleClick("WebProjects")}
            focus={index === "DatApex" || index === "WebProjects"}
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
          {index === "DatApex" ? (
            <>
              <div>###DatApex###</div>
            </>
          ) : null}
          {index === "Foodie" ? (
            <>
              <div>###Foodie###</div>
            </>
          ) : null}
        </WindowBodyContent>
      </WindowBody>
    </Window>
  );
};

export default ProjectsWindow;
