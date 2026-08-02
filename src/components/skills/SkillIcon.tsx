import React from 'react';
import { getSkillIcon } from './getSkillIcon';
import { getSkillLink } from './skillLinks';

export type SkillIconProps = {
  name: string;
};

const SkillIcon: React.FC<SkillIconProps> = ({ name }) => {
  const link = getSkillLink(name);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={link ? `Open the ${name} site` : undefined}
      className="group flex flex-col items-center justify-start w-16 m-1 select-none no-underline">
      <div className="flex items-center justify-center rounded-lg p-1 transition-colors group-hover:bg-[var(--hover-overlay)]">
        {getSkillIcon(name)}
      </div>
      <div className="mt-1 max-w-full px-1.5 py-px rounded text-xs leading-tight text-center text-[color:var(--wc-text)] break-words transition-colors group-hover:bg-[var(--hover-overlay-strong)]">
        {name}
      </div>
    </a>
  );
};

export default React.memo(SkillIcon);
