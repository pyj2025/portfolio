import React from "react";
import info from "../../info.json";
import { ViewMode } from "../../types";
import SkillsGroup from "./SkillsGroup";

const FrontEnd: React.FC<{ view?: ViewMode }> = ({ view }) => (
  <SkillsGroup skills={info.skills.front} view={view} />
);

export default React.memo(FrontEnd);
