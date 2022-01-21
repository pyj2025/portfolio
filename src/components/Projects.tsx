import React from "react";
import styled from "styled-components";

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

const IconLabel = styled.div`
  font-size: 0.75rem;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10px;
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

export const MobileProjects: React.FC<ProjectsProps> = ({ click }) => {
  return (
    <>
      <IconListContainer>
        <IconContainer onClick={() => click("Foodie")}>
          <img
            src="https://img.icons8.com/color/48/000000/code-file.png"
            alt="Folder"
          />
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
        <div>Image</div>
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
