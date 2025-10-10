import React from "react";
import { isMobile, isTablet } from "react-device-detect";
import useScreenSize, { TABLET_MAX_WIDTH } from "./utils/useScreenSize";
import { DesktopLayout, MobileLayout } from "./components/layout";

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
