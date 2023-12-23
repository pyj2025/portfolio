import React from 'react';
import styled from 'styled-components';
import FoodieLogo from '../../image/projects/Foodie.png';
import DatApexLogo from '../../image/projects/DatApex.png';
import { IndexType } from '../../views/window/desktop/ProjectsWindow';
import { getIcon } from '../getIcon';

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
  width: ${({ noWidth }) => (noWidth ? undefined : '60px')};
  justify-content: center;
  align-items: center;
  padding: 2px;
  cursor: pointer;
`;

const IconLogoImage = styled.img`
  width: 3rem;
  height: 3rem;
  margin-bottom: 4px;
`;

const IconLabel = styled.div`
  font-size: 0.75rem;
`;

export const Projects: React.FC<ProjectsProps> = ({ click }) => {
  return (
    <>
      <IconListContainer>
        <IconContainer title="Web" onClick={() => click('WebProjects')}>
          {getIcon('Folder')}
          <IconLabel>Web</IconLabel>
        </IconContainer>
        <IconContainer title="Mobile" onClick={() => click('MobileProjects')}>
          {getIcon('Folder')}
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
        <IconContainer onClick={() => click('DatApex')}>
          <IconLogoImage src={DatApexLogo} alt="DatApex" />
          <IconLabel>DatApex</IconLabel>
        </IconContainer>
        <IconContainer onClick={() => click('Portfolio')}>
          {getIcon('CodeFile')}
          <IconLabel>Portfolio</IconLabel>
        </IconContainer>
      </IconListContainer>
    </>
  );
};

export const MobileProjects: React.FC<ProjectsProps> = ({ click }) => {
  return (
    <>
      <IconListContainer>
        <IconContainer onClick={() => click('Foodie')}>
          <IconLogoImage src={FoodieLogo} alt="Foodie" />
          <IconLabel>Foodie</IconLabel>
        </IconContainer>
      </IconListContainer>
    </>
  );
};
