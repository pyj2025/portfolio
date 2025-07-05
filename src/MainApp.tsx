import React from "react";
import { isMobile, isTablet } from "react-device-detect";
import useScreenSize, { TABLET_MAX_WIDTH } from "./utils/useScreenSize";
import DesktopLayout from "./components/layout/DesktopLayout";
import MobileLayout from "./components/layout/MobileLayout";

const MainApp: React.FC = () => {
  const { width, height } = useScreenSize();

  if (isMobile || isTablet || width < TABLET_MAX_WIDTH) {
    return <MobileLayout width={width} height={height} />;
  } else {
    return <DesktopLayout width={width} height={height} />;
  }
};

export default MainApp;
