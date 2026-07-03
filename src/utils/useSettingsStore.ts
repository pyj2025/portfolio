import { create } from 'zustand';
import { SettingsState } from './types';
import useWindowsStore from './useWindowsStore';

const useSettingsStore = create<SettingsState>(set => ({
    isSettingsOpen: false,
    isSettingsMinimized: false,
    isSettingsExpanded: false,
    toggleSettingsOpen: () => set((state: { isSettingsOpen: boolean }) => {
        if (!state.isSettingsOpen) {
            useWindowsStore.getState().setFocusedWindow("Settings")
        } else {
            useWindowsStore.getState().setFocusedWindow("None")
        }
        return {
            isSettingsOpen: !state.isSettingsOpen,
        }
    }),
    openSettings: () => set(() => {
        useWindowsStore.getState().setFocusedWindow("Settings")
        return {
            isSettingsOpen: true,
            isSettingsMinimized: false
        }
    }),
    closeSettings: () => set(() => {
        useWindowsStore.getState().setFocusedWindow("None")
        return {
            isSettingsOpen: false,
            isSettingsMinimized: false
        }
    }),
    toggleSettingsExpanded: () => set((state: { isSettingsExpanded: boolean; }) => ({ isSettingsExpanded: !state.isSettingsExpanded })),
    setSettingsExpanded: (flag: boolean) => set(() => ({ isSettingsExpanded: flag })),
    toggleSettingsMinimized: () => set((state: { isSettingsMinimized: boolean; }) => ({ isSettingsMinimized: !state.isSettingsMinimized })),
    setSettingsMinimized: (flag: boolean) => set(() => ({ isSettingsMinimized: flag })),
}))

export default useSettingsStore;
