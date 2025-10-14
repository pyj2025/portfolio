import "rc-menu/assets/index.css";

import React from "react";
import Menu, { Divider, MenuItem } from "rc-menu";
import { Clock } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { BoldText, MutedText } from "../../GlobalStyle";
import useScreenSize from "../../utils/useScreenSize";
import useClickOutside from "../../utils/useClickOutside";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import useWindowsStore from "../../utils/useWindowsStore";
import useAboutStore from "../../utils/useAboutStore";

const DesktopTopBar: React.FC = () => {
  const { width } = useScreenSize();

  const openAbout = useAboutStore(state => state.openAbout);
  const clearFocusWindows = useWindowsStore(state => state.clearFocusWindows);

  const mainMenuRef = React.useRef<HTMLDivElement | null>(null);

  const [menuOpen, setMenuOpen] = React.useState(false);

  useClickOutside(mainMenuRef, () => {
    setMenuOpen(false);
  });

  const handleClick = React.useCallback(() => {
    setMenuOpen(!menuOpen);
    clearFocusWindows();
  }, [menuOpen, clearFocusWindows]);

  const handleAbout = React.useCallback(() => {
    openAbout();
    setMenuOpen(false);
  }, [openAbout]);

  return (
    <div
      className="flex justify-start items-center bg-black bg-opacity-40 text-white h-12"
      style={{ width: `${width}px` }}
    >
      <div ref={mainMenuRef} className="pl-1">
        <button onClick={handleClick} className="bg-transparent border-0 text-white">
          <BoldText>Joon</BoldText>
        </button>
        {menuOpen && (
          <Menu
            className="absolute m-0.5"
            style={{
              padding: 0,
              border: 0,
            }}
          >
            <MenuItem key="about" onClick={handleAbout}>
              <div className="text-white">About Joon</div>
            </MenuItem>
            <Divider className="w-11/12 ml-2 mt-1 mb-1 opacity-70" />
            <MenuItem key="restart" onClick={() => window.location.reload()}>
              <div className="text-white">Restart</div>
            </MenuItem>
            <Divider className="w-11/12 ml-2 mt-1 mb-1 opacity-70" />
            <MenuItem
              key="close"
              onClick={() => {
                window.open("", "_self");
                window.close();
              }}
            >
              <div className="text-white">Close</div>
            </MenuItem>
          </Menu>
        )}
      </div>
      <div className="flex flex-row ml-auto">
        <div className="flex flex-row mr-2.5">
          <FontAwesomeIcon icon={faMapMarkerAlt as IconProp} className="pt-1 mr-1.5 opacity-50" />
          <MutedText>British Columbia, Canada</MutedText>
        </div>
        <div className="flex flex-row mr-2.5">
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default DesktopTopBar;
