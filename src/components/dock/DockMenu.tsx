import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { getIcon } from "../getIcon";
import {
  useAboutWindow,
  useSkillsWindow,
  useProjectsWindow,
  useResumeWindow,
} from "../../utils/appRegistry";
import info from "../../info.json";

const WindowMenuItemStyle =
  "relative flex flex-col justify-center items-center text-center text-white box-border transition-all duration-200 rounded-xl p-2 cursor-pointer origin-bottom hover:bg-white/15 hover:scale-110 active:scale-95";

const ExternalLinkMenuItemStyle =
  "flex flex-col justify-center items-center text-center text-white box-border transition-all duration-200 rounded-xl p-2 no-underline cursor-pointer origin-bottom hover:bg-white/15 hover:scale-110 active:scale-95";

const IconStyle = "absolute h-1 w-1 pt-14 text-gray-400";

const DockMenu: React.FC = () => {
  const { isMinimized: isAboutMinimized, open: handleAboutClick } =
    useAboutWindow(state => state);
  const { isMinimized: isSkillsMinimized, open: handleSkillsClick } =
    useSkillsWindow(state => state);
  const { isMinimized: isProjectsMinimized, open: handleProjectsClick } =
    useProjectsWindow(state => state);
  const { isMinimized: isResumeMinimized, open: handleResumeClick } =
    useResumeWindow(state => state);

  const handleEmailClick = React.useCallback(() => {
    window.open(`mailto:${info.about.info.email}`);
  }, []);

  return (
    <div className="flex justify-center items-end w-full h-full">
      <div className="flex flex-row justify-center items-end gap-1 px-2.5 py-1 mb-2 rounded-[26px] border border-white/25 bg-white/15 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.3)]">
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
