import React from "react";
import useScreenSize from "../../utils/useScreenSize";
import { DesktopTopBar } from "../topbar";
import BodyContent from "../BodyContent";
import { DockMenu } from "../dock";

const DesktopLayout: React.FC = () => {
  const { width, height } = useScreenSize();

  return (
    <div
      className="flex flex-col"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <DesktopTopBar />
      <BodyContent />
      <DockMenu />
    </div>
  );
};

export default DesktopLayout;
