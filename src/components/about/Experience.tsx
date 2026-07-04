import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { BoldText } from '../../GlobalStyle';
import { cn } from '../../utils/cn';
import { ViewMode } from '../../types';
import { getIcon } from '../getIcon';
import ExperienceRow, { ExperienceType } from './ExperienceRow';
import info from '../../info.json';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type SortType = 'asc' | 'dec';

type ExperienceProps = {
  showDate: boolean;
  isMobile?: boolean;
  view?: ViewMode;
  onOpen?: (experience: ExperienceType) => void;
};

const Experience: React.FC<ExperienceProps> = ({
  isMobile = false,
  showDate,
  view = 'list',
  onOpen,
}) => {
  const [experiences, setExperiences] = React.useState<Array<ExperienceType>>(
    info.about.experience
  );
  const [positionSortType, setPositionSortType] =
    React.useState<SortType | null>(null);
  const [dateSortType, setDateSortType] = React.useState<SortType | null>(null);

  const sortByPosition = React.useCallback(() => {
    if (positionSortType === 'asc') {
      setPositionSortType(null);
      setDateSortType(null);

      setExperiences((prev) => {
        return [...prev.sort((a, b) => a.dateRank - b.dateRank)];
      });
    } else if (positionSortType === 'dec') {
      setPositionSortType('asc');
      setDateSortType(null);

      setExperiences((prevExperiences) => {
        return [
          ...prevExperiences.sort((a, b) => (a.title > b.title ? 1 : -1)),
        ];
      });
    } else {
      setPositionSortType('dec');
      setDateSortType(null);

      setExperiences((prevExperiences) => {
        return [
          ...prevExperiences.sort((a, b) => (b.title > a.title ? 1 : -1)),
        ];
      });
    }
  }, [positionSortType]);

  const sortByDate = React.useCallback(() => {
    if (dateSortType === 'asc') {
      setDateSortType(null);
      setPositionSortType(null);

      setExperiences((prev) => {
        return [...prev.sort((a, b) => a.dateRank - b.dateRank)];
      });
    } else if (dateSortType === 'dec') {
      setDateSortType('asc');
      setPositionSortType(null);

      setExperiences((prev) => {
        return [...prev.sort((a, b) => b.dateRank - a.dateRank)];
      });
    } else {
      setDateSortType('dec');
      setPositionSortType(null);

      setExperiences((prev) => {
        return [...prev.sort((a, b) => a.dateRank - b.dateRank)];
      });
    }
  }, [dateSortType]);

  if (view === 'icon') {
    return (
      <div className="flex flex-row flex-wrap gap-2 m-2.5">
        {experiences.map((exp) => (
          <button
            key={exp.title}
            aria-label={exp.title}
            onClick={() => onOpen?.(exp)}
            className="group flex flex-col items-center w-24 cursor-pointer select-none bg-transparent"
          >
            <div className="flex items-center justify-center rounded-lg p-1 transition-colors group-hover:bg-[var(--hover-overlay)]">
              {getIcon('File', 44)}
            </div>
            <div className="mt-1 max-w-full px-1.5 py-px rounded text-xs leading-tight text-center break-words text-[color:var(--wc-text)] transition-colors group-hover:bg-[var(--hover-overlay-strong)]">
              {exp.company}
            </div>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div
        className={cn(
          'grid w-full bg-[var(--table-head)] border-b border-b-[color:var(--win-border)] pl-2',
          showDate ? 'grid-cols-[6.5fr_3.5fr]' : 'grid-cols-[auto]',
          isMobile ? 'h-8' : 'h-5'
        )}
      >
        <div
          className="flex justify-start items-center cursor-pointer"
          onClick={sortByPosition}
        >
          <BoldText className="mr-2">Position</BoldText>
          {positionSortType ? (
            <FontAwesomeIcon
              icon={
                positionSortType === 'asc'
                  ? (faChevronUp as IconProp)
                  : (faChevronDown as IconProp)
              }
            />
          ) : null}
        </div>
        {showDate ? (
          <div
            className="flex justify-start items-center cursor-pointer"
            onClick={sortByDate}
          >
            <BoldText className="mr-2">Date</BoldText>
            {dateSortType ? (
              <FontAwesomeIcon
                icon={
                  dateSortType === 'asc'
                    ? (faChevronUp as IconProp)
                    : (faChevronDown as IconProp)
                }
              />
            ) : null}
          </div>
        ) : null}
      </div>
      {experiences.map((experience: ExperienceType, idx: number) => (
        <ExperienceRow
          key={experience.title}
          experience={experience}
          isEven={idx % 2 === 0}
          showDate={showDate}
          isMobile={isMobile}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
};

export default React.memo(Experience);
