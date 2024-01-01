import React from 'react';
import info from '../../info.json';
import SkillIcon from './SkillIcon';
import { SkillsContentContainer } from '../../views/window/desktop/SkillsWindow';

const BackEnd: React.FC = () => {
  return (
    <SkillsContentContainer>
      {info.skills.back.map((skill) => {
        return <SkillIcon name={skill.name} />;
      })}
    </SkillsContentContainer>
  );
};

export default React.memo(BackEnd);
