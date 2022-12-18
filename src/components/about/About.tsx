import React from "react";
import styled from "styled-components";
import {
  PanelDescriptionContainer,
  PanelDescriptionLabel,
  PanelDescriptionRow,
  PanelDescriptionText,
} from "../../GlobalStyle";
import info from "../../info.json";

const Container = styled(PanelDescriptionContainer)`
  margin: 10px;
`;

const About: React.FC = () => {
  return (
    <Container>
      <PanelDescriptionRow>
        <PanelDescriptionLabel>Name</PanelDescriptionLabel>
        <PanelDescriptionText>{`${info.about.info.name.firstName} ${info.about.info.name.lastName}`}</PanelDescriptionText>
      </PanelDescriptionRow>
      <PanelDescriptionRow>
        <PanelDescriptionLabel>Date of Birth</PanelDescriptionLabel>
        <PanelDescriptionText>{`${info.about.info.dateOfBirth.month} ${info.about.info.dateOfBirth.day} ${info.about.info.dateOfBirth.year}`}</PanelDescriptionText>
      </PanelDescriptionRow>
      <PanelDescriptionRow>
        <PanelDescriptionLabel>Phone</PanelDescriptionLabel>
        <PanelDescriptionText>
          {info.about.info.phoneNumber}
        </PanelDescriptionText>
      </PanelDescriptionRow>
      <PanelDescriptionRow>
        <PanelDescriptionLabel>Address</PanelDescriptionLabel>
        <div>
          <div>{info.about.info.address.address}</div>
          <div>{`${info.about.info.address.city}, ${info.about.info.address.state}, ${info.about.info.address.postalCode}`}</div>
        </div>
      </PanelDescriptionRow>
    </Container>
  );
};

export default About;
