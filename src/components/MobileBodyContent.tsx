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
import {
  CalculatorWindow,
  UtilWindow,
  TerminalWindow,
  SettingsWindow,
  CalendarWindow,
  WeatherWindow,
} from "../views/window/desktop";
import useWindowsStore from "../utils/useWindowsStore";
import {
  useAboutWindow,
  useSkillsWindow,
  useProjectsWindow,
  useCalculatorWindow,
  useUtilsWindow,
  useTerminalWindow,
  useSettingsWindow,
  useCalendarWindow,
  useWeatherWindow,
} from "../utils/appRegistry";
import "react-toastify/dist/ReactToastify.css";

const MobileBodyContent: React.FC = () => {
  const isWelcomeWindowOpen = useWindowsStore(state => state.isWelcomeWindowOpen);

  const isAboutOpen = useAboutWindow(state => state.isOpen);

  const isSkillsOpen = useSkillsWindow(state => state.isOpen);

  const isProjectsOpen = useProjectsWindow(state => state.isOpen);

  const isCalculatorOpen = useCalculatorWindow(state => state.isOpen);

  const isUtilOpen = useUtilsWindow(state => state.isOpen);

  const isTerminalOpen = useTerminalWindow(state => state.isOpen);

  const isSettingsOpen = useSettingsWindow(state => state.isOpen);

  const isCalendarOpen = useCalendarWindow(state => state.isOpen);

  const isWeatherOpen = useWeatherWindow(state => state.isOpen);

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
      { Component: CalculatorWindow, isOpen: isCalculatorOpen },
      { Component: UtilWindow, isOpen: isUtilOpen },
      { Component: TerminalWindow, isOpen: isTerminalOpen },
      { Component: SettingsWindow, isOpen: isSettingsOpen },
      { Component: CalendarWindow, isOpen: isCalendarOpen },
      { Component: WeatherWindow, isOpen: isWeatherOpen },
    ];

    return <WindowsContent windows={windows} />;
  };

  return (
    <div className="w-full h-[calc(100vh-32px-80px)] bg-transparent text-white">
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
