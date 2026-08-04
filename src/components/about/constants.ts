import info from "../../info.json";
import { AboutNavItemType } from "./types";

export const ABOUT_NAV_ITEMS: AboutNavItemType[] = [
  {
    id: "Info",
    label: "Personal Info",
    icon: "File",
    focusConditions: ["Info"],
  },
  {
    id: "Experience",
    label: "Experience",
    icon: "Folder",
    focusConditions: ["Experience"],
  },
  ...info.about.experience.map(
    (exp): AboutNavItemType => ({
      id: `Experience:${exp.title}`,
      label: exp.company,
      icon: "File",
      isChild: true,
      focusConditions: [`Experience:${exp.title}`],
    }),
  ),
  {
    id: "Education",
    label: "Education",
    icon: "File",
    focusConditions: ["Education"],
  },
  {
    id: "Certifications",
    label: "Certifications",
    icon: "Folder",
    focusConditions: ["Certifications", "GenAI"],
  },
  {
    id: "GenAI",
    label: "GenAI",
    icon: "File",
    isChild: true,
    focusConditions: ["GenAI"],
  },
];
