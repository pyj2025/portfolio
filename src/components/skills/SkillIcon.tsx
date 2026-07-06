import React from 'react';
import { getSkillIcon } from './getSkillIcon';

export type SkillIconProps = {
  name: string;
};

const SkillIcon: React.FC<SkillIconProps> = ({ name }) => {
  return (
    <div className="group flex flex-col items-center justify-start w-16 m-1 select-none">
      <div className="flex items-center justify-center rounded-lg p-1 transition-colors group-hover:bg-[var(--hover-overlay)]">
        {getSkillIcon(name)}
      </div>
      <div className="mt-1 max-w-full px-1.5 py-px rounded text-xs leading-tight text-center text-[color:var(--wc-text)] break-words transition-colors group-hover:bg-[var(--hover-overlay-strong)]">
        {name}
      </div>
    </div>
  );
};

export default React.memo(SkillIcon);
