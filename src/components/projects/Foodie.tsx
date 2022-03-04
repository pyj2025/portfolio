import React from "react";
import styled from "styled-components";
import FoodieLogo from "../../image/Foodie.png";

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

const Foodie: React.FC = () => {
  return (
    <>
      <ContentContainer>
        <div>
          <LogoImage src={FoodieLogo} alt="Foodie" />
        </div>
        <DescriptionContainer>
          <DescriptionRow>
            <MutedText>Name</MutedText>
            <div>Foodie</div>
          </DescriptionRow>
          <DescriptionRow>
            <MutedText>Link</MutedText>
            <div>###</div>
          </DescriptionRow>
          <DescriptionRow>
            <MutedText>Stack</MutedText>
            <div>Swift, Firebase, Yelp API, and Google API</div>
          </DescriptionRow>
          <DescriptionRow>
            <MutedText>Detail</MutedText>
            <div>
              An application that recommends the dining places based on users’
              preferences and connects users with QR code.
            </div>
          </DescriptionRow>
        </DescriptionContainer>
      </ContentContainer>
    </>
  );
};

export default Foodie;
