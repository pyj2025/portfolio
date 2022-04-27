import React from "react";
import styled from "styled-components";
import {
  PanelContainer,
  PanelDescriptionContainer,
  PanelDescriptionLabel,
  PanelDescriptionRow,
  PanelDescriptionText,
  PanelLogoContainer,
} from "../../GlobalStyle";
import PurdueLogo from "../../image/PurdueLogo.png";

const PurdueLogoImage = styled.img`
  background-color: white;
  width: 200px;
  height: 150px;
`;

const Education: React.FC = () => {
  return (
    <PanelContainer>
      <PanelLogoContainer>
        <PurdueLogoImage src={PurdueLogo} alt="Purdue" />
      </PanelLogoContainer>
      <PanelDescriptionContainer>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Name</PanelDescriptionLabel>
          <PanelDescriptionText bold>Purdue University</PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Graduated</PanelDescriptionLabel>
          <PanelDescriptionText>Dec. 2019</PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Details</PanelDescriptionLabel>
          <PanelDescriptionText>
            Bachelor of Science in Computer Science
          </PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Concentration</PanelDescriptionLabel>
          <PanelDescriptionText>Software Engineering</PanelDescriptionText>
        </PanelDescriptionRow>
      </PanelDescriptionContainer>
    </PanelContainer>
  );
};

export default Education;
