import { create } from 'zustand';
import { UtilState } from './types';
import useWindowsStore from './useWindowsStore';

const useUtilStore = create<UtilState>(set => ({
    isUtilOpen: false,
    isUtilMinimized: false,
    isUtilExpanded: false,
    toggleUtilOpen: () => set((state: { isUtilOpen: boolean }) => {
        if (!state.isUtilOpen) {
            useWindowsStore.getState().setFocusedWindow("Utils")
        } else {
            useWindowsStore.getState().setFocusedWindow("None")
        }
        return {
            isUtilOpen: !state.isUtilOpen,
        }
    }),
    openUtil: () => set(() => {
        useWindowsStore.getState().setFocusedWindow("Utils")
        return {
            isUtilOpen: true,
            isUtilMinimized: false
        }
    }),
    closeUtil: () => set(() => {
        useWindowsStore.getState().setFocusedWindow("None")
        return {
            isUtilOpen: false,
            isUtilMinimized: false
        }
    }),
    toggleUtilExpanded: () => set((state: { isUtilExpanded: boolean; }) => ({ isUtilExpanded: !state.isUtilExpanded })),
    setUtilExpanded: (flag: boolean) => set(() => ({ isUtilExpanded: flag })),
    toggleUtilMinimized: () => set((state: { isUtilMinimized: boolean; }) => ({ isUtilMinimized: !state.isUtilMinimized })),
    setUtilMinimized: (flag: boolean) => set(() => ({ isUtilMinimized: flag })),
}))

export default useUtilStore;
