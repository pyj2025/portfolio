import React from 'react';
import info from '../../info.json';
import MovieNextLogo from '../../image/projects/Movie.png';
import { Panel, PanelLogoImage, PanelContainer } from '../../GlobalStyle';
import ProjectDescriptionTable from './ProjectDescriptionTable';

const MovieNext: React.FC = () => {
  return (
    <Panel>
      <PanelContainer>
        <PanelLogoImage src={MovieNextLogo} alt="MovieNext" />
      </PanelContainer>
      <ProjectDescriptionTable
        name={info.project.MovieNext.name}
        link={info.project.MovieNext.link}
        stack={info.project.MovieNext.stack}
        details={info.project.MovieNext.details}
      />
    </Panel>
  );
};

export default React.memo(MovieNext);
