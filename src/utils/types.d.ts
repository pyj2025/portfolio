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

export type UtilState = {
    isUtilOpen: boolean;
    isUtilMinimized: boolean;
    isUtilExpanded: boolean;
    toggleUtilOpen: () => void;
    openUtil: () => void;
    closeUtil: () => void;
    toggleUtilExpanded: () => void;
    setUtilExpanded: (flag: boolean) => void;
    toggleUtilMinimized: () => void;
    setUtilMinimized: (flag: boolean) => void;
};

export type TerminalState = {
    isTerminalOpen: boolean;
    isTerminalMinimized: boolean;
    isTerminalExpanded: boolean;
    toggleTerminalOpen: () => void;
    openTerminal: () => void;
    closeTerminal: () => void;
    toggleTerminalExpanded: () => void;
    setTerminalExpanded: (flag: boolean) => void;
    toggleTerminalMinimized: () => void;
    setTerminalMinimized: (flag: boolean) => void;
};

export type SettingsState = {
    isSettingsOpen: boolean;
    isSettingsMinimized: boolean;
    isSettingsExpanded: boolean;
    toggleSettingsOpen: () => void;
    openSettings: () => void;
    closeSettings: () => void;
    toggleSettingsExpanded: () => void;
    setSettingsExpanded: (flag: boolean) => void;
    toggleSettingsMinimized: () => void;
    setSettingsMinimized: (flag: boolean) => void;
};

export type ResumeState = {
    isResumeOpen: boolean;
    isResumeMinimized: boolean;
    isResumeExpanded: boolean;
    toggleResumeOpen: () => void;
    openResume: () => void;
    closeResume: () => void;
    toggleResumeExpanded: () => void;
    setResumeExpanded: (flag: boolean) => void;
    toggleResumeMinimized: () => void;
    setResumeMinimized: (flag: boolean) => void;
};

export type CalculatorState = {
    isCalculatorOpen: boolean;
    isCalculatorMinimized: boolean;
    isCalculatorExpanded: boolean;
    toggleCalculatorOpen: () => void;
    openCalculator: () => void;
    closeCalculator: () => void;
    toggleCalculatorExpanded: () => void;
    setCalculatorExpanded: (flag: boolean) => void;
    toggleCalculatorMinimized: () => void;
    setCalculatorMinimized: (flag: boolean) => void;
};