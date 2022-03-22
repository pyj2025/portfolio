import React from "react";
import FoodieLogo from "../../image/Foodie.png";

import {
  PanelContainer,
  PanelDescriptionContainer,
  PanelDescriptionRow,
  LinkLabel,
  PanelLogoContainer,
  PanelLogoImage,
  MutedText,
} from "../../GlobalStyle";

const Foodie: React.FC = () => {
  return (
    <PanelContainer>
      <PanelLogoContainer>
        <PanelLogoImage src={FoodieLogo} alt="Foodie" />
      </PanelLogoContainer>
      <PanelDescriptionContainer>
        <PanelDescriptionRow>
          <MutedText>Name</MutedText>
          <div>Foodie</div>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <MutedText>Link</MutedText>
          <LinkLabel>###</LinkLabel>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <MutedText>Stack</MutedText>
          <div>Swift, Firebase, Yelp API, and Google API</div>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <MutedText>Detail</MutedText>
          <div>
            An application that recommends the dining places based on users’
            preferences and connects users with QR code.
          </div>
        </PanelDescriptionRow>
      </PanelDescriptionContainer>
    </PanelContainer>
  );
};

export default Foodie;
