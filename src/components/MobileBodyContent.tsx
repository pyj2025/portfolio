import React from "react";
import styled from "styled-components";

import { Slide, toast, ToastContainer } from "react-toastify";
import { browserName, isBrowser, isMobile } from "react-device-detect";
import useScreenSize, { MOBILE_MAX_WIDTH } from "../utils/useScreenSize";
import { MobileAppMenu, WindowsContent } from ".";
import MobileWelcomeWindow from "../views/window/mobile/MobileWelcomeWindow";
import MobileAboutWindow from "../views/window/mobile/MobileAboutWindow";
import MobileSkillsWindow from "../views/window/mobile/MobileSkillsWindow";
import MobileProjectsWindow from "../views/window/mobile/MobileProjectsWindow";
import useWindowsStore from "../utils/useWindowsStore";
import useAboutStore from "../utils/useAboutStore";
import useSkillsStore from "../utils/useSkillsStore";
import useProjectsStore from "../utils/useProjectsStore";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 25px - 80px);
  background-color: transparent;
  color: white;
`;

const MobileBodyContent: React.FC = () => {
  const isWelcomeWindowOpen = useWindowsStore(state => state.isWelcomeWindowOpen);

  const isAboutOpen = useAboutStore(state => state.isAboutOpen);

  const isSkillsOpen = useSkillsStore(state => state.isSkillsOpen);

  const isProjectsOpen = useProjectsStore(state => state.isProjectsOpen);

  const { width } = useScreenSize();
  const [checkMobile, setCheckMobile] = React.useState(false);

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
    if (isMobile || width <= MOBILE_MAX_WIDTH) {
      setCheckMobile(true);
    }
  }, [width]);

  const renderContent = () => {
    const windows = [
      { Component: MobileWelcomeWindow, isOpen: isWelcomeWindowOpen },
      { Component: MobileAboutWindow, isOpen: isAboutOpen },
      { Component: MobileSkillsWindow, isOpen: isSkillsOpen },
      { Component: MobileProjectsWindow, isOpen: isProjectsOpen },
    ];

    return <WindowsContent windows={windows} />;
  };

  return (
    <Container>
      <ToastContainer
        position={checkMobile ? "top-center" : "top-right"}
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
      <MobileAppMenu />
      {renderContent()}
    </Container>
  );
};

export default MobileBodyContent;
