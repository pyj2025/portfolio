import React from "react";
import AppWindow from "../../../components/AppWindow";
import { ViewMode } from "../../../types";
import {
  NavItmLabel,
  NavSectionLabel,
  WindowBody,
  WindowBodyContent,
  WindowBodyNavbar,
  WindowBodyNavItm,
} from "../../../components/WindowChrome";
import { getIcon, getNavIcon } from "../../../components/getIcon";
import {
  FinderGrid,
  FinderGridItem,
  FinderList,
  FinderListRow,
} from "../../../components/FinderItems";
import {
  useCalculatorWindow,
  useTerminalWindow,
  useSettingsWindow,
  useCalendarWindow,
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
  const openCalendar = useCalendarWindow(state => state.open);
  const [view, setView] = React.useState<ViewMode>("icon");

  const apps: UtilApp[] = [
    { label: "Calculator", icon: "Calculator", onOpen: openCalculator },
    { label: "Terminal", icon: "Terminal", onOpen: openTerminal },
    { label: "Settings", icon: "Settings", onOpen: openSettings },
    { label: "Calendar", icon: "Calendar", onOpen: openCalendar },
  ];

  const openApp = (app: UtilApp) => (e: React.MouseEvent) => {
    e.stopPropagation();
    app.onOpen();
  };

  return (
    <AppWindow
      id="Utils"
      defaultSize={{ width: 500, height: 320 }}
      defaultPosition={{ x: 200, y: 90 }}
      minWidth={420}
      minHeight={280}
      // Utils is a single folder view with no sub-navigation, so back/forward
      // stay disabled — matching a fresh Finder folder window.
      nav={{ onBack: () => {}, onForward: () => {}, canBack: false, canForward: false }}
      view={view}
      onViewChange={setView}
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
          {view === "list" ? (
            <FinderList>
              {apps.map(app => (
                <FinderListRow
                  key={app.label}
                  label={app.label}
                  icon={getIcon(app.icon, 22)}
                  onClick={openApp(app)}
                />
              ))}
            </FinderList>
          ) : (
            <FinderGrid>
              {apps.map(app => (
                <FinderGridItem
                  key={app.label}
                  label={app.label}
                  icon={getIcon(app.icon, 48)}
                  onClick={openApp(app)}
                />
              ))}
            </FinderGrid>
          )}
        </WindowBodyContent>
      </WindowBody>
    </AppWindow>
  );
};

export default UtilWindow;
