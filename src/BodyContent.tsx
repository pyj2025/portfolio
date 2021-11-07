import React from "react";
import styled from "styled-components";
import { DraggableData } from "react-rnd";

import ProjectsWindow from "./views/ProjectsWindow";
import SkillsWindow from "./views/SkillsWindow";
import AboutWindow from "./views/AboutWindow";
import TopbarAboutWindow from "./views/TopbarAboutWindow";

const Container = styled.div`
  background-color: #3c3c3c;
  color: white;
`;

export type BodyContentProps = {
  width: number;
  height: number;
  focusedWindow: string;
  isAboutOpen: boolean;
  isAboutExpanded: boolean;
  isSkillsOpen: boolean;
  isSkillsExpanded: boolean;
  isProjectsOpen: boolean;
  isDesktopAboutOpen: boolean;
  toggleAboutOpen: () => void;
  setAboutMinimized: (flag: boolean) => void;
  toggleAboutExpanded: () => void;
  toggleSkillsOpen: () => void;
  setSkillsMinimized: (flag: boolean) => void;
  toggleSkillsExpanded: () => void;
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
  isSkillsExpanded,
  isProjectsOpen,
  isDesktopAboutOpen,
  toggleAboutOpen,
  setAboutMinimized,
  toggleAboutExpanded,
  toggleSkillsOpen,
  setSkillsMinimized,
  toggleSkillsExpanded,
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

  React.useEffect(() => {
    console.log("height = ", height);
    console.log("width = ", width);
    console.log("toggleDesktopAboutOpen = ", isDesktopAboutOpen);
  }, [height, width]);

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
        <TopbarAboutWindow
          width={width}
          height={height}
          focusedWindow={focusedWindow}
          handleFocus={handleFocus}
          toggleDesktopAboutOpen={toggleDesktopAboutOpen}
        />
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
          width={width}
          height={height}
          focusedWindow={focusedWindow}
          handleFocus={handleFocus}
          isSkillsExpanded={isSkillsExpanded}
          setSkillsMinimized={setSkillsMinimized}
          toggleSkillsOpen={toggleSkillsOpen}
          toggleSkillsExpanded={toggleSkillsExpanded}
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
