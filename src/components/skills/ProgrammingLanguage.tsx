import React from "react";
import info from "../../info.json";
import SkillIcon from "./SkillIcon";

const SkillsContentContainerStyle = "flex flex-row flex-wrap mt-2.5";

const ProgrammingLanguage: React.FC = () => {
  return (
    <div className={SkillsContentContainerStyle}>
      {info.skills.languages.map(skill => {
        return <SkillIcon name={skill.name} />;
      })}
    </div>
  );
};

export default React.memo(ProgrammingLanguage);
