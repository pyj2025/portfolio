import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import DatApexLogo from "../../image/DatApex.png";

import { MutedText, TwoColumnsGrid } from "../../GlobalStyle";

const ContentContainer = styled(TwoColumnsGrid)`
  margin: 10px;
`;

const LogoImage = styled.img`
  width: 95%;
  height: 95%;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DescriptionRow = styled.div`
  display: grid;
  grid-template-columns: 30% auto;
`;

const DatApex: React.FC = () => {
  return (
    <ContentContainer>
      <div>
        <LogoImage src={DatApexLogo} alt="DatApex" />
      </div>
      <DescriptionContainer>
        <DescriptionRow>
          <MutedText>Name</MutedText>
          <div>DatApex</div>
        </DescriptionRow>
        <DescriptionRow>
          <MutedText>Link</MutedText>
          <a href="https://github.com/SeoHyunAhn/DatApex">
            <span>
              Link <FontAwesomeIcon icon={faExternalLinkAlt} />
            </span>
          </a>
        </DescriptionRow>
        <DescriptionRow>
          <MutedText>Stack</MutedText>
          <div>React, Django, Bootstrap</div>
        </DescriptionRow>
        <DescriptionRow>
          <MutedText>Detail</MutedText>
          <div>
            A web application that provides different preprocessing algorithms
            which the users can run to modify their datasets and allow users to
            run different machine learning algorithms on datasets uploaded by
            them, and present accuracy plots/visualizations in a clean UI
          </div>
        </DescriptionRow>
      </DescriptionContainer>
    </ContentContainer>
  );
};

export default DatApex;
