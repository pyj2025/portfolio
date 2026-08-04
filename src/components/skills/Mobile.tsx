import React from "react";
import info from "../../info.json";
import { ViewMode } from "../../types";
import SkillsGroup from "./SkillsGroup";

interface MobileProps {
  view?: ViewMode;
}

const Mobile: React.FC<MobileProps> = ({ view }) => (
  <SkillsGroup skills={info.skills.mobile} view={view} />
);

export default React.memo(Mobile);
