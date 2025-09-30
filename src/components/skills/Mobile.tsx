import React from "react";
import info from "../../info.json";
import SkillIcon from "./SkillIcon";

const SkillsContentContainerStyle = "flex flex-row flex-wrap mt-2.5";

const Mobile: React.FC = () => {
  return (
    <div className={SkillsContentContainerStyle}>
      {info.skills.mobile.map(skill => {
        return <SkillIcon name={skill.name} noWidth={skill.noWidth} />;
      })}
    </div>
  );
};

export default React.memo(Mobile);
