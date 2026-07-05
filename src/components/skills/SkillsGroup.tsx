import React from 'react';
import { ViewMode } from '../../types';
import { FinderList, FinderListRow } from '../FinderItems';
import SkillIcon from './SkillIcon';
import { getSkillIcon } from './getSkillIcon';

type Skill = { name: string };

type SkillsGroupProps = {
  skills: Skill[];
  view?: ViewMode;
};

const SkillsGroup: React.FC<SkillsGroupProps> = ({ skills, view = 'icon' }) =>
  view === 'list' ? (
    <FinderList>
      {skills.map(skill => (
        <FinderListRow
          key={skill.name}
          label={skill.name}
          icon={
            <span className="scale-[0.45] flex items-center justify-center">
              {getSkillIcon(skill.name)}
            </span>
          }
        />
      ))}
    </FinderList>
  ) : (
    <div className="flex flex-row flex-wrap mt-2.5">
      {skills.map(skill => (
        <SkillIcon key={skill.name} name={skill.name} />
      ))}
    </div>
  );

export default SkillsGroup;
