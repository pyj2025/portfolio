import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import info from "../../info.json";
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
import { IconProp } from "@fortawesome/fontawesome-svg-core";

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
                : value + ", "
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

export default Portfolio;
