import React from "react";
import styled from "styled-components";
import { DraggableData, Position, ResizableDelta, Rnd } from "react-rnd";
import { WindowPositionSetting, WindowSizeSetting } from "./AboutWindow";

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

type SkillsWindowProps = {
  width: number;
  height: number;
  focusedWindow: string;
  handleFocus: (_e: any, data: DraggableData) => void;
  isSkillsExpanded: boolean;
  setSkillsMinimized: (flag: boolean) => void;
  toggleSkillsOpen: () => void;
  toggleSkillsExpanded: () => void;
};

const SkillsWindow: React.FC<SkillsWindowProps> = ({
  width,
  height,
  focusedWindow,
  handleFocus,
  isSkillsExpanded,
  setSkillsMinimized,
  toggleSkillsOpen,
  toggleSkillsExpanded,
}) => {
  const skillsRef = React.useRef<any>();

  const [skillsSize, setSkillsSize] = React.useState<WindowSizeSetting>({
    width: 500,
    height: 300,
  });
  const [skillsPosition, setSkillsPosition] =
    React.useState<WindowPositionSetting>({
      x: 40,
      y: -600,
    });

  const [skillsPrevSetting, setSkillsPrevSetting] = React.useState<
    (WindowSizeSetting & WindowPositionSetting) | null
  >(null);

  const handleSkillsClose = () => {
    if (focusedWindow === "Skills") toggleSkillsOpen();
  };

  const handleSkillsMinimized = () => {
    if (focusedWindow === "Skills") {
      setSkillsMinimized(true);
      toggleSkillsOpen();
    }
  };

  const handleSkillsExpand = () => {
    if (focusedWindow === "Skills") {
      if (isSkillsExpanded) {
        if (skillsPrevSetting === null) {
          setSkillsSize({
            width: 500,
            height: 300,
          });
          setSkillsPosition({
            x: 40,
            y: -600,
          });
        } else {
          setSkillsSize({
            width: skillsPrevSetting.width,
            height: skillsPrevSetting.height,
          });
          setSkillsPosition({
            x: skillsPrevSetting.x,
            y: skillsPrevSetting.y,
          });
        }
      } else {
        setSkillsPrevSetting({
          width: skillsSize.width,
          height: skillsSize.height,
          x: skillsPosition.x,
          y: skillsPosition.y,
        });

        setSkillsSize({
          width: width,
          height: height,
        });
        setSkillsPosition({
          x: 0,
          y: -1 * height,
        });
      }
      skillsRef.current.updateSize(skillsSize);
      skillsRef.current.updatePosition(skillsPosition);

      toggleSkillsExpanded();
    }
  };

  return (
    <Window
      id="Skills"
      ref={skillsRef}
      size={{ width: skillsSize.width, height: skillsSize.height }}
      position={{ x: skillsPosition.x, y: skillsPosition.y }}
      dragHandleClassName="topbar"
      minWidth={500}
      minHeight={300}
      onDragStart={handleFocus}
      onDragStop={(_e: any, data: DraggableData) => {
        setSkillsPosition({ x: data.x, y: data.y });
      }}
      onResizeStop={(
        _e: MouseEvent | TouchEvent,
        _dir: any,
        ref: any,
        _delta: ResizableDelta,
        position: Position
      ) => {
        setSkillsSize({
          width: ref.style.width,
          height: ref.style.height,
        });
        setSkillsPosition({ x: position.x, y: position.y });
      }}
    >
      <WindowTopbar className="topbar">
        <TopbarBtnContainer>
          <TopbarBtn
            color="close"
            title={focusedWindow === "Skills" ? "Close" : undefined}
            onClick={handleSkillsClose}
            disabled={focusedWindow !== "Skills"}
          />
          <TopbarBtn
            color="minimize"
            title={focusedWindow === "Skills" ? "Minimize" : undefined}
            onClick={handleSkillsMinimized}
            disabled={focusedWindow !== "Skills"}
          />
          <TopbarBtn
            color="expand"
            title={focusedWindow === "Skills" ? "Expand" : undefined}
            onClick={handleSkillsExpand}
            disabled={focusedWindow !== "Skills"}
          />
        </TopbarBtnContainer>
        <TopbarTitle>
          <TopbarTitleImage
            src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
            alt="Skills"
          />
          <TopbarTitleText>Skills</TopbarTitleText>
        </TopbarTitle>
      </WindowTopbar>
      <div>Body</div>
    </Window>
  );
};

export default SkillsWindow;
