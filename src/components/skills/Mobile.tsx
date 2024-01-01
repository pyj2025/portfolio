import React from 'react';
import info from '../../info.json';
import SkillIcon from './SkillIcon';
import { SkillsContentContainer } from '../../views/window/desktop/SkillsWindow';

const Mobile: React.FC = () => {
  return (
    <SkillsContentContainer>
      {info.skills.mobile.map((skill) => {
        return <SkillIcon name={skill.name} noWidth={skill.noWidth} />;
      })}
    </SkillsContentContainer>
  );
};

export default React.memo(Mobile);
