import { create } from 'zustand';
import { SkillsState } from './types';
import useWindowsStore from './useWindowsStore';

const useSkillsStore = create<SkillsState>(set => ({
    isSkillsOpen: false,
    isSkillsMinimized: false,
    isSkillsExpanded: false,
    toggleSkillsOpen: () => set((state: { isSkillsOpen: boolean }) => {
        if (!state.isSkillsOpen) {
            useWindowsStore.getState().setFocusedWindow("Skills")
        } else {
            useWindowsStore.getState().setFocusedWindow("None")
        }        
        return { 
            isSkillsOpen: !state.isSkillsOpen, 
        }
    }),
    openSkills: () => set(() => {
        useWindowsStore.getState().setFocusedWindow("Skills")
        return { 
            isSkillsOpen: true, 
            isSkillsMinimized: false 
        }
    }),
    closeSkills: () => set(() => {
        useWindowsStore.getState().setFocusedWindow("None")
        return { 
            isSkillsOpen: false, 
            isSkillsMinimized: false 
        }
    }),
    toggleSkillsExpanded: () => set((state: { isSkillsExpanded: boolean; }) => ({ isSkillsExpanded: !state.isSkillsExpanded })),
    setSkillsExpanded: (flag: boolean) => set(() => ({ isSkillsExpanded: flag })),
    toggleSkillsMinimized: () => set((state: { isSkillsMinimized: boolean; }) => ({ isSkillsMinimized: !state.isSkillsMinimized })),
    setSkillsMinimized: (flag: boolean) => set(() => ({ isSkillsMinimized: flag })),
}))

export default useSkillsStore;