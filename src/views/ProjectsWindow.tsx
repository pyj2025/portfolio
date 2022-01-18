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

type ProjectsWindowProps = {
  width: number;
  height: number;
  focusedWindow: string;
  handleFocus: (_e: any, data: DraggableData) => void;
  setProjectsMinimized: (flag: boolean) => void;
  toggleProjectsOpen: () => void;
};

const ProjectsWindow: React.FC<ProjectsWindowProps> = ({
  width,
  height,
  focusedWindow,
  handleFocus,
  setProjectsMinimized,
  toggleProjectsOpen,
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

  const [skillsPrevSetting, setSkillsPrevSetting] = React.useState<
    (WindowSizeSetting & WindowPositionSetting) | null
  >(null);

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
      if (skillsPrevSetting) {
        if (skillsPrevSetting === null) {
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
            width: skillsPrevSetting.width,
            height: skillsPrevSetting.height,
          });
          setProjectsPosition({
            x: skillsPrevSetting.x,
            y: skillsPrevSetting.y,
          });
        }
      } else {
        setSkillsPrevSetting({
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
    }
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
      <WindowBody></WindowBody>
    </Window>
  );
};

export default ProjectsWindow;
