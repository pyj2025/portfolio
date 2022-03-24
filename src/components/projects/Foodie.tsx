import React from "react";
import FoodieLogo from "../../image/Foodie.png";

import {
  PanelContainer,
  PanelDescriptionContainer,
  PanelDescriptionRow,
  LinkLabel,
  PanelLogoContainer,
  PanelLogoImage,
  PanelDescriptionLabel,
  PanelDescriptionText,
} from "../../GlobalStyle";

const Foodie: React.FC = () => {
  return (
    <PanelContainer>
      <PanelLogoContainer>
        <PanelLogoImage src={FoodieLogo} alt="Foodie" />
      </PanelLogoContainer>
      <PanelDescriptionContainer>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Name</PanelDescriptionLabel>
          <PanelDescriptionText>Foodie</PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Link</PanelDescriptionLabel>
          <LinkLabel>###</LinkLabel>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Stack</PanelDescriptionLabel>
          <PanelDescriptionText>
            Swift, Firebase, Yelp API, and Google API
          </PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Detail</PanelDescriptionLabel>
          <PanelDescriptionText>
            An application that recommends the dining places based on users’
            preferences and connects users with QR code.
          </PanelDescriptionText>
        </PanelDescriptionRow>
      </PanelDescriptionContainer>
    </PanelContainer>
  );
};

export default Foodie;
