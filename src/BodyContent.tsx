import React from "react";
import styled from "styled-components";
import { DraggableData } from "react-rnd";

import ProjectsWindow from "./views/window/ProjectsWindow";
import AboutWindow from "./views/window/AboutWindow";
import TopbarAboutWindow from "./views/window/TopbarAboutWindow";
import WelcomeWindow from "./views/window/WelcomeWindow";
import SkillsWindow from "./views/window/SkillsWindow";

const Container = styled.div`
  background-color: #3c3c3c;
  color: white;
`;

export type BodyContentProps = {
  width: number;
  height: number;
  focusedWindow: string;
  isWelcomeWindowOpen: boolean;
  isAboutOpen: boolean;
  isAboutExpanded: boolean;
  isSkillsOpen: boolean;
  isProjectsExpanded: boolean;
  isProjectsOpen: boolean;
  isSkillsExpanded: boolean;
  isDesktopAboutOpen: boolean;
  closeWelcomeWindow: (flag: boolean) => void;
  toggleAboutOpen: () => void;
  setAboutMinimized: (flag: boolean) => void;
  toggleAboutExpanded: () => void;
  toggleSkillsOpen: () => void;
  setSkillsMinimized: (flag: boolean) => void;
  toggleSkillsExpanded: () => void;
  toggleProjectsOpen: () => void;
  setProjectsMinimized: (flag: boolean) => void;
  toggleProjectsExpanded: () => void;
  setFocusedWindow: (name: string) => void;
  toggleDesktopAboutOpen: () => void;
};

const BodyContent: React.FC<BodyContentProps> = ({
  width,
  height,
  focusedWindow,
  isWelcomeWindowOpen,
  isAboutOpen,
  isAboutExpanded,
  isSkillsOpen,
  isSkillsExpanded,
  isProjectsOpen,
  isProjectsExpanded,
  isDesktopAboutOpen,
  closeWelcomeWindow,
  toggleAboutOpen,
  setAboutMinimized,
  toggleAboutExpanded,
  toggleSkillsOpen,
  setSkillsMinimized,
  toggleSkillsExpanded,
  toggleProjectsOpen,
  setProjectsMinimized,
  toggleProjectsExpanded,
  setFocusedWindow,
  toggleDesktopAboutOpen,
}) => {
  const windowRef = React.useRef({
    newZIndex: "10",
    prevNode: null as unknown as HTMLElement,
    prevZIndex: null as unknown as string,
  });

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
      {isWelcomeWindowOpen ? (
        <WelcomeWindow
          width={width}
          height={height}
          focusedWindow={focusedWindow}
          handleFocus={handleFocus}
          close={closeWelcomeWindow}
        />
      ) : null}

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
          width={width}
          height={height}
          focusedWindow={focusedWindow}
          handleFocus={handleFocus}
          isProjectsExpanded={isProjectsExpanded}
          setProjectsMinimized={setProjectsMinimized}
          toggleProjectsOpen={toggleProjectsOpen}
          toggleProjectsExpanded={toggleProjectsExpanded}
        />
      ) : null}
    </Container>
  );
};

export default BodyContent;
