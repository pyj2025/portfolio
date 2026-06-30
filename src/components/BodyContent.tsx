import React from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import { browserName, isBrowser, isMobile } from "react-device-detect";
import {
  WelcomeWindow,
  AboutWindow,
  SkillsWindow,
  ProjectsWindow,
  CalculatorWindow,
  UtilWindow,
  ResumeWindow,
} from "../views/window/desktop";
import useWindowsStore from "../utils/useWindowsStore";
import useAboutStore from "../utils/useAboutStore";
import useSkillsStore from "../utils/useSkillsStore";
import useProjectsStore from "../utils/useProjectsStore";
import useCalculatorStore from "../utils/useCalculatorStore";
import useUtilStore from "../utils/useUtilStore";
import useResumeStore from "../utils/useResumeStore";
import WindowsContent from "./WindowsContent";
import "react-toastify/dist/ReactToastify.css";

const BodyContent: React.FC = () => {
  const isWelcomeWindowOpen = useWindowsStore(state => state.isWelcomeWindowOpen);
  const isAboutOpen = useAboutStore(state => state.isAboutOpen);
  const isSkillsOpen = useSkillsStore(state => state.isSkillsOpen);
  const isProjectsOpen = useProjectsStore(state => state.isProjectsOpen);
  const isCalculatorOpen = useCalculatorStore(state => state.isCalculatorOpen);
  const isUtilOpen = useUtilStore(state => state.isUtilOpen);
  const isResumeOpen = useResumeStore(state => state.isResumeOpen);

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

  const renderContent = () => {
    const windows = [
      { Component: WelcomeWindow, isOpen: isWelcomeWindowOpen },
      { Component: AboutWindow, isOpen: isAboutOpen },
      { Component: SkillsWindow, isOpen: isSkillsOpen },
      { Component: ProjectsWindow, isOpen: isProjectsOpen },
      { Component: UtilWindow, isOpen: isUtilOpen },
      { Component: CalculatorWindow, isOpen: isCalculatorOpen },
      { Component: ResumeWindow, isOpen: isResumeOpen },
    ];

    return <WindowsContent windows={windows} />;
  };

  return (
    <div className="w-full h-[calc(100%-50px)] bg-transparent text-white">
      <ToastContainer
        position="top-right"
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
      {renderContent()}
    </div>
  );
};

export default BodyContent;
