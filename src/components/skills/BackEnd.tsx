import React from "react";
import info from "../../info.json";
import { ViewMode } from "../../types";
import SkillsGroup from "./SkillsGroup";

const BackEnd: React.FC<{ view?: ViewMode }> = ({ view }) => (
  <SkillsGroup skills={info.skills.back} view={view} />
);

export default React.memo(BackEnd);
