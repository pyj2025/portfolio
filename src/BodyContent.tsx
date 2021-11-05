import React from "react";
import styled from "styled-components";
import { DraggableData, Position, ResizableDelta, Rnd } from "react-rnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import img from "./image/Logo.png";
import ProjectsWindow from "./views/ProjectsWindow";
import SkillsWindow from "./views/SkillsWindow";
import AboutWindow from "./views/AboutWindow";

const Container = styled.div`
  background-color: #3c3c3c;
  color: white;
`;

const Window = styled(Rnd)`
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

  React.useEffect(() => {
    console.log("height = ", height);
    console.log("width = ", width);
    console.log("toggleDesktopAboutOpen = ", isDesktopAboutOpen);
  }, [height, width]);

  const handleDesktopAboutClose = () => {
    if (focusedWindow === "DesktopAbout") toggleDesktopAboutOpen();
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
        <Window
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
        </Window>
      ) : null}
      {isAboutOpen ? (
        <AboutWindow
          width={width}
          height={height}
          focusedWindow={focusedWindow}
          handleFocus={handleFocus}
          isAboutExpanded={isAboutExpanded}
          setAboutMinimized={setAboutMinimized}
          toggleAboutOpen={toggleAboutOpen}
          toggleAboutExpanded={toggleAboutExpanded}
        />
      ) : null}
      {isSkillsOpen ? (
        <SkillsWindow
          focusedWindow={focusedWindow}
          handleFocus={handleFocus}
          setSkillsMinimized={setSkillsMinimized}
          toggleSkillsOpen={toggleSkillsOpen}
        />
      ) : null}
      {isProjectsOpen ? (
        <ProjectsWindow
          focusedWindow={focusedWindow}
          handleFocus={handleFocus}
          setProjectsMinimized={setProjectsMinimized}
          toggleProjectsOpen={toggleProjectsOpen}
        />
      ) : null}
    </Container>
  );
};

export default BodyContent;
