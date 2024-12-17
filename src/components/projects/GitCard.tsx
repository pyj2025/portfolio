import React from 'react';
import info from '../../info.json';
import GitCardLogo from '../../image/projects/GitCard.png';
import { Panel, PanelLogoImage, PanelContainer } from '../../GlobalStyle';
import ProjectDescriptionTable from './ProjectDescriptionTable';

const GitCard: React.FC = () => {
  return (
    <Panel>
      <PanelContainer>
        <PanelLogoImage src={GitCardLogo} alt="GitCard" />
      </PanelContainer>
      <ProjectDescriptionTable
        name={info.project.GitCard.name}
        link={info.project.GitCard.link}
        stack={info.project.GitCard.stack}
        details={info.project.GitCard.details}
      />
    </Panel>
  );
};

export default React.memo(GitCard);
