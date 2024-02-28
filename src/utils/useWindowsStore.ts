import { create } from 'zustand';
import { WindowsState } from './types';
import { FocusedWindowType } from '../types';

const useWindowsStore = create<WindowsState>(set => ({
    focusedWindow: 'Welcome',
    isWelcomeWindowOpen: true,
    setFocusedWindow: (focusedWindow: FocusedWindowType) => set(() => ({ focusedWindow })),
    toggleWelcomeWindowOpen: () => set((state: { isWelcomeWindowOpen: boolean; }) => ({ isWelcomeWindowOpen: !state.isWelcomeWindowOpen })),
    closeWelcomeWindow: () => set(() => ({ isWelcomeWindowOpen: false, focusedWindow: 'None' })),
    clearFocusWindows: () => set(() => ({ focusedWindow: "None" })),
}))

export default useWindowsStore;