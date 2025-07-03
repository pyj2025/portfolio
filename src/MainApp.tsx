import React from "react";
import { isMobile, isTablet } from "react-device-detect";
import BodyContent from "./components/BodyContent";
import DesktopTopBar from "./components/topbar/DesktopTopBar";
import Menu from "./components/dock/Menu";
import MobileTopBar from "./components/topbar/MobileTopBar";
import useScreenSize, { TABLET_MAX_WIDTH } from "./utils/useScreenSize";
import MobileMenu from "./components/dock/MobileMenu";
import MobileBodyContent from "./components/MobileBodyContent";

type ScreenProps = {
  width: number;
  height: number;
};

const Desktop: React.FC<ScreenProps> = ({ width, height }) => {
  return (
    <div className="flex flex-col" style={{ width: `${width}px`, height: `${height}px` }}>
      <DesktopTopBar />
      <BodyContent />
      <Menu />
    </div>
  );
};

const Mobile: React.FC<ScreenProps> = ({ width, height }) => {
  return (
    <div className="flex flex-col" style={{ width: `${width}px`, height: `${height}px` }}>
      <MobileTopBar />
      <MobileBodyContent />
      <MobileMenu />
    </div>
  );
};

const MainApp: React.FC = () => {
  const { width, height } = useScreenSize();

  if (isMobile || isTablet || width < TABLET_MAX_WIDTH) {
    return <Mobile width={width} height={height} />;
  } else {
    return <Desktop width={width} height={height} />;
  }
};

export default MainApp;
