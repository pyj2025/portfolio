import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { getIcon } from "../getIcon";
import useWindowsStore from "../../utils/useWindowsStore";
import useAboutStore from "../../utils/useAboutStore";
import useSkillsStore from "../../utils/useSkillsStore";
import useProjectsStore from "../../utils/useProjectsStore";

const WindowMenuItemStyle =
  "flex flex-col justify-center items-center text-center mx-auto box-border transition-colors duration-200 rounded-sm p-4 no-underline cursor-pointer relative";

const IconStyle = "absolute h-1 w-1 pt-14 text-gray-400";

const MobileMenu: React.FC = () => {
  const { isAboutOpen, isAboutMinimized, toggleAboutOpen, closeAbout } = useAboutStore(
    state => state,
  );

  const { isSkillsOpen, isSkillsMinimized, toggleSkillsOpen, closeSkills } = useSkillsStore(
    state => state,
  );

  const { isProjectsOpen, isProjectsMinimized, toggleProjectsOpen, closeProjects } =
    useProjectsStore(state => state);

  const { isWelcomeWindowOpen, closeWelcomeWindow } = useWindowsStore(state => state);

  const handleAboutClick = React.useCallback(() => {
    if (isWelcomeWindowOpen) {
      closeWelcomeWindow();
    }
    if (isSkillsOpen) {
      closeSkills();
    }
    if (isProjectsOpen) {
      closeProjects();
    }

    toggleAboutOpen();
  }, [
    closeProjects,
    closeSkills,
    closeWelcomeWindow,
    isProjectsOpen,
    isSkillsOpen,
    isWelcomeWindowOpen,
    toggleAboutOpen,
  ]);

  const handleSkillsClick = React.useCallback(() => {
    if (isWelcomeWindowOpen) {
      closeWelcomeWindow();
    }
    if (isAboutOpen) {
      closeAbout();
    }
    if (isProjectsOpen) {
      closeProjects();
    }

    toggleSkillsOpen();
  }, [
    closeAbout,
    closeProjects,
    closeWelcomeWindow,
    isAboutOpen,
    isProjectsOpen,
    isWelcomeWindowOpen,
    toggleSkillsOpen,
  ]);

  const handleProjectsClick = React.useCallback(() => {
    if (isWelcomeWindowOpen) {
      closeWelcomeWindow();
    }
    if (isAboutOpen) {
      closeAbout();
    }
    if (isSkillsOpen) {
      closeSkills();
    }

    toggleProjectsOpen();
  }, [
    closeAbout,
    closeSkills,
    closeWelcomeWindow,
    isAboutOpen,
    isSkillsOpen,
    isWelcomeWindowOpen,
    toggleProjectsOpen,
  ]);

  return (
    <div className="flex justify-center w-full h-20">
      <div className="flex flex-row justify-center items-center rounded-2xl shadow-2xl bg-yellow-50 bg-opacity-10 backdrop-blur-sm">
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
      </div>
    </div>
  );
};

export default React.memo(MobileMenu);
