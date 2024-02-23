import React from 'react';
import info from '../../info.json';
import { Panel, PanelLogoImage, PanelContainer } from '../../GlobalStyle';
import TwitterLogo from '../../image/projects/Twitter.png';
import ProjectDescriptionTable from './ProjectDescriptionTable';

const Twitter: React.FC = () => {
  return (
    <Panel>
      <PanelContainer>
        <PanelLogoImage src={TwitterLogo} alt="Twitter" />
      </PanelContainer>
      <PanelContainer>
        <ProjectDescriptionTable
          name={info.project.Twitter.name}
          link={info.project.Twitter.link}
          stack={info.project.Twitter.stack}
          details={info.project.Twitter.details}
        />
      </PanelContainer>
    </Panel>
  );
};

export default React.memo(Twitter);
