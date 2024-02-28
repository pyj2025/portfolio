import { FocusedWindowType } from "../types";

export type WindowsState = {
    focusedWindow: FocusedWindowType;
    isWelcomeWindowOpen: boolean;
    setFocusedWindow: (focusedWindow: FocusedWindowType) => void;
    toggleWelcomeWindowOpen: () => void;
    closeWelcomeWindow: () => void;
    clearFocusWindows: () => void;
};

export type AboutState = {
    isAboutOpen: boolean;
    isAboutMinimized: boolean;
    isAboutExpanded: boolean;
    toggleAboutOpen: () => void;
    openAbout: () => void;
    closeAbout: () => void;
    toggleAboutExpanded: () => void;
    setAboutExpanded: (flag: boolean) => void;
    toggleAboutMinimized: () => void;
    setAboutMinimized: (flag: boolean) => void;
};

export type SkillsState = {
    isSkillsOpen: boolean;
    isSkillsMinimized: boolean;
    isSkillsExpanded: boolean;
    toggleSkillsOpen: () => void;
    openSkills: () => void;
    closeSkills: () => void;
    toggleSkillsExpanded: () => void;
    setSkillsExpanded: (flag: boolean) => void;
    toggleSkillsMinimized: () => void;
    setSkillsMinimized: (flag: boolean) => void;
};

export type ProjectsState = {
    isProjectsOpen: boolean;
    isProjectsMinimized: boolean;
    isProjectsExpanded: boolean;
    toggleProjectsOpen: () => void;
    openProjects: () => void;
    closeProjects: () => void;
    toggleProjectsExpanded: () => void;
    setProjectsExpanded: (flag: boolean) => void;
    toggleAboutMinimized: () => void;
    setProjectsMinimized: (flag: boolean) => void;
};