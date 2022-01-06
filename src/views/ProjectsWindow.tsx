import React from "react";
import styled from "styled-components";
import { DraggableData, Rnd } from "react-rnd";

const Window = styled(Rnd)`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 0px 8px black;
`;

const WindowTopbar = styled.div`
  width: 100%;
  height: 28px;
  background-color: rgb(51, 52, 54);
  border-top: 1px rgb(70, 75, 80) solid;

  padding: 0px 10px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  cursor: default;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  align-items: center;
  box-sizing: border-box;
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

type ProjectsWindowProps = {
  focusedWindow: string;
  handleFocus: (_e: any, data: DraggableData) => void;
  setProjectsMinimized: (flag: boolean) => void;
  toggleProjectsOpen: () => void;
};

const ProjectsWindow: React.FC<ProjectsWindowProps> = ({
  focusedWindow,
  handleFocus,
  setProjectsMinimized,
  toggleProjectsOpen,
}) => {
  const handleProjectsClose = () => {
    if (focusedWindow === "Projects") toggleProjectsOpen();
  };

  const handleProjectsMinimized = () => {
    if (focusedWindow === "Projects") {
      setProjectsMinimized(true);
      toggleProjectsOpen();
    }
  };

  return (
    <Window
      default={{
        x: 0,
        y: -200,
        width: 500,
        height: 300,
      }}
      id="Projects"
      dragHandleClassName="topbar"
      minWidth={500}
      minHeight={300}
      onDragStart={handleFocus}
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
            onClick={toggleProjectsOpen}
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
      <div>Body</div>
    </Window>
  );
};

export default ProjectsWindow;
