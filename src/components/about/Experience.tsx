import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { BoldText } from '../../GlobalStyle';
import ExperienceRow, { ExperienceType } from './ExperienceRow';
import info from '../../info.json';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DataRow = styled.div<{ showDate?: boolean; isMobile?: boolean }>`
  display: grid;
  grid-template-columns: ${({ showDate }) =>
    showDate ? '6.5fr 3.5fr' : 'auto'};
  width: 100%;
  height: ${({ isMobile }) => (isMobile ? '2rem' : '1.25rem')};
  background-color: rgb(51, 52, 54);
  border-bottom: 1px solid black;
  padding-left: 0.5rem;
`;

export const SortButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

export const SortButtonText = styled(BoldText)`
  margin-right: 0.5rem;
`;

type SortType = 'asc' | 'dec';

export type ExperienceProps = { showDate: boolean; isMobile?: boolean };

const Experience: React.FC<ExperienceProps> = ({
  isMobile = false,
  showDate,
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

  return (
    <Container>
      <DataRow showDate={showDate} isMobile={isMobile}>
        <SortButton onClick={sortByPosition}>
          <SortButtonText>Position</SortButtonText>
          {positionSortType ? (
            <FontAwesomeIcon
              icon={
                positionSortType === 'asc'
                  ? (faChevronUp as IconProp)
                  : (faChevronDown as IconProp)
              }
            />
          ) : null}
        </SortButton>
        {showDate ? (
          <SortButton onClick={sortByDate}>
            <SortButtonText>Date</SortButtonText>
            {dateSortType ? (
              <FontAwesomeIcon
                icon={
                  dateSortType === 'asc'
                    ? (faChevronUp as IconProp)
                    : (faChevronDown as IconProp)
                }
              />
            ) : null}
          </SortButton>
        ) : null}
      </DataRow>
      {experiences.map((experience: ExperienceType, idx: number) => (
        <ExperienceRow
          key={experience.title}
          experience={experience}
          isEven={idx % 2 === 0}
          showDate={showDate}
          isMobile={isMobile}
        />
      ))}
    </Container>
  );
};

export default React.memo(Experience);
