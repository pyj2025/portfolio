import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import info from '../../info.json';

import {
  PanelContainer,
  PanelDescriptionContainer,
  PanelDescriptionRow,
  LinkLabel,
  PanelLogoContainer,
  PanelDescriptionLabel,
  PanelDescriptionText,
} from '../../GlobalStyle';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { getIcon } from '../getIcon';

const Portfolio: React.FC = () => {
  return (
    <PanelContainer>
      <PanelLogoContainer>{getIcon('CodeFile')}</PanelLogoContainer>
      <PanelDescriptionContainer>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Name</PanelDescriptionLabel>
          <PanelDescriptionText>
            {info.project.Portfolio.name}
          </PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Link</PanelDescriptionLabel>
          <LinkLabel href={info.project.Portfolio.link}>
            <span>
              Link <FontAwesomeIcon icon={faExternalLinkAlt as IconProp} />
            </span>
          </LinkLabel>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Stack</PanelDescriptionLabel>
          <PanelDescriptionText>
            {info.project.Portfolio.stack.map((value, idx) =>
              idx === info.project.Portfolio.stack.length - 1
                ? value
                : value + ', '
            )}
          </PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Detail</PanelDescriptionLabel>
          <PanelDescriptionText>
            {info.project.Portfolio.details}
          </PanelDescriptionText>
        </PanelDescriptionRow>
      </PanelDescriptionContainer>
    </PanelContainer>
  );
};

export default React.memo(Portfolio);
