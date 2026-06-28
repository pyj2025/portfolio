import React from "react";
import info from "../../info.json";
import { getIcon } from "../getIcon";
import ProjectDescriptionTable from "./ProjectDescriptionTable";
import DatApexLogo from "../../image/projects/DatApex.png";
import FoodieLogo from "../../image/projects/Foodie.png";
import GitCardLogo from "../../image/projects/GitCard.png";
import MovieNextLogo from "../../image/projects/Movie.png";
import ParstagramLogo from "../../image/projects/Parstagram.png";
import TwitterLogo from "../../image/projects/Twitter.png";

export type ProjectKey = keyof typeof info.project;

const PROJECT_LOGOS: Partial<Record<ProjectKey, string>> = {
  DatApex: DatApexLogo,
  Foodie: FoodieLogo,
  GitCard: GitCardLogo,
  MovieNext: MovieNextLogo,
  Parstagram: ParstagramLogo,
  Twitter: TwitterLogo,
};

type ProjectDetailProps = {
  name: ProjectKey;
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({ name }) => {
  const project = info.project[name];
  const logo = PROJECT_LOGOS[name];

  return (
    <div className="flex flex-col flex-wrap justify-center min-w-80 m-2.5">
      <div className="flex justify-center items-center m-2">
        {logo ? (
          <img src={logo} alt={project.name} className="w-36 h-36" />
        ) : (
          getIcon("CodeFile")
        )}
      </div>
      <ProjectDescriptionTable
        name={project.name}
        link={project.link}
        url={"url" in project ? project.url : undefined}
        stack={project.stack}
        details={project.details}
      />
    </div>
  );
};

export default React.memo(ProjectDetail);
