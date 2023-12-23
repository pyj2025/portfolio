import React from 'react';
import info from '../../info.json';
import styled from 'styled-components';
import SkillIcon, { SkillIconProps } from './SkillIcon';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const BackEnd: React.FC = () => {
  const [backEndSkills, setBackEndSkills] = React.useState<
    Array<SkillIconProps>
  >([]);

  React.useEffect(() => {
    setBackEndSkills(info.skills.back);
  }, []);

  return (
    <ContentContainer>
      {backEndSkills.map((skill) => {
        return <SkillIcon name={skill.name} noWidth={skill.noWidth} />;
      })}
    </ContentContainer>
  );
};

export default BackEnd;
