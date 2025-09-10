import React from "react";
import info from "../../info.json";
import MovieNextLogo from "../../image/projects/Movie.png";
import ProjectDescriptionTable from "./ProjectDescriptionTable";

const MovieNext: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center min-w-80 m-2.5">
      <div className="flex justify-center items-center m-2">
        <img src={MovieNextLogo} alt="MovieNext" className="w-36 h-36" />
      </div>
      <ProjectDescriptionTable
        name={info.project.MovieNext.name}
        link={info.project.MovieNext.link}
        stack={info.project.MovieNext.stack}
        details={info.project.MovieNext.details}
      />
    </div>
  );
};

export default React.memo(MovieNext);
