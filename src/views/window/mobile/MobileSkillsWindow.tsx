import React from "react";
import AppWindow from "../../../components/AppWindow";
import { SkillsIndexType, ViewMode } from "../../../types";
import {
  MobileBodyContent,
  MobileMenuItemLabel,
  MobileWindowBody,
  MobileWindowMenuItem,
} from "../../../GlobalStyle";
import { BackEnd, FrontEnd, Mobile, ProgrammingLanguage } from "../../../components/skills";
import { getIcon } from "../../../components/getIcon";
import useNavHistory from "../../../utils/useNavHistory";
import MobileSkillsNavbar from "../../../components/skills/MobileSkillsNavbar";
import { MobilePanel } from "../../../components";

type MobileWindowMenuProps = {
  onClick: (index: SkillsIndexType) => void;
};

const MobileSkillsWindowMenu: React.FC<MobileWindowMenuProps> = React.memo(({ onClick }) => {
  return (
    <>
      <MobileWindowMenuItem onClick={() => onClick("Front")}>
        {getIcon("Folder")}
        <MobileMenuItemLabel>Front-End</MobileMenuItemLabel>
      </MobileWindowMenuItem>
      <MobileWindowMenuItem onClick={() => onClick("Back")} isEven>
        {getIcon("Folder")}
        <MobileMenuItemLabel>Back-End</MobileMenuItemLabel>
      </MobileWindowMenuItem>
      <MobileWindowMenuItem onClick={() => onClick("Mobile")}>
        {getIcon("Folder")}
        <MobileMenuItemLabel>Mobile</MobileMenuItemLabel>
      </MobileWindowMenuItem>
      <MobileWindowMenuItem onClick={() => onClick("Programming")} isEven>
        {getIcon("CodeFile", 48)}
        <MobileMenuItemLabel>Programming Language</MobileMenuItemLabel>
      </MobileWindowMenuItem>
    </>
  );
});

const MobileSkillsWindow: React.FC = () => {
  const {
    current: index,
    navigate,
    back,
    forward,
    canBack,
    canForward,
  } = useNavHistory<SkillsIndexType>("Menu");
  const [view, setView] = React.useState<ViewMode>("icon");

  const handleClick = React.useCallback(
    (name: SkillsIndexType) => {
      navigate(name);
    },
    [navigate],
  );

  return (
    <AppWindow
      id="Skills"
      defaultSize={{ width: 500, height: 300 }}
      defaultPosition={{ x: 60, y: 60 }}
      minWidth={525}
      minHeight={300}
      nav={{ onBack: back, onForward: forward, canBack, canForward }}
      view={view}
      onViewChange={setView}
    >
      <MobileWindowBody className="h-full">
        <MobileSkillsNavbar index={index} onClick={handleClick} />
        <MobileBodyContent>
          {index === "Menu" ? (
            <MobileSkillsWindowMenu onClick={handleClick} />
          ) : (
            <MobilePanel onClick={() => handleClick("Menu")}>
              {index === "Front" && <FrontEnd view={view} />}
              {index === "Back" && <BackEnd view={view} />}
              {index === "Mobile" && <Mobile view={view} />}
              {index === "Programming" && <ProgrammingLanguage view={view} />}
            </MobilePanel>
          )}
        </MobileBodyContent>
      </MobileWindowBody>
    </AppWindow>
  );
};

export default MobileSkillsWindow;
