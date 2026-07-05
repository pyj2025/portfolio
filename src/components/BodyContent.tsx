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
  TerminalWindow,
  SettingsWindow,
} from "../views/window/desktop";
import useWindowsStore from "../utils/useWindowsStore";
import {
  useAboutWindow,
  useSkillsWindow,
  useProjectsWindow,
  useCalculatorWindow,
  useUtilsWindow,
  useResumeWindow,
  useTerminalWindow,
  useSettingsWindow,
} from "../utils/appRegistry";
import WindowsContent from "./WindowsContent";
import "react-toastify/dist/ReactToastify.css";

const BodyContent: React.FC = () => {
  const isWelcomeWindowOpen = useWindowsStore(state => state.isWelcomeWindowOpen);
  const isAboutOpen = useAboutWindow(state => state.isOpen);
  const isSkillsOpen = useSkillsWindow(state => state.isOpen);
  const isProjectsOpen = useProjectsWindow(state => state.isOpen);
  const isCalculatorOpen = useCalculatorWindow(state => state.isOpen);
  const isUtilOpen = useUtilsWindow(state => state.isOpen);
  const isResumeOpen = useResumeWindow(state => state.isOpen);
  const isTerminalOpen = useTerminalWindow(state => state.isOpen);
  const isSettingsOpen = useSettingsWindow(state => state.isOpen);

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
      { Component: TerminalWindow, isOpen: isTerminalOpen },
      { Component: SettingsWindow, isOpen: isSettingsOpen },
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
