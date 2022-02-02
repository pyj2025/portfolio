import React from "react";

import {
  isMobile,
  browserName,
  isBrowser,
  isTablet,
} from "react-device-detect";
import { Slide, toast, ToastContainer } from "react-toastify";
import BodyContent from "../BodyContent";
import DesktopTopBar from "../DesktopTopBar";
import MenuContainer from "../MenuContainer";
import MobileTopBar from "../MobileTopBar";
import "react-toastify/dist/ReactToastify.css";
import useScreenSize, {
  MOBILE_MAX_WIDTH,
  TABLET_MAX_WIDTH,
} from "../utils/useScreenSize";
import { WindowsProvider } from "../utils/context/WindowsProvider";

const MainApp: React.FC = () => {
  const { width, height } = useScreenSize();

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

  const handleEmailClick = () => {
    window.open("mailto:pyj2025@gmail.com");
  };

  return (
    <WindowsProvider>
      {isMobile || isTablet || width < TABLET_MAX_WIDTH ? (
        <MobileTopBar />
      ) : (
        <DesktopTopBar />
      )}
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
      <BodyContent />
      <MenuContainer emailClick={handleEmailClick} />
    </WindowsProvider>
  );
};

export default MainApp;
