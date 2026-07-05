import React from "react";
import AppWindow from "../../../components/AppWindow";
import Terminal from "../../../components/terminal/Terminal";

const TerminalWindow: React.FC = () => (
  <AppWindow
    id="Terminal"
    defaultSize={{ width: 600, height: 400 }}
    defaultPosition={{ x: 140, y: 120 }}
    minWidth={420}
    minHeight={280}
  >
    <Terminal />
  </AppWindow>
);

export default TerminalWindow;
