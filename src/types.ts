export type FocusedWindowType =
  | "Welcome"
  | "DesktopAbout"
  | "About"
  | "Skills"
  | "Projects"
  | "None";

export type WindowSizeSetting = {
  width: number;
  height: number;
};

export type WindowPositionSetting = {
  x: number;
  y: number;
};

export type AboutIndexType = 'Menu' | 'Info' | 'Experience' | 'Education';

export type ProjectIndexType =
  | 'Projects'
  | 'WebProjects'
  | 'MobileProjects'
  | 'DatApex'
  | "MovieNext"
  | 'Foodie'
  | "WebGame"
  | 'Tippy'
  | 'Flix'
  | 'Twitter'
  | 'Parstagram'
  | "ToonFlix"
  | 'Portfolio';

export type SkillsIndexType = 'Menu' | 'Front' | 'Back' | 'Mobile' | 'Programming';
