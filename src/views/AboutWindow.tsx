import React from "react";
import styled from "styled-components";
import { DraggableData, Position, ResizableDelta, Rnd } from "react-rnd";

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

export type WindowSizeSetting = {
  width: number;
  height: number;
};

export type WindowPositionSetting = {
  x: number;
  y: number;
};

type AboutWindowProps = {
  width: number;
  height: number;
  focusedWindow: string;
  handleFocus: (_e: any, data: DraggableData) => void;
  isAboutExpanded: boolean;
  setAboutMinimized: (flag: boolean) => void;
  toggleAboutOpen: () => void;
  toggleAboutExpanded: () => void;
};

const AboutWindow: React.FC<AboutWindowProps> = ({
  width,
  height,
  focusedWindow,
  handleFocus,
  isAboutExpanded,
  setAboutMinimized,
  toggleAboutOpen,
  toggleAboutExpanded,
}) => {
  const aboutRef = React.useRef<any>();

  const [aboutSize, setAboutSize] = React.useState<WindowSizeSetting>({
    width: 500,
    height: 300,
  });
  const [aboutPosition, setAboutPosition] =
    React.useState<WindowPositionSetting>({
      x: 40,
      y: -600,
    });

  const [aboutPrevSetting, setAboutPrevSetting] = React.useState<
    (WindowSizeSetting & WindowPositionSetting) | null
  >(null);

  const handleAboutClose = () => {
    if (focusedWindow === "About") toggleAboutOpen();
  };

  const handleAboutMinimized = () => {
    if (focusedWindow === "About") {
      setAboutMinimized(true);
      toggleAboutOpen();
    }
  };

  const handleAboutExpand = () => {
    if (focusedWindow === "About") {
      if (isAboutExpanded) {
        if (aboutPrevSetting === null) {
          setAboutSize({
            width: 500,
            height: 300,
          });
          setAboutPosition({
            x: 40,
            y: -600,
          });
        } else {
          setAboutSize({
            width: aboutPrevSetting.width,
            height: aboutPrevSetting.height,
          });
          setAboutPosition({
            x: aboutPrevSetting.x,
            y: aboutPrevSetting.y,
          });
        }
      } else {
        setAboutPrevSetting({
          width: aboutSize.width,
          height: aboutSize.height,
          x: aboutPosition.x,
          y: aboutPosition.y,
        });

        setAboutSize({
          width: width,
          height: height,
        });
        setAboutPosition({
          x: 0,
          y: -1 * height,
        });
      }
      aboutRef.current.updateSize(aboutSize);
      aboutRef.current.updatePosition(aboutPosition);

      toggleAboutExpanded();
    }
  };

  return (
    <Window
      id="About"
      ref={aboutRef}
      size={{ width: aboutSize.width, height: aboutSize.height }}
      position={{ x: aboutPosition.x, y: aboutPosition.y }}
      dragHandleClassName="topbar"
      minWidth={500}
      minHeight={300}
      onDragStart={handleFocus}
      onDragStop={(_e: any, data: DraggableData) => {
        setAboutPosition({ x: data.x, y: data.y });
      }}
      onResizeStop={(
        _e: MouseEvent | TouchEvent,
        _dir: any,
        ref: any,
        _delta: ResizableDelta,
        position: Position
      ) => {
        setAboutSize({
          width: ref.style.width,
          height: ref.style.height,
        });
        setAboutPosition({ x: position.x, y: position.y });
      }}
    >
      <WindowTopbar className="topbar">
        <TopbarBtnContainer>
          <TopbarBtn
            color="close"
            title={focusedWindow === "About" ? "Close" : undefined}
            onClick={handleAboutClose}
            disabled={focusedWindow !== "About"}
          />
          <TopbarBtn
            color="minimize"
            title={focusedWindow === "About" ? "Minimize" : undefined}
            onClick={handleAboutMinimized}
            disabled={focusedWindow !== "About"}
          />
          <TopbarBtn
            color="expand"
            title={focusedWindow === "About" ? "Expand" : undefined}
            onClick={handleAboutExpand}
            disabled={focusedWindow !== "About"}
          />
        </TopbarBtnContainer>
        <TopbarTitle>
          <TopbarTitleImage
            src="https://img.icons8.com/color/48/000000/mac-logo.png"
            alt="About"
          />
          <TopbarTitleText>About</TopbarTitleText>
        </TopbarTitle>
      </WindowTopbar>
      <div>Body</div>
    </Window>
  );
};

export default AboutWindow;
