import React from 'react';
import info from '../../info.json';
import { Panel, PanelContainer } from '../../GlobalStyle';
import { getIcon } from '../getIcon';
import ProjectDescriptionTable from './ProjectDescriptionTable';

const Portfolio: React.FC = () => {
  return (
    <Panel>
      <PanelContainer>{getIcon('CodeFile')}</PanelContainer>
      <PanelContainer>
        <ProjectDescriptionTable
          name={info.project.Portfolio.name}
          link={info.project.Portfolio.link}
          stack={info.project.Portfolio.stack}
          details={info.project.Portfolio.details}
        />
      </PanelContainer>
    </Panel>
  );
};

export default React.memo(Portfolio);
