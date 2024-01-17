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
  PanelLogoImage,
} from '../../GlobalStyle';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import TwitterLogo from '../../image/projects/Twitter.png';

const Twitter: React.FC = () => {
  return (
    <PanelContainer>
      <PanelLogoContainer>
        <PanelLogoImage src={TwitterLogo} alt="Twitter" />
      </PanelLogoContainer>
      <PanelDescriptionContainer>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Name</PanelDescriptionLabel>
          <PanelDescriptionText>
            {info.project.Twitter.name}
          </PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Link</PanelDescriptionLabel>
          <LinkLabel href={info.project.Twitter.link}>
            <span>
              Link <FontAwesomeIcon icon={faExternalLinkAlt as IconProp} />
            </span>
          </LinkLabel>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Stack</PanelDescriptionLabel>
          <PanelDescriptionText>
            {info.project.Twitter.stack.map((value, idx) =>
              idx === info.project.Flix.stack.length - 1 ? value : value + ', '
            )}
          </PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Detail</PanelDescriptionLabel>
          <PanelDescriptionText>
            {info.project.Twitter.details}
          </PanelDescriptionText>
        </PanelDescriptionRow>
      </PanelDescriptionContainer>
    </PanelContainer>
  );
};

export default React.memo(Twitter);
