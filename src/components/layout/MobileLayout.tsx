import React from "react";
import useScreenSize from "../../utils/useScreenSize";
import { MobileTopBar } from "../topbar";
import { MobileDockMenu } from "../dock";
import MobileBodyContent from "../MobileBodyContent";
import DesktopIcons from "../DesktopIcons";

const MobileLayout: React.FC = () => {
  const { width, height } = useScreenSize();

  return (
    <div
      className="relative flex flex-col"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <MobileTopBar />
      <DesktopIcons />
      <MobileBodyContent />
      <MobileDockMenu />
    </div>
  );
};

export default MobileLayout;
