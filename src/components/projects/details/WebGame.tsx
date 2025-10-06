import React from "react";
import info from "../../../info.json";
import { getIcon } from "../../getIcon";
import ProjectDescriptionTable from "../ProjectDescriptionTable";

const WebGame: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center min-w-80 m-2.5">
      <div className="flex justify-center items-center m-2">{getIcon("CodeFile")}</div>
      <ProjectDescriptionTable
        name={info.project.WebGame.name}
        link={info.project.WebGame.link}
        stack={info.project.WebGame.stack}
        details={info.project.WebGame.details}
      />
    </div>
  );
};

export default React.memo(WebGame);
