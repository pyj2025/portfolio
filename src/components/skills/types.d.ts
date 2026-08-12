import { SkillsIndexType } from "../../types";

export type SkillsNavItemType = {
  id: SkillsIndexType;
  title: string;
  icon: "Folder" | "CodeFile";
  label: string;
};

export type SkillIconConfig = {
  src: string;
  bg?: boolean;
  size?: number;
  height?: number;
};
