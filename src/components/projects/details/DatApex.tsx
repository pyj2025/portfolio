import React from "react";
import info from "../../../info.json";
import DatApexLogo from "../../../image/projects/DatApex.png";
import ProjectDescriptionTable from "../ProjectDescriptionTable";

const DatApex: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center min-w-80 m-2.5">
      <div className="flex justify-center items-center m-2">
        <img src={DatApexLogo} alt="DatApex" className="w-36 h-36" />
      </div>
      <ProjectDescriptionTable
        name={info.project.DatApex.name}
        link={info.project.DatApex.link}
        stack={info.project.DatApex.stack}
        details={info.project.DatApex.details}
      />
    </div>
  );
};

export default React.memo(DatApex);
