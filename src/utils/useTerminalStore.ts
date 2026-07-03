import { create } from 'zustand';
import { TerminalState } from './types';
import useWindowsStore from './useWindowsStore';

const useTerminalStore = create<TerminalState>(set => ({
    isTerminalOpen: false,
    isTerminalMinimized: false,
    isTerminalExpanded: false,
    toggleTerminalOpen: () => set((state: { isTerminalOpen: boolean }) => {
        if (!state.isTerminalOpen) {
            useWindowsStore.getState().setFocusedWindow("Terminal")
        } else {
            useWindowsStore.getState().setFocusedWindow("None")
        }
        return {
            isTerminalOpen: !state.isTerminalOpen,
        }
    }),
    openTerminal: () => set(() => {
        useWindowsStore.getState().setFocusedWindow("Terminal")
        return {
            isTerminalOpen: true,
            isTerminalMinimized: false
        }
    }),
    closeTerminal: () => set(() => {
        useWindowsStore.getState().setFocusedWindow("None")
        return {
            isTerminalOpen: false,
            isTerminalMinimized: false
        }
    }),
    toggleTerminalExpanded: () => set((state: { isTerminalExpanded: boolean; }) => ({ isTerminalExpanded: !state.isTerminalExpanded })),
    setTerminalExpanded: (flag: boolean) => set(() => ({ isTerminalExpanded: flag })),
    toggleTerminalMinimized: () => set((state: { isTerminalMinimized: boolean; }) => ({ isTerminalMinimized: !state.isTerminalMinimized })),
    setTerminalMinimized: (flag: boolean) => set(() => ({ isTerminalMinimized: flag })),
}))

export default useTerminalStore;
