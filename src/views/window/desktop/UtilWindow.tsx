import React from "react";
import AppWindow from "../../../components/AppWindow";
import {
  NavItmLabel,
  NavSectionLabel,
  WindowBody,
  WindowBodyContent,
  WindowBodyNavbar,
  WindowBodyNavItm,
} from "../../../components/WindowChrome";
import { getIcon, getNavIcon } from "../../../components/getIcon";
import { FinderGrid, FinderGridItem } from "../../../components/FinderItems";
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
          <FinderGrid>
            {apps.map(app => (
              <FinderGridItem
                key={app.label}
                label={app.label}
                icon={getIcon(app.icon, 48)}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  app.onOpen();
                }}
              />
            ))}
          </FinderGrid>
        </WindowBodyContent>
      </WindowBody>
    </AppWindow>
  );
};

export default UtilWindow;
