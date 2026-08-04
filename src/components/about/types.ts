import { AboutIndexType } from "../../types";

export type NavItem = {
  id: AboutIndexType;
  label: string;
  icon: "File" | "Folder";
  isChild?: boolean;
  focusConditions?: AboutIndexType[];
};

export type ExperienceType = {
  title: string;
  company: string;
  location: string;
  date: string;
  dateRank: number;
  tech: string[];
  description: string;
};

export type ExperienceSortType = "asc" | "dec";
