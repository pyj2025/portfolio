import React from 'react';
import styled from 'styled-components';
import {
  MutedText,
  Panel,
  PanelContainer,
  PanelTableContainer,
  PanelTableLabel,
} from '../../GlobalStyle';
import PurdueLogo from '../../image/PurdueLogo.png';
import info from '../../info.json';

const Certifications: React.FC = () => {
  return (
    <Panel>
      <PanelContainer></PanelContainer>
      <PanelContainer>
        <PanelTableContainer>
          <tr>
            <PanelTableLabel>
              <MutedText>Name</MutedText>
            </PanelTableLabel>
            <td>{info.about.education.university.name}</td>
          </tr>
          <tr>
            <PanelTableLabel>
              <MutedText>Graduated</MutedText>
            </PanelTableLabel>
            <td>
              {`${info.about.education.university.graduateYear.month} ${info.about.education.university.graduateYear.year}`}
            </td>
          </tr>
          <tr>
            <PanelTableLabel>
              <MutedText>Degree</MutedText>
            </PanelTableLabel>
            <td>{info.about.education.university.degree}</td>
          </tr>
          <tr>
            <PanelTableLabel>
              <MutedText>Major</MutedText>
            </PanelTableLabel>
            <td>{info.about.education.university.major}</td>
          </tr>
          <tr>
            <PanelTableLabel>
              <MutedText>Concentration</MutedText>
            </PanelTableLabel>
            <td>{info.about.education.university.concentration}</td>
          </tr>
        </PanelTableContainer>
      </PanelContainer>
    </Panel>
  );
};

export default React.memo(Certifications);
