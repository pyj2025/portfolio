import { create } from 'zustand';
import { ProjectsState } from './types';
import useWindowsStore from './useWindowsStore';

const useProjectsStore = create<ProjectsState>(set => ({
    isProjectsOpen: false,
    isProjectsMinimized: false,
    isProjectsExpanded: false,
    toggleProjectsOpen: () => set((state: { isProjectsOpen: boolean }) => {
        if (!state.isProjectsOpen) {
            useWindowsStore.getState().setFocusedWindow("Projects")
        } else {
            useWindowsStore.getState().setFocusedWindow("None")
        }        
        return { 
            isProjectsOpen: !state.isProjectsOpen, 
        }
    }),
    openProjects: () => set(() => {
        useWindowsStore.getState().setFocusedWindow("Projects")
        return { 
            isProjectsOpen: true, 
            isProjectsMinimized: false 
        }
    }),
    closeProjects: () => set(() => {
        useWindowsStore.getState().setFocusedWindow("None")
        return { 
            isProjectsOpen: false, 
            isProjectsMinimized: false 
        }
    }),
    toggleProjectsExpanded: () => set((state: { isProjectsExpanded: boolean; }) => ({ isProjectsExpanded: !state.isProjectsExpanded })),
    setProjectsExpanded: (flag: boolean) => set(() => ({ isProjectsExpanded: flag })),
    toggleAboutMinimized: () => set((state: { isProjectsMinimized: boolean; }) => ({ isProjectsMinimized: !state.isProjectsMinimized })),
    setProjectsMinimized: (flag: boolean) => set(() => ({ isProjectsMinimized: flag })),
}))

export default useProjectsStore;