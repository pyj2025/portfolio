import React from "react";
import info from "../../info.json";
import styled from "styled-components";
import SkillIcon, { SkillIconProps } from "./SkillIcon";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const Mobile: React.FC = () => {
  const [mobileSkills, setMobileSkills] = React.useState<Array<SkillIconProps>>(
    []
  );

  React.useEffect(() => {
    setMobileSkills(info.skills.mobile);
  }, []);

  return (
    <ContentContainer>
      {mobileSkills.map((skill) => {
        return (
          <SkillIcon
            name={skill.name}
            icon={skill.icon}
            background={skill.background}
            noWidth={skill.noWidth}
          />
        );
      })}
    </ContentContainer>
  );
};

export default Mobile;
