import React from 'react';
import styled from 'styled-components';
import { ExperienceType } from './ExperienceRow';
import { MutedText } from '../../GlobalStyle';

const TableLabel = styled.td`
  display: flex;
`;

const TableContainer = styled.table`
  border-spacing: 0.25rem;
`;

type ExperienceTableProps = {
  experience: ExperienceType;
};

const ExperienceTable: React.FC<ExperienceTableProps> = ({ experience }) => {
  return (
    <TableContainer>
      <tbody>
        <tr>
          <TableLabel>
            <MutedText>Name</MutedText>
          </TableLabel>
          <td>{experience.company}</td>
        </tr>
        <tr>
          <TableLabel>
            <MutedText>Location</MutedText>
          </TableLabel>
          <td>{experience.location}</td>
        </tr>
        <tr>
          <TableLabel>
            <MutedText>Date</MutedText>
          </TableLabel>
          <td>{experience.date}</td>
        </tr>
        <tr>
          <TableLabel>
            <MutedText>Tech</MutedText>
          </TableLabel>
          <td>{experience.tech}</td>
        </tr>
        <tr>
          <TableLabel>
            <MutedText>Role</MutedText>
          </TableLabel>
          <td>{experience.description}</td>
        </tr>
      </tbody>
    </TableContainer>
  );
};

export default React.memo(ExperienceTable);
