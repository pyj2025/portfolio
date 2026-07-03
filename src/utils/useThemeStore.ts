import { create } from 'zustand';

export type ThemeMode = 'light' | 'dark';

type ThemeState = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
};

const STORAGE_KEY = 'portfolio-theme';

const applyTheme = (theme: ThemeMode) => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
};

const getInitialTheme = (): ThemeMode => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    /* ignore */
  }
  return 'dark';
};

const initialTheme = getInitialTheme();
applyTheme(initialTheme);

const useThemeStore = create<ThemeState>(set => ({
  theme: initialTheme,
  setTheme: (theme: ThemeMode) => {
    applyTheme(theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
    set({ theme });
  },
}));

export default useThemeStore;
