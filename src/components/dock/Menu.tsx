import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { getIcon } from "../getIcon";
import useAboutStore from "../../utils/useAboutStore";
import useSkillsStore from "../../utils/useSkillsStore";
import useProjectsStore from "../../utils/useProjectsStore";

const WindowMenuItemStyle =
  "relative flex flex-col justify-center items-center text-center text-white mx-auto box-border transition-colors duration-200 rounded-sm p-4 cursor-pointer hover:bg-yellow-50/10";

const ExternalLinkMenuItemStyle =
  "flex flex-col justify-center items-center text-center text-white mx-auto box-border transition-colors duration-200 rounded-sm p-4 no-underline cursor-pointer hover:bg-yellow-50/10";

const Menu: React.FC = () => {
  const { isAboutMinimized, openAbout } = useAboutStore(state => state);
  const { isSkillsMinimized, openSkills } = useSkillsStore(state => state);
  const { isProjectsMinimized, openProjects } = useProjectsStore(state => state);

  const handleAboutClick = React.useCallback(() => {
    openAbout();
  }, [openAbout]);

  const handleSkillsClick = React.useCallback(() => {
    openSkills();
  }, [openSkills]);

  const handleProjectsClick = React.useCallback(() => {
    openProjects();
  }, [openProjects]);

  const handleEmailClick = React.useCallback(() => {
    window.open("mailto:pyj2025@gmail.com");
  }, []);

  return (
    <div className="flex justify-center items-end w-full h-full">
      <div className="flex flex-row justify-center items-center rounded-md shadow-2xl bg-yellow-50/10 backdrop-blur-md">
        <button title="About" onClick={handleAboutClick} className={WindowMenuItemStyle}>
          {getIcon("About")}
          {isAboutMinimized ? (
            <FontAwesomeIcon
              icon={faCircle as IconProp}
              className="absolute h-1 w-1 pt-14 text-gray-400"
            />
          ) : null}
        </button>
        <button title="Skills" onClick={handleSkillsClick} className={WindowMenuItemStyle}>
          {getIcon("Skills")}
          {isSkillsMinimized ? (
            <FontAwesomeIcon
              icon={faCircle as IconProp}
              className="absolute h-1 w-1 pt-14 text-gray-400"
            />
          ) : null}
        </button>
        <button title="Projects" onClick={handleProjectsClick} className={WindowMenuItemStyle}>
          {getIcon("Projects")}
          {isProjectsMinimized ? (
            <FontAwesomeIcon
              icon={faCircle as IconProp}
              className="absolute h-1 w-1 pt-14 text-gray-400"
            />
          ) : null}
        </button>
        <a
          title="Resume"
          href="https://drive.google.com/file/d/14bb5ogfmAumTw7cMA_0PEUVwsPE_mOd-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={ExternalLinkMenuItemStyle}
        >
          {getIcon("Resume")}
        </a>
        <a
          title="Github"
          href="https://github.com/pyj2025"
          target="_blank"
          rel="noopener noreferrer"
          className={ExternalLinkMenuItemStyle}
        >
          {getIcon("Github")}
        </a>
        <a
          title="Linkedin"
          href="https://www.linkedin.com/in/devjoon/"
          target="_blank"
          rel="noopener noreferrer"
          className={ExternalLinkMenuItemStyle}
        >
          {getIcon("Linkedin")}
        </a>
        <a
          title="Facebook"
          href="https://www.facebook.com/youngjoon.park.71"
          target="_blank"
          rel="noopener noreferrer"
          className={ExternalLinkMenuItemStyle}
        >
          {getIcon("Facebook")}
        </a>
        <button title="Email" onClick={handleEmailClick} className={ExternalLinkMenuItemStyle}>
          {getIcon("Email")}
        </button>
      </div>
    </div>
  );
};

export default Menu;
