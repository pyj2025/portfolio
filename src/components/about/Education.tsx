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
import info from "../../info.json";

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
          <PanelDescriptionText bold>
            {info.about.education.university.name}
          </PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Graduated</PanelDescriptionLabel>
          <PanelDescriptionText>
            {`${info.about.education.university.graduateYear.month} ${info.about.education.university.graduateYear.year}`}
          </PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Details</PanelDescriptionLabel>
          <PanelDescriptionText>
            {info.about.education.university.details}
          </PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Concentration</PanelDescriptionLabel>
          <PanelDescriptionText>
            {info.about.education.university.concentration}
          </PanelDescriptionText>
        </PanelDescriptionRow>
      </PanelDescriptionContainer>
    </PanelContainer>
  );
};

export default Education;
