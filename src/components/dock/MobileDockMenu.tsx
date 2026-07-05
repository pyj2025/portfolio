import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { getIcon } from "../getIcon";
import { AppId } from "../../types";
import useWindowsStore from "../../utils/useWindowsStore";
import {
  APPS,
  getApp,
  useAboutWindow,
  useSkillsWindow,
  useProjectsWindow,
} from "../../utils/appRegistry";

const WindowMenuItemStyle =
  "flex flex-col justify-center items-center text-center mx-auto box-border transition-colors duration-200 rounded-sm p-4 no-underline cursor-pointer relative";

const IconStyle = "absolute h-1 w-1 pt-14 text-gray-400";

// mobile shows one window at a time — opening an app closes everything else
const openExclusively = (id: AppId) => {
  const windowsStore = useWindowsStore.getState();
  if (windowsStore.isWelcomeWindowOpen) {
    windowsStore.closeWelcomeWindow();
  }
  APPS.forEach(app => {
    if (app.id !== id && app.store.getState().isOpen) {
      app.store.getState().close();
    }
  });
  getApp(id).store.getState().toggleOpen();
};

const MobileMenu: React.FC = () => {
  const isAboutMinimized = useAboutWindow(state => state.isMinimized);
  const isSkillsMinimized = useSkillsWindow(state => state.isMinimized);
  const isProjectsMinimized = useProjectsWindow(state => state.isMinimized);

  return (
    <div className="flex justify-center w-full h-20">
      <div className="flex flex-row justify-center items-center rounded-2xl shadow-2xl bg-yellow-50 bg-opacity-10 backdrop-blur-sm">
        <button
          title="About"
          onClick={() => openExclusively("About")}
          className={WindowMenuItemStyle}
        >
          {getIcon("About")}
          {isAboutMinimized && (
            <FontAwesomeIcon icon={faCircle as IconProp} className={IconStyle} />
          )}
        </button>
        <button
          title="Skills"
          onClick={() => openExclusively("Skills")}
          className={WindowMenuItemStyle}
        >
          {getIcon("Skills")}
          {isSkillsMinimized && (
            <FontAwesomeIcon icon={faCircle as IconProp} className={IconStyle} />
          )}
        </button>
        <button
          title="Projects"
          onClick={() => openExclusively("Projects")}
          className={WindowMenuItemStyle}
        >
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
