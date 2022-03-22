import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import {
  PanelContainer,
  PanelDescriptionContainer,
  PanelDescriptionRow,
  LinkLabel,
  PanelLogoContainer,
  PanelLogoImage,
  MutedText,
} from "../../GlobalStyle";

const Portfolio: React.FC = () => {
  return (
    <PanelContainer>
      <PanelLogoContainer>
        <PanelLogoImage
          src="https://img.icons8.com/color/96/000000/code-file.png"
          alt="code-file"
        />
      </PanelLogoContainer>
      <PanelDescriptionContainer>
        <PanelDescriptionRow>
          <MutedText>Name</MutedText>
          <div>Joon's Portfolio</div>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <MutedText>Link</MutedText>
          <LinkLabel href="https://pyj2025.github.io/portfolio/">
            <span>
              Link <FontAwesomeIcon icon={faExternalLinkAlt} />
            </span>
          </LinkLabel>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <MutedText>Stack</MutedText>
          <div>React, Typescript, Styled-components</div>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <MutedText>Detail</MutedText>
          <div>
            Joon's portfolio aka this site. It presents who am I, what skills I
            have, and what kind of work experience I have. Also, it provides my
            contact methods.
          </div>
        </PanelDescriptionRow>
      </PanelDescriptionContainer>
    </PanelContainer>
  );
};

export default Portfolio;
