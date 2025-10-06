import React from "react";
import info from "../../../info.json";
import { getIcon } from "../../getIcon";
import ProjectDescriptionTable from "../ProjectDescriptionTable";

const ToonFlix: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center min-w-80 m-2.5">
      <div className="flex justify-center items-center m-2">{getIcon("CodeFile")}</div>
      <ProjectDescriptionTable
        name={info.project.ToonFlix.name}
        link={info.project.ToonFlix.link}
        stack={info.project.ToonFlix.stack}
        details={info.project.ToonFlix.details}
      />
    </div>
  );
};

export default React.memo(ToonFlix);
