import React from "react";
import useScreenSize from "../../utils/useScreenSize";
import BodyContent from "../BodyContent";
import DesktopIcons from "../DesktopIcons";
import { DesktopTopBar } from "../topbar";
import { DockMenu } from "../dock";

const DesktopLayout: React.FC = () => {
  const { width, height } = useScreenSize();

  return (
    <div
      className="relative flex flex-col"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <DesktopTopBar />
      <DesktopIcons />
      <BodyContent />
      <DockMenu />
    </div>
  );
};

export default DesktopLayout;
