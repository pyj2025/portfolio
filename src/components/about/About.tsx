import React from "react";
import styled from "styled-components";
import {
  PanelDescriptionContainer,
  PanelDescriptionLabel,
  PanelDescriptionRow,
  PanelDescriptionText,
} from "../../GlobalStyle";

const Container = styled(PanelDescriptionContainer)`
  margin: 10px;
`;

const About: React.FC = () => {
  return (
    <Container>
      <PanelDescriptionRow>
        <PanelDescriptionLabel>Name</PanelDescriptionLabel>
        <PanelDescriptionText>Youngjoon Park</PanelDescriptionText>
      </PanelDescriptionRow>
      <PanelDescriptionRow>
        <PanelDescriptionLabel>Date of Birth</PanelDescriptionLabel>
        <PanelDescriptionText>Jan.17.1994</PanelDescriptionText>
      </PanelDescriptionRow>
      <PanelDescriptionRow>
        <PanelDescriptionLabel>Phone</PanelDescriptionLabel>
        <PanelDescriptionText>(+1) 312-937-4435</PanelDescriptionText>
      </PanelDescriptionRow>
      <PanelDescriptionRow>
        <PanelDescriptionLabel>Address</PanelDescriptionLabel>
        <div>
          <div>25 W Randolph St Apt 903,</div>
          <div>Chicago, IL, 60601</div>
        </div>
      </PanelDescriptionRow>
    </Container>
  );
};

export default About;
