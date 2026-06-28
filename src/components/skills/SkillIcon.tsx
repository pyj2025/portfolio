import React from 'react';
import { cn } from '../../utils/cn';
import { getSkillIcon } from './getSkillIcon';

export type SkillIconProps = {
  name: string;
  noWidth?: boolean;
};

const SkillIcon: React.FC<SkillIconProps> = ({ name, noWidth }) => {
  return (
    <div
      title={name}
      className={cn(
        'flex flex-col h-16 justify-center items-center m-1',
        noWidth ? '' : 'w-16'
      )}
    >
      {getSkillIcon(name)}
      <div className="text-xs text-center h-[1em] mt-1">{name}</div>
    </div>
  );
};

export default React.memo(SkillIcon);
