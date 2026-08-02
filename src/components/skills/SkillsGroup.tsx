import React from 'react';
import { ViewMode } from '../../types';
import { FinderList, FinderListRow } from '../FinderItems';
import SkillIcon from './SkillIcon';
import { getSkillIcon } from './getSkillIcon';
import { getSkillLink } from './skillLinks';

type SkillsGroupProps = {
  skills: string[];
  view?: ViewMode;
};

const SkillsGroup: React.FC<SkillsGroupProps> = ({ skills, view = 'icon' }) =>
  view === 'list' ? (
    <FinderList>
      {skills.map(skillName => (
        <FinderListRow
          key={skillName}
          label={skillName}
          onClick={() => {
            const link = getSkillLink(skillName);
            if (link) {
              window.open(link, "_blank", "noopener,noreferrer");
            }
          }}
          icon={
            <span className="scale-[0.45] max-[899px]:scale-[0.6] flex items-center justify-center">
              {getSkillIcon(skillName)}
            </span>
          }
        />
      ))}
    </FinderList>
  ) : (
    <div className="flex flex-row flex-wrap mt-2.5">
      {skills.map(skillName => (
        <SkillIcon key={skillName} name={skillName} />
      ))}
    </div>
  );

export default SkillsGroup;
