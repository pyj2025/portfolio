import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { MutedText, TwoColumnsGrid } from "../../GlobalStyle";

const ContentContainer = styled(TwoColumnsGrid)`
  margin: 10px;
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

const Portfolio: React.FC = () => {
  return (
    <ContentContainer>
      <div>
        <img
          src="https://img.icons8.com/color/96/000000/code-file.png"
          alt="code-file"
        />
      </div>
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
