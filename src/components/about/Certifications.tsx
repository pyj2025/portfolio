import React from 'react';
import styled from 'styled-components';
import {
  MutedText,
  Panel,
  PanelContainer,
  PanelTableContainer,
  PanelTableLabel,
} from '../../GlobalStyle';
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
            <td>{info.about.certifications.name}</td>
          </tr>
          <tr>
            <PanelTableLabel>
              <MutedText>Issued On</MutedText>
            </PanelTableLabel>
            <td>{info.about.certifications.issuedDate}</td>
          </tr>
          <tr>
            <PanelTableLabel>
              <MutedText>Expires On</MutedText>
            </PanelTableLabel>
            <td>{info.about.certifications.expiresDate}</td>
          </tr>
          <tr>
            <PanelTableLabel>
              <MutedText>Link</MutedText>
            </PanelTableLabel>
            <td>{info.about.certifications.link}</td>
          </tr>
        </PanelTableContainer>
      </PanelContainer>
    </Panel>
  );
};

export default React.memo(Certifications);
