import React from 'react';
import { ExperienceType } from './ExperienceRow';
import {
  MutedText,
  PanelTableContainer,
  PanelTableLabel,
} from '../../GlobalStyle';

type ExperienceTableProps = {
  experience: ExperienceType;
};

const ExperienceTable: React.FC<ExperienceTableProps> = ({ experience }) => {
  return (
    <PanelTableContainer>
      <tbody>
        <tr>
          <PanelTableLabel>
            <MutedText>Name</MutedText>
          </PanelTableLabel>
          <td>{experience.company}</td>
        </tr>
        <tr>
          <PanelTableLabel>
            <MutedText>Location</MutedText>
          </PanelTableLabel>
          <td>{experience.location}</td>
        </tr>
        <tr>
          <PanelTableLabel>
            <MutedText>Date</MutedText>
          </PanelTableLabel>
          <td>{experience.date}</td>
        </tr>
        <tr>
          <PanelTableLabel>
            <MutedText>Tech</MutedText>
          </PanelTableLabel>
          <td>{experience.tech}</td>
        </tr>
        <tr>
          <PanelTableLabel>
            <MutedText>Role</MutedText>
          </PanelTableLabel>
          <td>{experience.description}</td>
        </tr>
      </tbody>
    </PanelTableContainer>
  );
};

export default React.memo(ExperienceTable);
