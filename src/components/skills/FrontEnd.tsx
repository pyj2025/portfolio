import React from "react";
import info from "../../info.json";
import SkillIcon from "./SkillIcon";

const SkillsContentContainerStyle = "flex flex-row flex-wrap mt-2.5";

const FrontEnd: React.FC = () => {
  return (
    <div className={SkillsContentContainerStyle}>
      {info.skills.front.map(skill => {
        return <SkillIcon name={skill.name} />;
      })}
    </div>
  );
};

export default React.memo(FrontEnd);
