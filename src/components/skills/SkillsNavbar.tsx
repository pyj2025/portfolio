import React from "react";
import { SkillsIndexType } from "../../types";
import { NavItmLabel, NavSectionLabel, WindowBodyNavItm, WindowBodyNavbar } from "../window/WindowChrome";
import { getNavIcon } from "../getIcon";
import { SKILLS_NAV_ITEMS } from "./constants";

interface SkillsNavbarProps {
  index: SkillsIndexType;
  onClick: (name: SkillsIndexType) => void;
}

const SkillsNavbar: React.FC<SkillsNavbarProps> = ({ index, onClick }) => {
  return (
    <WindowBodyNavbar>
      <NavSectionLabel>Favorites</NavSectionLabel>
      {SKILLS_NAV_ITEMS.map((item, idx) => (
        <WindowBodyNavItm
          key={item.id}
          first={idx === 0}
          onClick={() => onClick(item.id)}
          focus={index === item.id}
          title={item.title}
        >
          {getNavIcon(item.icon, index === item.id)}
          <NavItmLabel>{item.label}</NavItmLabel>
        </WindowBodyNavItm>
      ))}
    </WindowBodyNavbar>
  );
};

export default React.memo(SkillsNavbar);
