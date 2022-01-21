import React from "react";
import styled from "styled-components";
import FoodieLogo from "../image/Foodie.png";

import { IndexType } from "../views/ProjectsWindow";

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

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10px;
`;

const LogoImage = styled.img`
  width: 95%;
  height: 95%;
`;

type ProjectsProps = {
  click: (name: IndexType) => void;
};

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
          <img
            src="https://img.icons8.com/color/48/000000/code-file.png"
            alt="Folder"
          />
          <IconLabel>DatApex</IconLabel>
        </IconContainer>
        <IconContainer onClick={() => click("Portfolio")}>
          <img
            src="https://img.icons8.com/color/48/000000/code-file.png"
            alt="Folder"
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
      <div>Image</div>
      <div>
        <div>
          <div>
            <div>Name</div>
          </div>
          <div>DatApex</div>
        </div>
        <div>
          <div>Link</div>
          <div>###</div>
        </div>
        <div>
          <div>Detail</div>
          <div>###</div>
        </div>
        <div>
          <div>Stack</div>
          <div>React, Django, Bootstrap</div>
        </div>
      </div>
    </ContentContainer>
  );
};

export const Portfolio = () => {
  return (
    <ContentContainer>
      <div>Image</div>
      <div>
        <div>
          <div>
            <div>Name</div>
          </div>
          <div>Portfolio</div>
        </div>
        <div>
          <div>Link</div>
          <div>https://pyj2025.github.io/portfolio/</div>
        </div>
        <div>
          <div>Detail</div>
          <div>This site</div>
        </div>
        <div>
          <div>Stack</div>
          <div>React, Typescript, Styled-components</div>
        </div>
      </div>
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
        <div>
          <div>
            <div>
              <div>Name</div>
            </div>
            <div>Foodie</div>
          </div>
          <div>
            <div>Link</div>
            <div>###</div>
          </div>
          <div>
            <div>Detail</div>
            <div>###</div>
          </div>
          <div>
            <div>Stack</div>
            <div>Swift, Firebase</div>
          </div>
        </div>
      </ContentContainer>
    </>
  );
};
