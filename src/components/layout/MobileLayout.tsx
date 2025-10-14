import React from "react";
import useScreenSize from "../../utils/useScreenSize";
import { MobileTopBar } from "../topbar";
// import MobileBodyContent from "../MobileBodyContent";
import { MobileDockMenu } from "../dock";
import { MobileBodyContent } from "..";

const MobileLayout: React.FC = () => {
  const { width, height } = useScreenSize();

  return (
    <div className="flex flex-col" style={{ width: `${width}px`, height: `${height}px` }}>
      <MobileTopBar />
      <MobileBodyContent />
      <MobileDockMenu />
    </div>
  );
};

export default MobileLayout;
