import React from "react";
import { DraggableData, Position, ResizableDelta } from "react-rnd";
import { WindowProps } from "../../BodyContent";
import {
  MobileProjects,
  Projects,
  WebProjects,
} from "../../../components/Projects";
import WindowTopbar from "../../../components/WindowTopbar";
import { Window } from "../../../GlobalStyle";
import { WindowPositionSetting, WindowSizeSetting } from "../../../types";
import useScreenSize, { TABLET_MAX_WIDTH } from "../../../utils/useScreenSize";
import Foodie from "../../../components/projects/Foodie";
import Portfolio from "../../../components/projects/Portfolio";
import DatApex from "../../../components/projects/DatApex";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const NewWindowBodyNavItm = styled.div<{
  focus: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ focus }) =>
    focus ? "rgba(120, 120, 120, 0.5)" : "transparent"};
  color: white;
  width: 100%;
  height: 3rem;
  cursor: pointer;
`;

const MobileNavbarMenu = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

const NewWindowBody2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100% - 28px);
`;

const WindowBodyNavbar2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 3rem;
  background-color: rgba(51, 49, 51, 0.9);
  color: white;
  border-right: 0.2px solid #141516;
  border-bottom-left-radius: 6px;
`;

const WindowBodyContent2 = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1d1f21;
  color: white;
  border-bottom-right-radius: 6px;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const MobileContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
  border-bottom-right-radius: 6px;
`;

const MobileCloseButtonContainer = styled.div`
  display: flex;
  color: white;
  justify-content: flex-end;
  align-items: center;
  height: 1.5rem;
  padding-right: 0.5rem;
`;

const MobileCloseButton = styled.div`
  margin-top: 0.75rem;
  padding: 0.5rem;
`;

export type IndexType =
  | "Projects"
  | "WebProjects"
  | "MobileProjects"
  | "DatApex"
  | "Foodie"
  | "Portfolio";

const MobileProjectsWindow: React.FC<WindowProps> = ({ handleFocus }) => {
  const { width, height } = useScreenSize();

  const projectsRef = React.useRef<any>();

  const [projectsSize, setProjectsSize] = React.useState<WindowSizeSetting>({
    width: 500,
    height: 300,
  });
  const [projectsPosition, setProjectsPosition] =
    React.useState<WindowPositionSetting>({
      x: 100,
      y: 100,
    });

  const [projectsPrevSetting, setProjectsPrevSetting] = React.useState<
    (WindowSizeSetting & WindowPositionSetting) | null
  >(null);
  const [index, setIndex] = React.useState<IndexType>("Projects");
  const [isMobileWindow, setIsMobileWindow] = React.useState(false);

  React.useEffect(() => {
    if (width < TABLET_MAX_WIDTH) {
      setProjectsSize({
        width,
        height: height - 80 - 25,
      });
      setProjectsPosition({
        x: 0,
        y: 0,
      });
      setIsMobileWindow(true);
    } else {
      setIsMobileWindow(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

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
      minWidth={isMobileWindow ? width : 525}
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
      <WindowTopbar
        title="Projects"
        windowRef={projectsRef}
        size={projectsSize}
        setSize={setProjectsSize}
        position={projectsPosition}
        setPosition={setProjectsPosition}
        prevSetting={projectsPrevSetting}
        setPrevSetting={setProjectsPrevSetting}
        isMobileWindow={isMobileWindow}
      />
      <NewWindowBody2>
        <WindowBodyNavbar2>
          <NewWindowBodyNavItm onClick={() => handleClick("Projects")} focus>
            <MobileNavbarMenu
              src="https://img.icons8.com/color/48/000000/mac-folder.png"
              alt="folder"
            />
          </NewWindowBodyNavItm>
          <NewWindowBodyNavItm
            onClick={() => handleClick("WebProjects")}
            focus={
              index === "DatApex" ||
              index === "Portfolio" ||
              index === "WebProjects"
            }
          >
            <MobileNavbarMenu
              src="https://img.icons8.com/color/48/000000/mac-folder.png"
              alt="folder"
            />
          </NewWindowBodyNavItm>
          <NewWindowBodyNavItm
            onClick={() => handleClick("MobileProjects")}
            focus={index === "Foodie" || index === "MobileProjects"}
          >
            <MobileNavbarMenu
              src="https://img.icons8.com/color/48/000000/mac-folder.png"
              alt="folder"
            />
          </NewWindowBodyNavItm>
        </WindowBodyNavbar2>
        <WindowBodyContent2>
          {index === "Projects" ? <Projects click={handleClick} /> : null}
          {index === "WebProjects" ? <WebProjects click={handleClick} /> : null}
          {index === "MobileProjects" ? (
            <MobileProjects click={handleClick} />
          ) : null}
          {index === "DatApex" ? (
            <MobileContentContainer>
              <MobileCloseButtonContainer>
                <MobileCloseButton onClick={() => handleClick("Projects")}>
                  <FontAwesomeIcon icon={faTimes} />
                </MobileCloseButton>
              </MobileCloseButtonContainer>
              <DatApex />
            </MobileContentContainer>
          ) : null}
          {index === "Portfolio" ? (
            <MobileContentContainer>
              <MobileCloseButtonContainer>
                <MobileCloseButton onClick={() => handleClick("Projects")}>
                  <FontAwesomeIcon icon={faTimes} />
                </MobileCloseButton>
              </MobileCloseButtonContainer>
              <Portfolio />
            </MobileContentContainer>
          ) : null}
          {index === "Foodie" ? (
            <MobileContentContainer>
              <MobileCloseButtonContainer>
                <MobileCloseButton onClick={() => handleClick("Projects")}>
                  <FontAwesomeIcon icon={faTimes} />
                </MobileCloseButton>
              </MobileCloseButtonContainer>
              <Foodie />
            </MobileContentContainer>
          ) : null}
        </WindowBodyContent2>
      </NewWindowBody2>
    </Window>
  );
};

export default MobileProjectsWindow;
