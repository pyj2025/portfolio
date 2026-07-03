import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { getIcon } from "../getIcon";
import useAboutStore from "../../utils/useAboutStore";
import useSkillsStore from "../../utils/useSkillsStore";
import useProjectsStore from "../../utils/useProjectsStore";
import useResumeStore from "../../utils/useResumeStore";
import info from "../../info.json";

const WindowMenuItemStyle =
  "relative flex flex-col justify-center items-center text-center text-white mx-auto box-border transition-all duration-200 rounded-2xl p-3 cursor-pointer hover:bg-white/20 hover:scale-105 active:scale-95";

const ExternalLinkMenuItemStyle =
  "flex flex-col justify-center items-center text-center text-white mx-auto box-border transition-all duration-200 rounded-2xl p-3 no-underline cursor-pointer hover:bg-white/20 hover:scale-105 active:scale-95";

const IconStyle = "absolute h-1 w-1 pt-14 text-gray-400";

const DockMenu: React.FC = () => {
  const { isAboutMinimized, openAbout } = useAboutStore(state => state);
  const { isSkillsMinimized, openSkills } = useSkillsStore(state => state);
  const { isProjectsMinimized, openProjects } = useProjectsStore(state => state);
  const { isResumeMinimized, openResume } = useResumeStore(state => state);

  const handleAboutClick = React.useCallback(() => {
    openAbout();
  }, [openAbout]);

  const handleSkillsClick = React.useCallback(() => {
    openSkills();
  }, [openSkills]);

  const handleProjectsClick = React.useCallback(() => {
    openProjects();
  }, [openProjects]);

  const handleResumeClick = React.useCallback(() => {
    openResume();
  }, [openResume]);

  const handleEmailClick = React.useCallback(() => {
    window.open(`mailto:${info.about.info.email}`);
  }, []);

  return (
    <div className="flex justify-center items-end w-full h-full">
      <div className="flex flex-row justify-center items-center gap-0.5 px-1.5 py-0.5 mb-2 rounded-[26px] border border-white/25 bg-white/15 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.3)]">
        <button title="About" onClick={handleAboutClick} className={WindowMenuItemStyle}>
          {getIcon("About")}
          {isAboutMinimized && (
            <FontAwesomeIcon icon={faCircle as IconProp} className={IconStyle} />
          )}
        </button>
        <button title="Skills" onClick={handleSkillsClick} className={WindowMenuItemStyle}>
          {getIcon("Skills")}
          {isSkillsMinimized && (
            <FontAwesomeIcon icon={faCircle as IconProp} className={IconStyle} />
          )}
        </button>
        <button title="Projects" onClick={handleProjectsClick} className={WindowMenuItemStyle}>
          {getIcon("Projects")}
          {isProjectsMinimized && (
            <FontAwesomeIcon icon={faCircle as IconProp} className={IconStyle} />
          )}
        </button>
        <button title="Resume" onClick={handleResumeClick} className={WindowMenuItemStyle}>
          {getIcon("Resume")}
          {isResumeMinimized && (
            <FontAwesomeIcon icon={faCircle as IconProp} className={IconStyle} />
          )}
        </button>
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

export default DockMenu;
