import React from 'react';
import info from '../../info.json';
import FoodieLogo from '../../image/projects/Foodie.png';
import { Panel, PanelLogoImage, PanelContainer } from '../../GlobalStyle';
import ProjectDescriptionTable from './ProjectDescriptionTable';

const Foodie: React.FC = () => {
  return (
    <Panel>
      <PanelContainer>
        <PanelLogoImage src={FoodieLogo} alt="Foodie" />
      </PanelContainer>
      <ProjectDescriptionTable
        name={info.project.Foodie.name}
        link={info.project.Foodie.link}
        stack={info.project.Foodie.stack}
        details={info.project.Foodie.details}
      />
    </Panel>
  );
};

export default React.memo(Foodie);
