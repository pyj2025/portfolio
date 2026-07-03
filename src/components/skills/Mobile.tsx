import React from "react";
import info from "../../info.json";
import { ViewMode } from "../../types";
import SkillsGroup from "./SkillsGroup";

const Mobile: React.FC<{ view?: ViewMode }> = ({ view }) => (
  <SkillsGroup skills={info.skills.mobile} view={view} />
);

export default React.memo(Mobile);
