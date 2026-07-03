import React from "react";
import info from "../../info.json";
import { ViewMode } from "../../types";
import SkillsGroup from "./SkillsGroup";

const ProgrammingLanguage: React.FC<{ view?: ViewMode }> = ({ view }) => (
  <SkillsGroup skills={info.skills.languages} view={view} />
);

export default React.memo(ProgrammingLanguage);
