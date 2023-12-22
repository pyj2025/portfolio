import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import info from '../../info.json';
import DatApexLogo from '../../image/projects/DatApex.png';
import {
  PanelContainer,
  PanelDescriptionContainer,
  PanelDescriptionRow,
  LinkLabel,
  PanelLogoContainer,
  PanelLogoImage,
  PanelDescriptionLabel,
  PanelDescriptionText,
} from '../../GlobalStyle';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const DatApex: React.FC = () => {
  return (
    <PanelContainer>
      <PanelLogoContainer>
        <PanelLogoImage src={DatApexLogo} alt="DatApex" />
      </PanelLogoContainer>
      <PanelDescriptionContainer>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Name</PanelDescriptionLabel>
          <PanelDescriptionText>
            {info.project.DatApex.name}
          </PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Link</PanelDescriptionLabel>
          <LinkLabel href={info.project.DatApex.link}>
            <span>
              Link <FontAwesomeIcon icon={faExternalLinkAlt as IconProp} />
            </span>
          </LinkLabel>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Stack</PanelDescriptionLabel>
          <PanelDescriptionText>
            {info.project.DatApex.stack.map((value, idx) =>
              idx === info.project.DatApex.stack.length - 1
                ? value
                : value + ', '
            )}
          </PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Details</PanelDescriptionLabel>
          <PanelDescriptionText>
            {info.project.DatApex.details}
          </PanelDescriptionText>
        </PanelDescriptionRow>
      </PanelDescriptionContainer>
    </PanelContainer>
  );
};

export default DatApex;
