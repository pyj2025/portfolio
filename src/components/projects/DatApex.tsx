import React from 'react';
import info from '../../info.json';
import DatApexLogo from '../../image/projects/DatApex.png';
import { Panel, PanelLogoImage, PanelContainer } from '../../GlobalStyle';
import ProjectDescriptionTable from './ProjectDescriptionTable';

const DatApex: React.FC = () => {
  return (
    <Panel>
      <PanelContainer>
        <PanelLogoImage src={DatApexLogo} alt="DatApex" />
      </PanelContainer>
      <ProjectDescriptionTable
        name={info.project.DatApex.name}
        link={info.project.DatApex.link}
        stack={info.project.DatApex.stack}
        details={info.project.DatApex.details}
      />
    </Panel>
  );
};

export default React.memo(DatApex);
