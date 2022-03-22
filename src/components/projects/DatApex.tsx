import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DatApexLogo from "../../image/DatApex.png";

import {
  PanelContainer,
  PanelDescriptionContainer,
  PanelDescriptionRow,
  LinkLabel,
  PanelLogoContainer,
  PanelLogoImage,
  MutedText,
} from "../../GlobalStyle";

const DatApex: React.FC = () => {
  return (
    <PanelContainer>
      <PanelLogoContainer>
        <PanelLogoImage src={DatApexLogo} alt="DatApex" />
      </PanelLogoContainer>
      <PanelDescriptionContainer>
        <PanelDescriptionRow>
          <MutedText>Name</MutedText>
          <div>DatApex</div>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <MutedText>Link</MutedText>
          <LinkLabel href="https://github.com/SeoHyunAhn/DatApex">
            <span>
              Link <FontAwesomeIcon icon={faExternalLinkAlt} />
            </span>
          </LinkLabel>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <MutedText>Stack</MutedText>
          <div>React, Django, Bootstrap</div>
        </PanelDescriptionRow>
        <PanelDescriptionRow>
          <MutedText>Details</MutedText>
          <div>
            A web application that provides different preprocessing algorithms
            which the users can run to modify their datasets and allow users to
            run different machine learning algorithms on datasets uploaded by
            them, and present accuracy plots/visualizations in a clean UI
          </div>
        </PanelDescriptionRow>
      </PanelDescriptionContainer>
    </PanelContainer>
  );
};

export default DatApex;
