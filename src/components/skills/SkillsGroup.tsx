import React from "react";
import { ViewMode } from "../../types";
import { FinderList, FinderListRow } from "../window/FinderItems";
import SkillIcon from "./SkillIcon";
import { getSkillIconImage } from "./getSkillIconImage";
import { SKILL_LINKS } from "./constants";

const getSkillLink = (name: string): string | undefined => SKILL_LINKS[name];

interface SkillsGroupProps {
  skills: string[];
  view?: ViewMode;
}

const SkillsGroup: React.FC<SkillsGroupProps> = ({ skills, view = "icon" }) =>
  view === "list" ? (
    <FinderList>
      {skills.map(skillName => (
        <FinderListRow
          key={skillName}
          label={skillName}
          onClick={() => {
            const link = getSkillLink(skillName);
            if (link) {
              window.open(link, "_blank", "noopener,noreferrer");
            }
          }}
          icon={
            <span className="scale-[0.45] max-[899px]:scale-[0.6] flex items-center justify-center">
              {getSkillIconImage(skillName)}
            </span>
          }
        />
      ))}
    </FinderList>
  ) : (
    <div className="flex flex-row flex-wrap mt-2.5">
      {skills.map(skillName => (
        <SkillIcon key={skillName} name={skillName} />
      ))}
    </div>
  );

export default SkillsGroup;
