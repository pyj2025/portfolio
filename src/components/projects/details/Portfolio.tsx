import React from "react";
import info from "../../../info.json";
import { getIcon } from "../../getIcon";
import ProjectDescriptionTable from "../ProjectDescriptionTable";

const Portfolio: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center min-w-80 m-2.5">
      <div className="flex justify-center items-center m-2">{getIcon("CodeFile")}</div>
      <ProjectDescriptionTable
        name={info.project.Portfolio.name}
        link={info.project.Portfolio.link}
        stack={info.project.Portfolio.stack}
        details={info.project.Portfolio.details}
      />
    </div>
  );
};

export default React.memo(Portfolio);
