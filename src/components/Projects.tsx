import React from "react";
import styled from "styled-components";
import FoodieLogo from "../image/Foodie.png";
import DatApexLogo from "../image/DatApex.png";

import { IndexType } from "../views/window/ProjectsWindow";
import { MutedText, TwoColumnsGrid } from "../GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

type ProjectsProps = {
  click: (name: IndexType) => void;
};

const IconListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px;
`;

const IconContainer = styled.div<{ noWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ noWidth }) => (noWidth ? undefined : "60px")};
  justify-content: center;
  align-items: center;
  padding: 2px;
  cursor: pointer;
`;

const IconLogoImage = styled.img`
  width: 90%;
  height: 90%;
  margin-bottom: 4px;
`;

const IconLabel = styled.div`
  font-size: 0.75rem;
`;

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

export const Projects: React.FC<ProjectsProps> = ({ click }) => {
  return (
    <>
      <IconListContainer>
        <IconContainer onClick={() => click("WebProjects")}>
          <img
            src="https://img.icons8.com/color/48/000000/mac-folder.png"
            alt="Folder"
          />
          <IconLabel>Web</IconLabel>
        </IconContainer>
        <IconContainer onClick={() => click("MobileProjects")}>
          <img
            src="https://img.icons8.com/color/48/000000/mac-folder.png"
            alt="Folder"
          />
          <IconLabel>Mobile</IconLabel>
        </IconContainer>
      </IconListContainer>
    </>
  );
};

export const WebProjects: React.FC<ProjectsProps> = ({ click }) => {
  return (
    <>
      <IconListContainer>
        <IconContainer onClick={() => click("DatApex")}>
          <IconLogoImage src={DatApexLogo} alt="DatApex" />
          <IconLabel>DatApex</IconLabel>
        </IconContainer>
        <IconContainer onClick={() => click("Portfolio")}>
          <img
            src="https://img.icons8.com/color/48/000000/code-file.png"
            alt="code-file"
          />
          <IconLabel>Portfolio</IconLabel>
        </IconContainer>
      </IconListContainer>
    </>
  );
};

export const DatApex = () => {
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

export const Portfolio = () => {
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
          <div>This site</div>
        </DescriptionRow>
      </DescriptionContainer>
    </ContentContainer>
  );
};

export const MobileProjects: React.FC<ProjectsProps> = ({ click }) => {
  return (
    <>
      <IconListContainer>
        <IconContainer onClick={() => click("Foodie")}>
          <IconLogoImage src={FoodieLogo} alt="Foodie" />
          <IconLabel>Foodie</IconLabel>
        </IconContainer>
      </IconListContainer>
    </>
  );
};

export const Foodie = () => {
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
