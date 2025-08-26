import React from "react";
import useScreenSize from "../../utils/useScreenSize";
import DesktopTopBar from "../topbar/DesktopTopBar";
import BodyContent from "../BodyContent";
import Menu from "../dock/Menu";

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
      <Menu />
    </div>
  );
};

export default DesktopLayout;
