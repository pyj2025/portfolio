import React from "react";
import styled from "styled-components";
import { DraggableData } from "react-rnd";

import ProjectsWindow from "./window/ProjectsWindow";
import AboutWindow from "./window/AboutWindow";
import WelcomeWindow from "./window/WelcomeWindow";
import SkillsWindow from "./window/SkillsWindow";
import { useWindows } from "../utils/context/context";
import { Slide, toast, ToastContainer } from "react-toastify";
import {
  browserName,
  isBrowser,
  isMobile,
  isTablet,
} from "react-device-detect";
import "react-toastify/dist/ReactToastify.css";
import TopbarAboutWindow from "./window/desktop/TopbarAboutWindow";
import { FocusedWindowType } from "../types";
import useScreenSize, {
  MOBILE_MAX_WIDTH,
  TABLET_MAX_WIDTH,
} from "../utils/useScreenSize";
import MobileApp from "../MobileApp";
import MobileWelcomeWindow from "./window/MobileWelcomeWindow";

const Container = styled.div`
  background-color: transparent;
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
  const { width } = useScreenSize();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [mobileWindow, setMobileWindow] = React.useState(false);

  const isWelcomeRendered =
    window.localStorage.getItem("welcomeWindowRendered") === "true";

  const windowRef = React.useRef({
    newZIndex: "10",
    prevNode: null as unknown as HTMLElement,
    prevZIndex: null as unknown as string,
  });

  React.useEffect(() => {
    const message =
      "You've accessed via " +
      (isBrowser ? "desktop " : isMobile ? "mobile " : "tablet ") +
      browserName.toLowerCase();
    toast(message, {
      transition: Slide,
      type: "info",
    });
  }, []);

  React.useEffect(() => {
    if (isMobile || isTablet || width <= TABLET_MAX_WIDTH) {
      if (width <= MOBILE_MAX_WIDTH) {
        setMobileWindow(true);
      } else {
        setMobileWindow(false);
      }
      setMobileMenuOpen(true);
    } else {
      setMobileWindow(false);
      setMobileMenuOpen(false);
    }
  }, [width]);

  const handleFocus = (_e: any, data: DraggableData) => {
    const ref = windowRef.current;

    if (ref.prevNode) {
      ref.prevNode.style.zIndex = ref.prevZIndex;
    }

    ref.prevNode = data.node;
    ref.prevZIndex = ref.prevNode.style.zIndex;
    ref.prevNode.style.zIndex = ref.newZIndex;
    setFocusedWindow(data.node.id as FocusedWindowType);
  };

  const welcomeWindowCheck = isWelcomeWindowOpen && !isWelcomeRendered;

  return (
    <Container>
      <ToastContainer
        position={isMobile ? "top-center" : "top-right"}
        autoClose={5000}
        newestOnTop
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
        draggablePercent={60}
      />
      {mobileMenuOpen ? <MobileApp /> : null}
      {welcomeWindowCheck && (isMobile || mobileWindow) ? (
        <MobileWelcomeWindow handleFocus={handleFocus} />
      ) : null}
      {welcomeWindowCheck && !isMobile && !mobileWindow ? (
        <WelcomeWindow handleFocus={handleFocus} />
      ) : null}

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
