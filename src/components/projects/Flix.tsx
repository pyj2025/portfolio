import React from 'react';
import info from '../../info.json';
import { Panel, PanelContainer } from '../../GlobalStyle';
import { getIcon } from '../getIcon';
import ProjectDescriptionTable from './ProjectDescriptionTable';

const Flix: React.FC = () => {
  return (
    <Panel>
      <PanelContainer>{getIcon('CodeFile')}</PanelContainer>
      <PanelContainer>
        <ProjectDescriptionTable
          name={info.project.Flix.name}
          link={info.project.Flix.link}
          stack={info.project.Flix.stack}
          details={info.project.Flix.details}
        />
      </PanelContainer>
    </Panel>
  );
};

export default React.memo(Flix);
