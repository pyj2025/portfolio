import React from "react";
import styled from "styled-components";
import { DraggableData, Position, ResizableDelta, Rnd } from "react-rnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faSchool, faUser } from "@fortawesome/free-solid-svg-icons";
import Education from "../components/Education";
import About from "../components/About";
import Experience from "../components/Experience";

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

const WindowBodyNavItm = styled.div<{ focus: boolean; first?: boolean }>`
  display: grid;
  grid-template-columns: 20px auto;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ focus }) =>
    focus ? "rgba(120, 120, 120, 0.5)" : "transparent"};
  color: white;
  margin-top: ${({ first }) => (first ? "4px" : undefined)};
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 8px;
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

export type WindowSizeSetting = {
  width: number;
  height: number;
};

export type WindowPositionSetting = {
  x: number;
  y: number;
};

type IndexType = "About" | "Experience" | "Education";

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

  const [index, setIndex] = React.useState<IndexType>("About");

  React.useEffect(() => {
    if (width < aboutSize.width) {
      handleAboutExpand();
    }
  }, [width, aboutSize.width]);

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

  const handleClick = (name: IndexType) => {
    setIndex(name);
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
      <WindowBody>
        <WindowBodyNavbar>
          <WindowBodyNavItm
            first
            onClick={() => handleClick("About")}
            focus={index === "About"}
          >
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/file.png"
              alt="folder"
            />
            <NavItmLabel>Personal Info</NavItmLabel>
          </WindowBodyNavItm>
          <WindowBodyNavItm
            onClick={() => handleClick("Experience")}
            focus={index === "Experience"}
          >
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/file.png"
              alt="folder"
            />
            <NavItmLabel>Experience</NavItmLabel>
          </WindowBodyNavItm>
          <WindowBodyNavItm
            onClick={() => handleClick("Education")}
            focus={index === "Education"}
          >
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/file.png"
              alt="folder"
            />
            <NavItmLabel>Education</NavItmLabel>
          </WindowBodyNavItm>
        </WindowBodyNavbar>
        <WindowBodyContent>
          {index === "About" ? <About /> : null}
          {index === "Education" ? <Education /> : null}
          {index === "Experience" ? <Experience /> : null}
        </WindowBodyContent>
      </WindowBody>
    </Window>
  );
};

export default AboutWindow;
