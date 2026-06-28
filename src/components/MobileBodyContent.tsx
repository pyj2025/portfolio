import React from "react";

import { Slide, toast, ToastContainer } from "react-toastify";
import { browserName, isBrowser, isMobile } from "react-device-detect";
import useScreenSize, { MOBILE_MAX_WIDTH } from "../utils/useScreenSize";
import MobileAppMenu from "./MobileAppMenu";
import WindowsContent from "./WindowsContent";
import MobileWelcomeWindow from "../views/window/mobile/MobileWelcomeWindow";
import MobileAboutWindow from "../views/window/mobile/MobileAboutWindow";
import MobileSkillsWindow from "../views/window/mobile/MobileSkillsWindow";
import MobileProjectsWindow from "../views/window/mobile/MobileProjectsWindow";
import MobileCalculatorWindow from "../views/window/mobile/MobileCalculatorWindow";
import useWindowsStore from "../utils/useWindowsStore";
import useAboutStore from "../utils/useAboutStore";
import useSkillsStore from "../utils/useSkillsStore";
import useProjectsStore from "../utils/useProjectsStore";
import useCalculatorStore from "../utils/useCalculatorStore";
import "react-toastify/dist/ReactToastify.css";

const MobileBodyContent: React.FC = () => {
  const isWelcomeWindowOpen = useWindowsStore(state => state.isWelcomeWindowOpen);

  const isAboutOpen = useAboutStore(state => state.isAboutOpen);

  const isSkillsOpen = useSkillsStore(state => state.isSkillsOpen);

  const isProjectsOpen = useProjectsStore(state => state.isProjectsOpen);

  const isCalculatorOpen = useCalculatorStore(state => state.isCalculatorOpen);

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
      { Component: MobileCalculatorWindow, isOpen: isCalculatorOpen },
    ];

    return <WindowsContent windows={windows} />;
  };

  return (
    <div className="w-full h-[calc(100vh-25px-80px)] bg-transparent text-white">
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
    </div>
  );
};

export default MobileBodyContent;
