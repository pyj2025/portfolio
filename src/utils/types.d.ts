import { FocusedWindowType } from "../types";

export type WindowsState = {
    focusedWindow: FocusedWindowType;
    isWelcomeWindowOpen: boolean;
    setFocusedWindow: (focusedWindow: FocusedWindowType) => void;
    toggleWelcomeWindowOpen: () => void;
    closeWelcomeWindow: () => void;
    clearFocusWindows: () => void;
};
