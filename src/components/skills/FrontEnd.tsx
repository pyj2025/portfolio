import React from "react";
import info from "../../info.json";
import { ViewMode } from "../../types";
import SkillsGroup from "./SkillsGroup";

interface FrontEndProps {
  view?: ViewMode;
}

const FrontEnd: React.FC<FrontEndProps> = ({ view }) => (
  <SkillsGroup skills={info.skills.front} view={view} />
);

export default React.memo(FrontEnd);
