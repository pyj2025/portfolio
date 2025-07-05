import React from "react";
import { ScreenProps } from "../../types/layout";
import DesktopTopBar from "../topbar/DesktopTopBar";
import BodyContent from "../BodyContent";
import Menu from "../dock/Menu";

const DesktopLayout: React.FC<ScreenProps> = ({ width, height }) => (
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

export default DesktopLayout;
