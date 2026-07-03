import React from 'react';
import { ViewMode } from '../../types';
import SkillIcon from './SkillIcon';
import { getSkillIcon } from './getSkillIcon';

type Skill = { name: string };

type SkillsGroupProps = {
  skills: Skill[];
  view?: ViewMode;
};

const SkillsGroup: React.FC<SkillsGroupProps> = ({ skills, view = 'icon' }) =>
  view === 'list' ? (
    <div className="flex flex-col gap-0.5 p-2">
      {skills.map(skill => (
        <div
          key={skill.name}
          className="flex flex-row items-center gap-2.5 w-full px-3 py-1 rounded-md hover:bg-[var(--hover-overlay)] transition-colors"
        >
          <span className="flex items-center justify-center w-6 h-6 shrink-0">
            <span className="scale-[0.45] flex items-center justify-center">
              {getSkillIcon(skill.name)}
            </span>
          </span>
          <span className="text-sm text-[color:var(--wc-text)]">{skill.name}</span>
        </div>
      ))}
    </div>
  ) : (
    <div className="flex flex-row flex-wrap mt-2.5">
      {skills.map(skill => (
        <SkillIcon key={skill.name} name={skill.name} />
      ))}
    </div>
  );

export default SkillsGroup;
