import * as React from "react";
import { FocusedWindowType } from "../../types";

export type WindowsContextValue = {
  focusedWindow: FocusedWindowType;
  isWelcomeWindowOpen: boolean;
  isAboutOpen: boolean;
  isAboutMinimized: boolean;
  isAboutExpanded: boolean;
  isSkillsOpen: boolean;
  isSkillsMinimized: boolean;
  isSkillsExpanded: boolean;
  isProjectsOpen: boolean;
  isProjectsMinimized: boolean;
  isProjectsExpanded: boolean;
  isDesktopAboutOpen: boolean;
  closeWelcomeWindow: () => void;
  toggleAboutOpen: () => void;
  openAbout: () => void;
  closeAbout: () => void;
  setAboutMinimized: (flag: boolean) => void;
  toggleAboutExpanded: () => void;
  toggleSkillsOpen: () => void;
  openSkills: () => void;
  closeSkills: () => void;
  setSkillsMinimized: (flag: boolean) => void;
  toggleSkillsExpanded: () => void;
  toggleProjectsOpen: () => void;
  openProjects: () => void;
  closeProjects: () => void;
  setProjectsMinimized: (flag: boolean) => void;
  toggleProjectsExpanded: () => void;
  setFocusedWindow: (type: FocusedWindowType) => void;
  toggleDesktopAboutOpen: () => void;
};

export const WindowsContext = React.createContext<
  WindowsContextValue | undefined
>(undefined);

export function useWindows() {
  const context = React.useContext(WindowsContext);
  if (context === undefined) {
    throw new Error("useWindows must be used within a WindowsProvider");
  }
  return context;
}
