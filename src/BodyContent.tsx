import React from "react";
import styled from "styled-components";
import { DraggableData } from "react-rnd";

import ProjectsWindow from "./views/window/ProjectsWindow";
import AboutWindow from "./views/window/AboutWindow";
import TopbarAboutWindow from "./views/window/desktop/TopbarAboutWindow";
import WelcomeWindow from "./views/window/WelcomeWindow";
import SkillsWindow from "./views/window/SkillsWindow";
import { useWindows } from "./utils/context/context";

const Container = styled.div`
  background-color: #3c3c3c;
  color: white;
`;

export type WindowProps = {
  handleFocus: (_e: any, data: DraggableData) => void;
};

const BodyContent: React.FC = () => {
  const {
    isWelcomeWindowOpen,
    isDesktopAboutOpen,
    isAboutOpen,
    isSkillsOpen,
    isProjectsOpen,
    setFocusedWindow,
  } = useWindows();

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
      {isWelcomeWindowOpen ? <WelcomeWindow handleFocus={handleFocus} /> : null}
      {isDesktopAboutOpen ? (
        <TopbarAboutWindow handleFocus={handleFocus} />
      ) : null}
      {isAboutOpen ? <AboutWindow handleFocus={handleFocus} /> : null}
      {isSkillsOpen ? <SkillsWindow handleFocus={handleFocus} /> : null}
      {isProjectsOpen ? <ProjectsWindow handleFocus={handleFocus} /> : null}
    </Container>
  );
};

export default BodyContent;
