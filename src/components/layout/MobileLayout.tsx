import React from "react";
import { ScreenProps } from "../../types/layout";
import MobileTopBar from "../topbar/MobileTopBar";
import MobileBodyContent from "../MobileBodyContent";
import MobileMenu from "../dock/MobileMenu";

const MobileLayout: React.FC<ScreenProps> = ({ width, height }) => (
  <div className="flex flex-col" style={{ width: `${width}px`, height: `${height}px` }}>
    <MobileTopBar />
    <MobileBodyContent />
    <MobileMenu />
  </div>
);

export default MobileLayout;
