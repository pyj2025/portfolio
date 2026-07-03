import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { BoldText, MutedText } from '../../GlobalStyle';
import { cn } from '../../utils/cn';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { getIcon } from '../getIcon';
import ExperienceTable from './ExperienceTable';

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
  isEven: boolean;
  showDate: boolean;
  isMobile?: boolean;
};

const ExperienceRow: React.FC<ExperienceRowProps> = ({
  isMobile = false,
  experience,
  isEven,
  showDate,
}) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  const toggleOpen = React.useCallback(() => {
    setOpen((state) => !state);
  }, [setOpen]);

  return (
    <div>
      <div
        className={cn(
          'grid w-full pl-2 cursor-pointer',
          showDate ? 'grid-cols-[6.5fr_3.5fr]' : 'grid-cols-[auto]',
          isMobile ? 'h-12' : 'h-full',
          isEven ? 'bg-[var(--row-alt)]' : 'bg-transparent'
        )}
        onClick={toggleOpen}
      >
        <div className="flex flex-row justify-start items-center gap-1">
          <FontAwesomeIcon
            icon={
              isOpen
                ? (faChevronDown as IconProp)
                : (faChevronRight as IconProp)
            }
          />
          {getIcon('File', isMobile ? 40 : 20)}
          <BoldText>{experience.title}</BoldText>
        </div>
        {showDate ? (
          <MutedText className="justify-items-end self-center">
            {experience.date}
          </MutedText>
        ) : null}
      </div>
      {isOpen ? (
        <div className="w-full h-full p-2">
          <ExperienceTable experience={experience} />
        </div>
      ) : null}
    </div>
  );
};

export default React.memo(ExperienceRow);
