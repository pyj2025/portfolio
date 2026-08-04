import React from "react";
import info from "../../info.json";
import { ViewMode } from "../../types";
import SkillsGroup from "./SkillsGroup";

interface BackEndProps {
  view?: ViewMode;
}

const BackEnd: React.FC<BackEndProps> = ({ view }) => (
  <SkillsGroup skills={info.skills.back} view={view} />
);

export default React.memo(BackEnd);
