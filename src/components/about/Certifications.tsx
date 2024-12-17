import React from 'react';
import styled from 'styled-components';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  LinkLabel,
  MutedText,
  Panel,
  PanelContainer,
  PanelTableContainer,
  PanelTableLabel,
} from '../../GlobalStyle';
import info from '../../info.json';
import GenerativeAIFundamentals from '../../image/certifications/GenerativeAIFundamentals';

const Certifications: React.FC = () => {
  return (
    <Panel>
      <PanelContainer>
        <GenerativeAIFundamentals />
      </PanelContainer>
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
            <td>
              <LinkLabel href={info.about.certifications.link}>
                <span>
                  Link <FontAwesomeIcon icon={faExternalLinkAlt as IconProp} />
                </span>
              </LinkLabel>
            </td>
          </tr>
        </PanelTableContainer>
      </PanelContainer>
    </Panel>
  );
};

export default React.memo(Certifications);
