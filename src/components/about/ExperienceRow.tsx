import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import styled from 'styled-components';
import { BoldText, MutedText } from '../../GlobalStyle';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { getIcon } from '../getIcon';
import ExperienceTable from './ExperienceTable';

export const DataRow = styled.div<{
  isEven?: boolean;
  isMobile?: boolean;
  showDate: boolean;
}>`
  display: grid;
  grid-template-columns: ${({ showDate }) =>
    showDate ? '6.5fr 3.5fr' : 'auto'};
  width: 100%;
  height: ${({ isMobile }) => (isMobile ? '3rem' : '100%')};
  background-color: ${({ isEven }) => (isEven ? '#28292a' : 'transparent')};
  padding-left: 0.5rem;

  cursor: pointer;
`;

export const PositionContainer = styled.div<{ isEven?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25rem;
`;

const DataLabel = styled(MutedText)`
  justify-items: flex-end;
  align-self: center;
`;

const DescriptionContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;

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
      <DataRow
        isEven={isEven}
        isMobile={isMobile}
        showDate={showDate}
        onClick={toggleOpen}
      >
        <PositionContainer>
          <FontAwesomeIcon
            icon={
              isOpen
                ? (faChevronDown as IconProp)
                : (faChevronRight as IconProp)
            }
          />
          {getIcon('File', isMobile ? 40 : 20)}
          <BoldText>{experience.title}</BoldText>
        </PositionContainer>
        {showDate ? <DataLabel>{experience.date}</DataLabel> : null}
      </DataRow>
      {isOpen ? (
        <DescriptionContainer>
          <ExperienceTable experience={experience} />
        </DescriptionContainer>
      ) : null}
    </div>
  );
};

export default React.memo(ExperienceRow);
