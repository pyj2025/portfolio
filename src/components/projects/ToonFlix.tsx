import React from 'react';
import info from '../../info.json';
import { Panel, PanelContainer } from '../../GlobalStyle';
import { getIcon } from '../getIcon';
import ProjectDescriptionTable from './ProjectDescriptionTable';

const ToonFlix: React.FC = () => {
  return (
    <Panel>
      <PanelContainer>{getIcon('CodeFile')}</PanelContainer>
      <PanelContainer>
        <ProjectDescriptionTable
          name={info.project.ToonFlix.name}
          link={info.project.ToonFlix.link}
          stack={info.project.ToonFlix.stack}
          details={info.project.ToonFlix.details}
        />
      </PanelContainer>
    </Panel>
  );
};

export default React.memo(ToonFlix);
