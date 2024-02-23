import React from 'react';
import info from '../../info.json';
import ParstagramLogo from '../../image/projects/Parstagram.png';
import { Panel, PanelLogoImage, PanelContainer } from '../../GlobalStyle';
import ProjectDescriptionTable from './ProjectDescriptionTable';

const Parstagram: React.FC = () => {
  return (
    <Panel>
      <PanelContainer>
        <PanelLogoImage src={ParstagramLogo} alt="Parstagram" />
      </PanelContainer>
      <ProjectDescriptionTable
        name={info.project.Parstagram.name}
        link={info.project.Parstagram.link}
        stack={info.project.Parstagram.stack}
        details={info.project.Parstagram.details}
      />
    </Panel>
  );
};

export default React.memo(Parstagram);
