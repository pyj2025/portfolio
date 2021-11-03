import React from "react";
import styled from "styled-components";
import { DraggableData, Position, ResizableDelta, Rnd } from "react-rnd";
import img from "./Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  background-color: #3c3c3c;
  color: white;
`;

const MacWindow = styled(Rnd)`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 0px 8px black;
`;

const MacWindowTopbar = styled.div`
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

const TerminalBtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TerminalBtn = styled.div<{ color: string; disabled: boolean }>`
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

const MacWindowBody = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 272px;
  color: black;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoListItem = styled.div`
  display: flex;
  flex-direction: row;
`;

const InfoListItemLabel = styled.div`
  margin-left: 8px;
`;

type WindowSizeSetting = {
  width: number;
  height: number;
};

type WindowPositionSetting = {
  x: number;
  y: number;
};

export type BodyContentProps = {
  width: number;
  height: number;
  focusedWindow: string;
  isAboutOpen: boolean;
  isAboutExpanded: boolean;
  isSkillsOpen: boolean;
  isProjectsOpen: boolean;
  isDesktopAboutOpen: boolean;
  toggleAboutOpen: () => void;
  setAboutMinimized: (flag: boolean) => void;
  toggleAboutExpanded: () => void;
  toggleSkillsOpen: () => void;
  setSkillsMinimized: (flag: boolean) => void;
  toggleProjectsOpen: () => void;
  setProjectsMinimized: (flag: boolean) => void;
  setFocusedWindow: (name: string) => void;
  toggleDesktopAboutOpen: () => void;
};

const BodyContent: React.FC<BodyContentProps> = ({
  width,
  height,
  focusedWindow,
  isAboutOpen,
  isAboutExpanded,
  isSkillsOpen,
  isProjectsOpen,
  isDesktopAboutOpen,
  toggleAboutOpen,
  setAboutMinimized,
  toggleAboutExpanded,
  toggleSkillsOpen,
  setSkillsMinimized,
  toggleProjectsOpen,
  setProjectsMinimized,
  setFocusedWindow,
  toggleDesktopAboutOpen,
}) => {
  const windowRef = React.useRef({
    newZIndex: "10",
    prevNode: null as unknown as HTMLElement,
    prevZIndex: null as unknown as string,
  });
  const desktopAboutRef = React.useRef<any>();
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

  React.useEffect(() => {
    console.log("height = ", height);
    console.log("width = ", width);
    console.log("toggleDesktopAboutOpen = ", isDesktopAboutOpen);
  }, [height, width]);

  const handleDesktopAboutClose = () => {
    if (focusedWindow === "DesktopAbout") toggleDesktopAboutOpen();
  };

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

  const handleSkillsClose = () => {
    if (focusedWindow === "Skills") toggleSkillsOpen();
  };

  const handleSkillsMinimized = () => {
    if (focusedWindow === "Skills") {
      setSkillsMinimized(true);
      toggleSkillsOpen();
    }
  };

  const handleProjectsClose = () => {
    if (focusedWindow === "Projects") toggleProjectsOpen();
  };

  const handleProjectsMinimized = () => {
    if (focusedWindow === "Projects") {
      setProjectsMinimized(true);
      toggleProjectsOpen();
    }
  };

  const handleFocus = (_e: any, data: DraggableData) => {
    const ref = windowRef.current;

    if (ref.prevNode) {
      ref.prevNode.style.zIndex = ref.prevZIndex;
    }

    ref.prevNode = data.node;
    ref.prevZIndex = ref.prevNode.style.zIndex;
    ref.prevNode.style.zIndex = ref.newZIndex;
    setFocusedWindow(data.node.id);
  };

  return (
    <Container>
      {isDesktopAboutOpen ? (
        <MacWindow
          id="DesktopAbout"
          ref={desktopAboutRef}
          default={{
            x: width / 3,
            y: -1 * ((height * 2) / 3),
            width: 500,
            height: 300,
          }}
          dragHandleClassName="topbar"
          onDragStart={handleFocus}
          enableResizing={false}
        >
          <MacWindowTopbar className="topbar">
            <TerminalBtnContainer>
              <TerminalBtn
                color="close"
                title={focusedWindow === "DesktopAbout" ? "Close" : undefined}
                onClick={handleDesktopAboutClose}
                disabled={focusedWindow !== "DesktopAbout"}
              />
              <TerminalBtn color="disabled" disabled={true} />
              <TerminalBtn color="disabled" disabled={true} />
            </TerminalBtnContainer>
            <TopbarTitle />
          </MacWindowTopbar>
          <MacWindowBody>
            <LogoContainer>
              <img src={img} width="200" height="200" alt="Logo" />
            </LogoContainer>
            <div>
              <h1>Youngjoon Park</h1>
              <h4>Junior Frontend Developer</h4>
              <InfoList>
                <InfoListItem>
                  <FontAwesomeIcon icon={faBirthdayCake} />
                  <InfoListItemLabel>Jan.17.1994</InfoListItemLabel>
                </InfoListItem>
                <InfoListItem>
                  <FontAwesomeIcon icon={faPhone} />
                  <InfoListItemLabel>+1 312-937-4435</InfoListItemLabel>
                </InfoListItem>
                <InfoListItem>
                  <FontAwesomeIcon icon={faLocationArrow} />
                  <InfoListItemLabel>
                    25 W Randolph St Apt 903, Chicago, IL, 60601
                  </InfoListItemLabel>
                </InfoListItem>
              </InfoList>
            </div>
          </MacWindowBody>
        </MacWindow>
      ) : null}
      {isAboutOpen ? (
        <MacWindow
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
          <MacWindowTopbar className="topbar">
            <TerminalBtnContainer>
              <TerminalBtn
                color="close"
                title={focusedWindow === "About" ? "Close" : undefined}
                onClick={handleAboutClose}
                disabled={focusedWindow !== "About"}
              />
              <TerminalBtn
                color="minimize"
                title={focusedWindow === "About" ? "Minimize" : undefined}
                onClick={handleAboutMinimized}
                disabled={focusedWindow !== "About"}
              />
              <TerminalBtn
                color="expand"
                title={focusedWindow === "About" ? "Expand" : undefined}
                onClick={handleAboutExpand}
                disabled={focusedWindow !== "About"}
              />
            </TerminalBtnContainer>
            <TopbarTitle>
              <TopbarTitleImage
                src="https://img.icons8.com/color/48/000000/mac-logo.png"
                alt="About"
              />
              <TopbarTitleText>About</TopbarTitleText>
            </TopbarTitle>
          </MacWindowTopbar>
          <div>Body</div>
        </MacWindow>
      ) : null}
      {isSkillsOpen ? (
        <MacWindow
          default={{
            x: 100,
            y: -600,
            width: 500,
            height: 300,
          }}
          id="Skills"
          dragHandleClassName="topbar"
          minWidth={500}
          minHeight={300}
          onDragStart={handleFocus}
        >
          <MacWindowTopbar className="topbar">
            <TerminalBtnContainer>
              <TerminalBtn
                color="close"
                title={focusedWindow === "Skills" ? "Close" : undefined}
                onClick={handleSkillsClose}
                disabled={focusedWindow !== "Skills"}
              />
              <TerminalBtn
                color="minimize"
                title={focusedWindow === "Skills" ? "Minimize" : undefined}
                onClick={handleSkillsMinimized}
                disabled={focusedWindow !== "Skills"}
              />
              <TerminalBtn
                color="expand"
                title={focusedWindow === "Skills" ? "Expand" : undefined}
                onClick={toggleSkillsOpen}
                disabled={focusedWindow !== "Skills"}
              />
            </TerminalBtnContainer>
            <TopbarTitle>
              <TopbarTitleImage
                src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
                alt="Skills"
              />
              <TopbarTitleText>Skills</TopbarTitleText>
            </TopbarTitle>
          </MacWindowTopbar>
          <div>Body</div>
        </MacWindow>
      ) : null}
      {isProjectsOpen ? (
        <MacWindow
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
          <MacWindowTopbar className="topbar">
            <TerminalBtnContainer>
              <TerminalBtn
                color="close"
                title={focusedWindow === "Projects" ? "Close" : undefined}
                onClick={handleProjectsClose}
                disabled={focusedWindow !== "Projects"}
              />
              <TerminalBtn
                color="minimize"
                title={focusedWindow === "Projects" ? "Minimize" : undefined}
                onClick={handleProjectsMinimized}
                disabled={focusedWindow !== "Projects"}
              />
              <TerminalBtn
                color="expand"
                title={focusedWindow === "Projects" ? "Expand" : undefined}
                onClick={toggleProjectsOpen}
                disabled={focusedWindow !== "Projects"}
              />
            </TerminalBtnContainer>
            <TopbarTitle>
              <TopbarTitleImage
                src="https://img.icons8.com/color/48/000000/mac-folder.png"
                alt="Projects"
              />
              <TopbarTitleText>Projects</TopbarTitleText>
            </TopbarTitle>
          </MacWindowTopbar>
          <div>Body</div>
        </MacWindow>
      ) : null}
    </Container>
  );
};

export default BodyContent;
