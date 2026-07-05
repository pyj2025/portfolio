import React from 'react';
import { FinderListRow } from '../FinderItems';
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
}) => (
  <FinderListRow
    label={experience.title}
    icon={getIcon('File', 20)}
    trailing={showDate ? experience.date : undefined}
    compact={!isMobile}
    onClick={() => onOpen?.(experience)}
  />
);

export default React.memo(ExperienceRow);
