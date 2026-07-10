import { create } from 'zustand';
import { AppId } from '../types';
import { IconType } from '../components/getIcon';
import useWindowsStore from './useWindowsStore';

export type WindowState = {
  isOpen: boolean;
  isMinimized: boolean;
  isExpanded: boolean;
  toggleOpen: () => void;
  open: () => void;
  close: () => void;
  toggleExpanded: () => void;
  setExpanded: (flag: boolean) => void;
  toggleMinimized: () => void;
  setMinimized: (flag: boolean) => void;
};

const createWindowStore = (id: AppId) =>
  create<WindowState>(set => ({
    isOpen: false,
    isMinimized: false,
    isExpanded: false,
    toggleOpen: () =>
      set(state => {
        useWindowsStore.getState().setFocusedWindow(state.isOpen ? 'None' : id);
        return { isOpen: !state.isOpen };
      }),
    open: () =>
      set(() => {
        useWindowsStore.getState().setFocusedWindow(id);
        return { isOpen: true, isMinimized: false };
      }),
    close: () =>
      set(() => {
        useWindowsStore.getState().setFocusedWindow('None');
        return { isOpen: false, isMinimized: false };
      }),
    toggleExpanded: () => set(state => ({ isExpanded: !state.isExpanded })),
    setExpanded: (flag: boolean) => set(() => ({ isExpanded: flag })),
    toggleMinimized: () => set(state => ({ isMinimized: !state.isMinimized })),
    setMinimized: (flag: boolean) => set(() => ({ isMinimized: flag })),
  }));

export type WindowStore = ReturnType<typeof createWindowStore>;

export const useAboutWindow = createWindowStore('About');
export const useSkillsWindow = createWindowStore('Skills');
export const useProjectsWindow = createWindowStore('Projects');
export const useCalculatorWindow = createWindowStore('Calculator');
export const useUtilsWindow = createWindowStore('Utils');
export const useResumeWindow = createWindowStore('Resume');
export const useTerminalWindow = createWindowStore('Terminal');
export const useSettingsWindow = createWindowStore('Settings');
export const useCalendarWindow = createWindowStore('Calendar');
export const useWeatherWindow = createWindowStore('Weather');
export const useTodoWindow = createWindowStore('Todo');

export type AppConfig = {
  id: AppId;
  icon: IconType;
  // false → the green (expand) traffic light is a no-op for this window
  canExpand: boolean;
  store: WindowStore;
};

export const APPS: AppConfig[] = [
  { id: 'About', icon: 'About', canExpand: true, store: useAboutWindow },
  { id: 'Skills', icon: 'Skills', canExpand: true, store: useSkillsWindow },
  { id: 'Projects', icon: 'Projects', canExpand: true, store: useProjectsWindow },
  { id: 'Calculator', icon: 'Calculator', canExpand: false, store: useCalculatorWindow },
  { id: 'Utils', icon: 'Folder', canExpand: true, store: useUtilsWindow },
  { id: 'Resume', icon: 'Resume', canExpand: true, store: useResumeWindow },
  { id: 'Terminal', icon: 'Terminal', canExpand: true, store: useTerminalWindow },
  { id: 'Settings', icon: 'Settings', canExpand: false, store: useSettingsWindow },
  { id: 'Calendar', icon: 'Calendar', canExpand: true, store: useCalendarWindow },
  { id: 'Weather', icon: 'Weather', canExpand: true, store: useWeatherWindow },
  { id: 'Todo', icon: 'Todo', canExpand: true, store: useTodoWindow },
];

const APP_BY_ID = Object.fromEntries(APPS.map(app => [app.id, app])) as Record<
  AppId,
  AppConfig
>;

export const getApp = (id: AppId): AppConfig => APP_BY_ID[id];
