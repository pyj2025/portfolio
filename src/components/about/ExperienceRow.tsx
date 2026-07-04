import React from 'react';
import { cn } from '../../utils/cn';
import { getIcon } from '../getIcon';

export type ExperienceType = {
  title: string;
  company: string;
  location: string;
  date: string;
  dateRank: number;
  tech: string;
  description: string;
};

type ExperienceRowProps = {
  experience: ExperienceType;
  showDate: boolean;
  isMobile?: boolean;
  onOpen?: (experience: ExperienceType) => void;
};

const ExperienceRow: React.FC<ExperienceRowProps> = ({
  isMobile = false,
  experience,
  showDate,
  onOpen,
}) => {
  return (
    <button
      aria-label={experience.title}
      onClick={() => onOpen?.(experience)}
      className={cn(
        'flex flex-row items-center gap-2.5 w-full px-3 rounded-md cursor-pointer hover:bg-[var(--hover-overlay)] transition-colors text-left bg-transparent',
        isMobile ? 'py-2' : 'py-1'
      )}
    >
      <span className="flex items-center justify-center w-6 h-6 shrink-0">
        {getIcon('File', 20)}
      </span>
      <span className="text-sm text-[color:var(--wc-text)] truncate">
        {experience.title}
      </span>
      {showDate ? (
        <span className="ml-auto text-xs text-[color:var(--wc-muted)] shrink-0">
          {experience.date}
        </span>
      ) : null}
    </button>
  );
};

export default React.memo(ExperienceRow);
