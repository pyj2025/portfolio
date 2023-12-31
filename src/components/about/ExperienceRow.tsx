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
`;

const DateLabel = styled(MutedText)`
  justify-items: flex-end;
  align-self: center;
`;

const DataContent = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 4px;
`;

export type ExperienceType = {
  title: string;
  company: string;
  location: string;
  date: string;
  dateRank: number;
  tech: string;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

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
        {showDate ? <DateLabel>{experience.date}</DateLabel> : null}
      </DataRow>
      {isOpen ? (
        <DataContent>
          <RowContainer>
            <MutedText>Name</MutedText>
            <div>{experience.company}</div>
          </RowContainer>
          <RowContainer>
            <MutedText>Location</MutedText>
            <div>{experience.location}</div>
          </RowContainer>
          <RowContainer>
            <MutedText>Date</MutedText>
            <div>{experience.date}</div>
          </RowContainer>
          <RowContainer>
            <MutedText>Tech</MutedText>
            <div>{experience.tech}</div>
          </RowContainer>
        </DataContent>
      ) : null}
    </div>
  );
};

export default React.memo(ExperienceRow);
