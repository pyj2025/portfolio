import { create } from 'zustand';
import { CalculatorState } from './types';
import useWindowsStore from './useWindowsStore';

const useCalculatorStore = create<CalculatorState>(set => ({
    isCalculatorOpen: false,
    isCalculatorMinimized: false,
    isCalculatorExpanded: false,
    toggleCalculatorOpen: () => set((state: { isCalculatorOpen: boolean }) => {
        if (!state.isCalculatorOpen) {
            useWindowsStore.getState().setFocusedWindow("Calculator")
        } else {
            useWindowsStore.getState().setFocusedWindow("None")
        }
        return {
            isCalculatorOpen: !state.isCalculatorOpen,
        }
    }),
    openCalculator: () => set(() => {
        useWindowsStore.getState().setFocusedWindow("Calculator")
        return {
            isCalculatorOpen: true,
            isCalculatorMinimized: false
        }
    }),
    closeCalculator: () => set(() => {
        useWindowsStore.getState().setFocusedWindow("None")
        return {
            isCalculatorOpen: false,
            isCalculatorMinimized: false
        }
    }),
    toggleCalculatorExpanded: () => set((state: { isCalculatorExpanded: boolean; }) => ({ isCalculatorExpanded: !state.isCalculatorExpanded })),
    setCalculatorExpanded: (flag: boolean) => set(() => ({ isCalculatorExpanded: flag })),
    toggleCalculatorMinimized: () => set((state: { isCalculatorMinimized: boolean; }) => ({ isCalculatorMinimized: !state.isCalculatorMinimized })),
    setCalculatorMinimized: (flag: boolean) => set(() => ({ isCalculatorMinimized: flag })),
}))

export default useCalculatorStore;
