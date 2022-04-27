import * as React from "react";
import { FocusedWindowType } from "../../types";
import { WindowsContext } from "./context";

export const WindowsProvider: React.FC = ({ children }) => {
  const [focusedWindow, setFocusedWindow] =
    React.useState<FocusedWindowType>("Welcome");

  const [isWelcomeWindowOpen, setWelcomeWindowOpen] = React.useState(true);

  const [isAboutOpen, setAboutOpen] = React.useState(false);
  const [isAboutMinimized, setAboutMinimized] = React.useState(false);
  const [isAboutExpanded, setAboutExpanded] = React.useState(false);

  const [isSkillsOpen, setSkillsOpen] = React.useState(false);
  const [isSkillsMinimized, setSkillsMinimized] = React.useState(false);
  const [isSkillsExpanded, setSkillsExpanded] = React.useState(false);

  const [isProjectsOpen, setProjectsOpen] = React.useState(false);
  const [isProjectsMinimized, setProjectsMinimized] = React.useState(false);
  const [isProjectsExpanded, setProjectsExpanded] = React.useState(false);

  const [isDesktopAboutOpen, setDesktopAboutOpen] = React.useState(false);

  const closeWelcomeWindow = () => {
    setWelcomeWindowOpen(false);
    setFocusedWindow("None");
  };

  const toggleDesktopAboutOpen = () => {
    setDesktopAboutOpen((state) => !state);

    if (!isDesktopAboutOpen) {
      setFocusedWindow("DesktopAbout");
    } else {
      setFocusedWindow("None");
    }
  };

  const toggleAboutOpen = () => {
    setAboutOpen((state) => !state);
    if (!isAboutOpen) {
      setAboutMinimized(false);
      setFocusedWindow("About");
    } else {
      setFocusedWindow("None");
    }
  };

  const openAbout = () => {
    setAboutOpen(true);
    setFocusedWindow("About");
  };

  const closeAbout = () => {
    setAboutOpen(false);
    setFocusedWindow("None");
  };

  const toggleAboutExpanded = () => {
    setAboutExpanded((state) => !state);
  };

  const toggleSkillsOpen = () => {
    setSkillsOpen((state) => !state);

    if (!isSkillsOpen) {
      setSkillsMinimized(false);
      setFocusedWindow("Skills");
    } else {
      setFocusedWindow("None");
    }
  };

  const openSkills = () => {
    setSkillsOpen(true);
    setFocusedWindow("Skills");
  };

  const closeSkills = () => {
    setSkillsOpen(false);
    setFocusedWindow("None");
  };

  const toggleSkillsExpanded = () => {
    setSkillsExpanded((state) => !state);
  };

  const toggleProjectsOpen = () => {
    setProjectsOpen((state) => !state);

    if (!isProjectsOpen) {
      setProjectsMinimized(false);
      setFocusedWindow("Projects");
    } else {
      setFocusedWindow("None");
    }
  };

  const openProjects = () => {
    setProjectsOpen(true);
    setFocusedWindow("Projects");
  };

  const closeProjects = () => {
    setProjectsOpen(false);
    setFocusedWindow("None");
  };

  const toggleProjectsExpanded = () => {
    setProjectsExpanded((state) => !state);
  };

  return (
    <WindowsContext.Provider
      value={{
        focusedWindow,
        isWelcomeWindowOpen,
        isAboutOpen,
        isAboutMinimized,
        isAboutExpanded,
        isSkillsOpen,
        isSkillsMinimized,
        isSkillsExpanded,
        isProjectsOpen,
        isProjectsMinimized,
        isProjectsExpanded,
        isDesktopAboutOpen,
        closeWelcomeWindow,
        toggleAboutOpen,
        openAbout,
        closeAbout,
        setAboutMinimized,
        toggleAboutExpanded,
        toggleSkillsOpen,
        openSkills,
        closeSkills,
        setSkillsMinimized,
        toggleSkillsExpanded,
        toggleProjectsOpen,
        openProjects,
        closeProjects,
        setProjectsMinimized,
        toggleProjectsExpanded,
        setFocusedWindow,
        toggleDesktopAboutOpen,
      }}
    >
      {children}
    </WindowsContext.Provider>
  );
};
