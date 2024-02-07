import { create } from 'zustand';
import { FocusedWindowType } from '../types';

type WindowsState = {
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
    setFocusedWindow: (focusedWindow: FocusedWindowType) => void;
    toggleWelcomeWindowOpen: () => void;
    closeWelcomeWindow: () => void;
    toggleAboutOpen: () => void;
    openAbout: () => void;
    closeAbout: () => void;
    toggleAboutExpanded: () => void;
    // toggleAboutMinimized: () => void;
    toggleSkillsOpen: () => void;
    openSkills: () => void;
    closeSkills: () => void;
    toggleSkillsExpanded: () => void;
    // toggleSkillsMinimized: () => void;
    toggleProjectsOpen: () => void;
    openProjects: () => void;
    closeProjects: () => void;
    toggleProjectsExpanded: () => void;
    // toggleProjectsMinimized: () => void;
    unfocusWindows: () => void;
};

const useWindowsStore = create<WindowsState>(set => ({
    focusedWindow: 'Welcome',
    isWelcomeWindowOpen: true,
    isAboutOpen: false,
    isAboutMinimized: false,
    isAboutExpanded: false,
    isSkillsOpen: false,
    isSkillsMinimized: false,
    isSkillsExpanded: false,
    isProjectsOpen: false,
    isProjectsMinimized: false,
    isProjectsExpanded: false,
    setFocusedWindow: (focusedWindow: FocusedWindowType) => set(() => ({ focusedWindow })),
    toggleWelcomeWindowOpen: () => set((state: { isWelcomeWindowOpen: boolean; }) => ({ isWelcomeWindowOpen: !state.isWelcomeWindowOpen })),
    closeWelcomeWindow: () => set((state: { isWelcomeWindowOpen: boolean; focusedWindow: FocusedWindowType  }) => ({ isWelcomeWindowOpen: false, focusedWindow: 'None' })),
    toggleAboutOpen: () => set((state: { isAboutOpen: boolean; focusedWindow: FocusedWindowType }) => ({ isAboutOpen: !state.isAboutOpen, focusedWindow: !state.isAboutOpen ? "About": "None" })),
    openAbout: () => set(() => ({ isAboutOpen: true, isAboutMinimized: false, focusedWindow: "About" })),
    closeAbout: () => set(() => ({ isAboutOpen: false, isAboutMinimized: false, focusedWindow: "None" })),
    toggleAboutExpanded: () => set((state: { isAboutExpanded: boolean; }) => ({ isAboutExpanded: !state.isAboutExpanded })),
    // toggleAboutMinimized: () => set((state: { isAboutMinimized: boolean; }) => ({ isAboutMinimized: !state.isAboutMinimized })),
    toggleSkillsOpen: () => set((state: { isSkillsOpen: boolean; focusedWindow: FocusedWindowType }) => ({ isSkillsOpen: !state.isSkillsOpen, focusedWindow: !state.isSkillsOpen ? "Skills": "None" })),
    openSkills: () => set(() => ({ isSkillsOpen: true, isSkillsMinimized: false, focusedWindow: "Skills" })),
    closeSkills: () => set(() => ({ isSkillsOpen: false, isSkillsMinimized: false, focusedWindow: "None" })),
    toggleSkillsExpanded: () => set((state: { isSkillsExpanded: boolean; }) => ({ isSkillsExpanded: !state.isSkillsExpanded })),
    // toggleSkillsMinimized: () => set((state: { isSkillsMinimized: boolean; }) => ({ isSkillsMinimized: !state.isSkillsMinimized })),
    toggleProjectsOpen: () => set((state: { isProjectsOpen: boolean; focusedWindow: FocusedWindowType }) => ({ isProjectsOpen: !state.isProjectsOpen, focusedWindow: !state.isProjectsOpen ? "Projects": "None" })),
    openProjects: () => set(() => ({ isProjectsOpen: true, isProjectsMinimized: false, focusedWindow: "Projects" })),
    closeProjects: () => set(() => ({ isProjectsOpen: false, isProjectsMinimized: false, focusedWindow: "None" })),
    toggleProjectsExpanded: () => set((state: { isProjectsExpanded: boolean; }) => ({ isProjectsExpanded: !state.isProjectsExpanded })),
    // toggleProjectsMinimized: () => set((state: { isProjectsMinimized: boolean; }) => ({ isProjectsMinimized: !state.isProjectsMinimized })),
    unfocusWindows: () => set(() => ({ focusedWindow: "None" })),
}))

export default useWindowsStore;