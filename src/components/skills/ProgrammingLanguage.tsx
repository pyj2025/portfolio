import React from "react";
import info from "../../info.json";
import { ViewMode } from "../../types";
import SkillsGroup from "./SkillsGroup";

interface ProgrammingLanguageProps {
  view?: ViewMode;
}

const ProgrammingLanguage: React.FC<ProgrammingLanguageProps> = ({ view }) => (
  <SkillsGroup skills={info.skills.languages} view={view} />
);

export default React.memo(ProgrammingLanguage);
