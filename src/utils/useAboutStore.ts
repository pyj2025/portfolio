import { create } from 'zustand';
import { AboutState } from './type';
import useWindowsStore from './useWindowsStore';

const useAboutStore = create<AboutState>(set => ({
    isAboutOpen: false,
    isAboutMinimized: false,
    isAboutExpanded: false,
    toggleAboutOpen: () => set((state: { isAboutOpen: boolean }) => {
        if (!state.isAboutOpen) {
            useWindowsStore.getState().setFocusedWindow("About")
        } else {
            useWindowsStore.getState().setFocusedWindow("None")
        }        
        return { 
            isAboutOpen: !state.isAboutOpen, 
        }
    }),
    openAbout: () => set(() => {
        useWindowsStore.getState().setFocusedWindow("About")
        return { 
            isAboutOpen: true, 
            isAboutMinimized: false 
        }
    }),
    closeAbout: () => set(() => {
        useWindowsStore.getState().setFocusedWindow("None")
        return { 
            isAboutOpen: false, 
            isAboutMinimized: false 
        }
    }),
    toggleAboutExpanded: () => set((state: { isAboutExpanded: boolean; }) => ({ isAboutExpanded: !state.isAboutExpanded })),
    setAboutExpanded: (flag: boolean) => set(() => ({ isAboutExpanded: flag })),
    toggleAboutMinimized: () => set((state: { isAboutMinimized: boolean; }) => ({ isAboutMinimized: !state.isAboutMinimized })),
    setAboutMinimized: (flag: boolean) => set(() => ({ isAboutMinimized: flag })),
}))

export default useAboutStore;