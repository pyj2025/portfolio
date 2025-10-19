import React from "react";
import info from "../../../info.json";
import TwitterLogo from "../../../image/projects/Twitter.png";
import ProjectDescriptionTable from "../ProjectDescriptionTable";

const Twitter: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center min-w-80 m-2.5">
      <div className="flex justify-center items-center m-2">
        <img src={TwitterLogo} alt="Twitter" className="w-36 h-36" />
      </div>
      <ProjectDescriptionTable
        name={info.project.Twitter.name}
        link={info.project.Twitter.link}
        stack={info.project.Twitter.stack}
        details={info.project.Twitter.details}
      />
    </div>
  );
};

export default React.memo(Twitter);
