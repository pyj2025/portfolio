import React from "react";
import { isMobile, isTablet } from "react-device-detect";
import useScreenSize, { TABLET_MAX_WIDTH } from "./utils/useScreenSize";
import DesktopLayout from "./components/layout/DesktopLayout";
import MobileLayout from "./components/layout/MobileLayout";

const MainApp: React.FC = () => {
  const { width } = useScreenSize();

  const isMobileDevice = React.useMemo(
    () => isMobile || isTablet || width < TABLET_MAX_WIDTH,
    [width, isMobile, isTablet],
  );

  if (isMobileDevice) {
    return <MobileLayout />;
  } else {
    return <DesktopLayout />;
  }
};

export default MainApp;
