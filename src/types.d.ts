export type AppId =
  | "About"
  | "Skills"
  | "Projects"
  | "Calculator"
  | "Utils"
  | "Resume"
  | "Terminal"
  | "Settings"
  | "Calendar";

export type FocusedWindowType = AppId | "Welcome" | "DesktopAbout" | "None";

export type WindowSizeSetting = {
  width: number;
  height: number;
};

export type WindowPositionSetting = {
  x: number;
  y: number;
};

export type AboutIndexType =
  | 'Menu'
  | 'Info'
  | 'Experience'
  | 'Education'
  | 'Certifications'
  | 'GenAI'
  | `Experience:${string}`;

export type ProjectIndexType =
  | 'Projects'
  | 'WebProjects'
  | 'MobileProjects'
  | 'GitCard'
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

export type ViewMode = 'icon' | 'list';
