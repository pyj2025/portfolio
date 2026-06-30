import { create } from 'zustand';
import { ResumeState } from './types';
import useWindowsStore from './useWindowsStore';

const useResumeStore = create<ResumeState>(set => ({
    isResumeOpen: false,
    isResumeMinimized: false,
    isResumeExpanded: false,
    toggleResumeOpen: () => set((state: { isResumeOpen: boolean }) => {
        if (!state.isResumeOpen) {
            useWindowsStore.getState().setFocusedWindow("Resume")
        } else {
            useWindowsStore.getState().setFocusedWindow("None")
        }
        return {
            isResumeOpen: !state.isResumeOpen,
        }
    }),
    openResume: () => set(() => {
        useWindowsStore.getState().setFocusedWindow("Resume")
        return {
            isResumeOpen: true,
            isResumeMinimized: false
        }
    }),
    closeResume: () => set(() => {
        useWindowsStore.getState().setFocusedWindow("None")
        return {
            isResumeOpen: false,
            isResumeMinimized: false
        }
    }),
    toggleResumeExpanded: () => set((state: { isResumeExpanded: boolean; }) => ({ isResumeExpanded: !state.isResumeExpanded })),
    setResumeExpanded: (flag: boolean) => set(() => ({ isResumeExpanded: flag })),
    toggleResumeMinimized: () => set((state: { isResumeMinimized: boolean; }) => ({ isResumeMinimized: !state.isResumeMinimized })),
    setResumeMinimized: (flag: boolean) => set(() => ({ isResumeMinimized: flag })),
}))

export default useResumeStore;
