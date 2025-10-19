import React from "react";
import info from "../../../info.json";
import ParstagramLogo from "../../../image/projects/Parstagram.png";
import ProjectDescriptionTable from "../ProjectDescriptionTable";

const Parstagram: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center min-w-80 m-2.5">
      <div className="flex justify-center items-center m-2">
        <img src={ParstagramLogo} alt="Parstagram" className="w-36 h-36" />
      </div>
      <ProjectDescriptionTable
        name={info.project.Parstagram.name}
        link={info.project.Parstagram.link}
        stack={info.project.Parstagram.stack}
        details={info.project.Parstagram.details}
      />
    </div>
  );
};

export default React.memo(Parstagram);
