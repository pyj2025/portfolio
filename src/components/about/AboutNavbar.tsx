import React from "react";
import { AboutIndexType } from "../../types";
import { NavItmLabel, NavSectionLabel, WindowBodyNavItm, WindowBodyNavbar } from "../WindowChrome";
import { getNavIcon } from "../getIcon";
import { AboutNavItemType } from "./types";
import { ABOUT_NAV_ITEMS } from "./constants";

interface AboutNavbarProps {
  index: AboutIndexType;
  onClick: (name: AboutIndexType) => void;
}

const AboutNavbar: React.FC<AboutNavbarProps> = ({ index, onClick }) => {
  const isFocused = (item: AboutNavItemType): boolean => {
    if (item.id === "Experience" && index.startsWith("Experience:")) {
      return true;
    }
    return item.focusConditions?.includes(index) ?? false;
  };

  return (
    <WindowBodyNavbar>
      <NavSectionLabel>Favorites</NavSectionLabel>
      {ABOUT_NAV_ITEMS.map((item, idx) => (
        <WindowBodyNavItm
          key={item.id}
          first={idx === 0}
          onClick={() => onClick(item.id)}
          focus={isFocused(item)}
          isChild={item.isChild}
        >
          {getNavIcon(item.icon, isFocused(item))}
          <NavItmLabel>{item.label}</NavItmLabel>
        </WindowBodyNavItm>
      ))}
    </WindowBodyNavbar>
  );
};

export default React.memo(AboutNavbar);
