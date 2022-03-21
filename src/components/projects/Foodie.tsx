import React from "react";
import styled from "styled-components";
import FoodieLogo from "../../image/Foodie.png";

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

const Foodie: React.FC = () => {
  return (
    <ContentContainer>
      <LogoContainer>
        <LogoImage src={FoodieLogo} alt="Foodie" />
      </LogoContainer>
      <DescriptionContainer>
        <DescriptionRow>
          <MutedText>Name</MutedText>
          <div>Foodie</div>
        </DescriptionRow>
        <DescriptionRow>
          <MutedText>Link</MutedText>
          <LinkLabel>###</LinkLabel>
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
  );
};

export default Foodie;
