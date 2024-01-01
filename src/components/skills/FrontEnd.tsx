import React from 'react';
import info from '../../info.json';
import SkillIcon from './SkillIcon';
import { SkillsContentContainer } from '../../views/window/desktop/SkillsWindow';

const FrontEnd: React.FC = () => {
  return (
    <SkillsContentContainer>
      {info.skills.front.map((skill) => {
        return <SkillIcon name={skill.name} />;
      })}
    </SkillsContentContainer>
  );
};

export default React.memo(FrontEnd);
