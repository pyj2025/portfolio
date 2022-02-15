import * as React from "react";
import useScreenSize, { MOBILE_MAX_WIDTH } from "../useScreenSize";
import { WindowsContext } from "./context";

export const WindowsProvider: React.FC = ({ children }) => {
  const { width, height } = useScreenSize();

  const [focusedWindow, setFocusedWindow] = React.useState("Welcome");

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

  React.useEffect(() => {
    if (width < MOBILE_MAX_WIDTH) {
      if (isDesktopAboutOpen) setDesktopAboutOpen(false);
    }
  }, [width, height, isDesktopAboutOpen]);

  const closeWelcomeWindow = () => {
    setWelcomeWindowOpen(false);
    setFocusedWindow("");
  };

  const toggleDesktopAboutOpen = () => {
    setDesktopAboutOpen((state) => !state);

    if (!isDesktopAboutOpen) {
      setFocusedWindow("DesktopAbout");
    } else {
      setFocusedWindow("");
    }
  };

  const toggleAboutOpen = () => {
    setAboutOpen((state) => !state);
    if (!isAboutOpen) {
      setAboutMinimized(false);
      setFocusedWindow("About");
    } else {
      setFocusedWindow("");
    }
  };

  const closeAbout = () => {
    setAboutOpen(false);
    setFocusedWindow("");
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
      setFocusedWindow("");
    }
  };

  const closeSkills = () => {
    setSkillsOpen(false);
    setFocusedWindow("");
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
      setFocusedWindow("");
    }
  };

  const closeProjects = () => {
    setProjectsOpen(false);
    setFocusedWindow("");
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
        closeAbout,
        setAboutMinimized,
        toggleAboutExpanded,
        toggleSkillsOpen,
        closeSkills,
        setSkillsMinimized,
        toggleSkillsExpanded,
        toggleProjectsOpen,
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
