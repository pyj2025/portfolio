import React from "react";
import AppWindow from "../../../components/AppWindow";
import {
  NavItmLabel,
  NavSectionLabel,
  WindowBody,
  WindowBodyContent,
  WindowBodyNavbar,
  WindowBodyNavItm,
} from "../../../GlobalStyle";
import { getIcon, getNavIcon } from "../../../components/getIcon";
import {
  useCalculatorWindow,
  useTerminalWindow,
  useSettingsWindow,
} from "../../../utils/appRegistry";

type UtilApp = {
  label: string;
  icon: string;
  onOpen: () => void;
};

const UtilWindow: React.FC = () => {
  const openCalculator = useCalculatorWindow(state => state.open);
  const openTerminal = useTerminalWindow(state => state.open);
  const openSettings = useSettingsWindow(state => state.open);

  const apps: UtilApp[] = [
    { label: "Calculator", icon: "Calculator", onOpen: openCalculator },
    { label: "Terminal", icon: "Terminal", onOpen: openTerminal },
    { label: "Settings", icon: "Settings", onOpen: openSettings },
  ];

  return (
    <AppWindow
      id="Utils"
      defaultSize={{ width: 500, height: 320 }}
      defaultPosition={{ x: 200, y: 90 }}
      minWidth={420}
      minHeight={280}
    >
      <WindowBody className="h-full">
        <WindowBodyNavbar>
          <NavSectionLabel>Favorites</NavSectionLabel>
          <WindowBodyNavItm focus first>
            {getNavIcon("Folder", true)}
            <NavItmLabel>Utils</NavItmLabel>
          </WindowBodyNavItm>
        </WindowBodyNavbar>
        <WindowBodyContent>
          <div className="flex flex-row flex-wrap gap-2.5 m-2.5">
            {apps.map(app => (
              <button
                key={app.label}
                aria-label={app.label}
                onClick={e => {
                  e.stopPropagation();
                  app.onOpen();
                }}
                className="group flex flex-col items-center w-16 cursor-pointer select-none bg-transparent"
              >
                <div className="flex items-center justify-center rounded-lg p-1 transition-colors group-hover:bg-[var(--hover-overlay)]">
                  {getIcon(app.icon, 48)}
                </div>
                <div className="mt-1 max-w-full px-1.5 py-px rounded text-xs leading-tight text-center text-[color:var(--wc-text)] transition-colors group-hover:bg-[var(--hover-overlay-strong)]">
                  {app.label}
                </div>
              </button>
            ))}
          </div>
        </WindowBodyContent>
      </WindowBody>
    </AppWindow>
  );
};

export default UtilWindow;
