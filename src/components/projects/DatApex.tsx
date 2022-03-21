import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import DatApexLogo from "../../image/DatApex.png";

import { MutedText } from "../../GlobalStyle";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  min-width: 20rem;
  margin: 10px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const LogoImage = styled.img`
  width: 150px;
  height: 150px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const DescriptionRow = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin-bottom: 4px;
`;

const LinkLabel = styled.a`
  color: white;
  text-decoration: none;
`;

const DatApex: React.FC = () => {
  return (
    <ContentContainer>
      <LogoContainer>
        <LogoImage src={DatApexLogo} alt="DatApex" />
      </LogoContainer>
      <DescriptionContainer>
        <DescriptionRow>
          <MutedText>Name</MutedText>
          <div>DatApex</div>
        </DescriptionRow>
        <DescriptionRow>
          <MutedText>Link</MutedText>
          <LinkLabel href="https://github.com/SeoHyunAhn/DatApex">
            <span>
              Link <FontAwesomeIcon icon={faExternalLinkAlt} />
            </span>
          </LinkLabel>
        </DescriptionRow>
        <DescriptionRow>
          <MutedText>Stack</MutedText>
          <div>React, Django, Bootstrap</div>
        </DescriptionRow>
        <DescriptionRow>
          <MutedText>Details</MutedText>
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
