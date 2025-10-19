import React from "react";
import info from "../../../info.json";
import GitCardLogo from "../../../image/projects/GitCard.png";
import ProjectDescriptionTable from "../ProjectDescriptionTable";

const GitCard: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center min-w-80 m-2.5">
      <div className="flex justify-center items-center m-2">
        <img src={GitCardLogo} alt="GitCard" className="w-36 h-36" />
      </div>
      <ProjectDescriptionTable
        name={info.project.GitCard.name}
        link={info.project.GitCard.link}
        url={info.project.GitCard.url}
        stack={info.project.GitCard.stack}
        details={info.project.GitCard.details}
      />
    </div>
  );
};

export default React.memo(GitCard);
