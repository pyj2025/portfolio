import React from 'react';
import info from '../../info.json';

import { Panel, PanelContainer } from '../../GlobalStyle';
import { getIcon } from '../getIcon';
import ProjectDescriptionTable from './ProjectDescriptionTable';

const WebGame: React.FC = () => {
  return (
    <Panel>
      <PanelContainer>{getIcon('CodeFile')}</PanelContainer>
      <PanelContainer>
        <ProjectDescriptionTable
          name={info.project.WebGame.name}
          link={info.project.WebGame.link}
          stack={info.project.WebGame.stack}
          details={info.project.WebGame.details}
        />
      </PanelContainer>
    </Panel>
  );
};

export default React.memo(WebGame);
