import * as React from "react";

export type WindowsContextValue = {
  focusedWindow: string;
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
  setAboutMinimized: (flag: boolean) => void;
  toggleAboutExpanded: () => void;
  toggleSkillsOpen: () => void;
  setSkillsMinimized: (flag: boolean) => void;
  toggleSkillsExpanded: () => void;
  toggleProjectsOpen: () => void;
  setProjectsMinimized: (flag: boolean) => void;
  toggleProjectsExpanded: () => void;
  setFocusedWindow: (name: string) => void;
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
