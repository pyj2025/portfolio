import React from "react";
import useScreenSize from "../../utils/useScreenSize";
import { MobileTopBar } from "../topbar";
import MobileBodyContent from "../MobileBodyContent";
import MobileMenu from "../dock/MobileMenu";

const MobileLayout: React.FC = () => {
  const { width, height } = useScreenSize();

  return (
    <div className="flex flex-col" style={{ width: `${width}px`, height: `${height}px` }}>
      <MobileTopBar />
      <MobileBodyContent />
      <MobileMenu />
    </div>
  );
};

export default MobileLayout;
