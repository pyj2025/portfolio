import React from 'react';
import info from '../../info.json';
import { Panel, PanelContainer } from '../../GlobalStyle';
import { getIcon } from '../getIcon';
import ProjectDescriptionTable from './ProjectDescriptionTable';

const Tippy: React.FC = () => {
  return (
    <Panel>
      <PanelContainer>{getIcon('CodeFile')}</PanelContainer>
      <PanelContainer>
        <ProjectDescriptionTable
          name={info.project.Tippy.name}
          link={info.project.Tippy.link}
          stack={info.project.Tippy.stack}
          details={info.project.Tippy.details}
        />
      </PanelContainer>
    </Panel>
  );
};

export default React.memo(Tippy);
