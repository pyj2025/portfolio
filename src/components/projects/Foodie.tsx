import React from "react";
import info from "../../info.json";
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
          <PanelDescriptionText>
            {info.project.Foodie.name}
          </PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Link</PanelDescriptionLabel>
          <LinkLabel>{info.project.Foodie.link}</LinkLabel>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Stack</PanelDescriptionLabel>
          <PanelDescriptionText>
            {info.project.Foodie.stack.map((value, idx) =>
              idx === info.project.Foodie.stack.length - 1
                ? value
                : value + ", "
            )}
          </PanelDescriptionText>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <PanelDescriptionLabel>Detail</PanelDescriptionLabel>
          <PanelDescriptionText>
            {info.project.Foodie.details}
          </PanelDescriptionText>
        </PanelDescriptionRow>
      </PanelDescriptionContainer>
    </PanelContainer>
  );
};

export default Foodie;
