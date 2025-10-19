import React from "react";
import info from "../../../info.json";
import FoodieLogo from "../../../image/projects/Foodie.png";
import ProjectDescriptionTable from "../ProjectDescriptionTable";

const Foodie: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center min-w-80 m-2.5">
      <div className="flex justify-center items-center m-2">
        <img src={FoodieLogo} alt="Foodie" className="w-36 h-36" />
      </div>
      <ProjectDescriptionTable
        name={info.project.Foodie.name}
        link={info.project.Foodie.link}
        stack={info.project.Foodie.stack}
        details={info.project.Foodie.details}
      />
    </div>
  );
};

export default React.memo(Foodie);
