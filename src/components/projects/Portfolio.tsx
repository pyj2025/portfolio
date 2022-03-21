import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
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

const Portfolio: React.FC = () => {
  return (
    <ContentContainer>
      <LogoContainer>
        <LogoImage
          src="https://img.icons8.com/color/96/000000/code-file.png"
          alt="code-file"
        />
      </LogoContainer>
      <DescriptionContainer>
        <DescriptionRow>
          <MutedText>Name</MutedText>
          <div>Joon's Portfolio</div>
        </DescriptionRow>
        <DescriptionRow>
          <MutedText>Link</MutedText>
          <a href="https://pyj2025.github.io/portfolio/">
            <span>
              Link <FontAwesomeIcon icon={faExternalLinkAlt} />
            </span>
          </a>
        </DescriptionRow>
        <DescriptionRow>
          <MutedText>Stack</MutedText>
          <div>React, Typescript, Styled-components</div>
        </DescriptionRow>
        <DescriptionRow>
          <MutedText>Detail</MutedText>
          <div>
            Joon's portfolio aka this site. It presents who am I, what skills I
            have, and what kind of work experience I have. Also, it provides the
            contact methods.
          </div>
        </DescriptionRow>
      </DescriptionContainer>
    </ContentContainer>
  );
};

export default Portfolio;
