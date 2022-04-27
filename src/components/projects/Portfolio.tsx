import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

import {
  PanelContainer,
  PanelDescriptionContainer,
  PanelDescriptionRow,
  LinkLabel,
  PanelLogoContainer,
  PanelDescriptionLabel,
  PanelDescriptionText,
} from "../../GlobalStyle";

const LogoImage = styled.img`
  width: 150px;
  height: 150px;
`;

const Portfolio: React.FC = () => {
  return (
    <PanelContainer>
      <PanelLogoContainer>
        <LogoImage
          src="https://img.icons8.com/color/96/000000/code-file.png"
          alt="code-file"
        />
      </PanelLogoContainer>
      <PanelDescriptionContainer>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Name</PanelDescriptionLabel>
          <PanelDescriptionText>Joon's Portfolio</PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Link</PanelDescriptionLabel>
          <LinkLabel href="https://pyj2025.github.io/portfolio/">
            <span>
              Link <FontAwesomeIcon icon={faExternalLinkAlt} />
            </span>
          </LinkLabel>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Stack</PanelDescriptionLabel>
          <PanelDescriptionText>
            React, Typescript, Styled-components
          </PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Detail</PanelDescriptionLabel>
          <PanelDescriptionText>
            Joon's portfolio aka this site. It presents who am I, what skills I
            have, and what kind of work experience I have. Also, it provides my
            contact methods.
          </PanelDescriptionText>
        </PanelDescriptionRow>
      </PanelDescriptionContainer>
    </PanelContainer>
  );
};

export default Portfolio;
