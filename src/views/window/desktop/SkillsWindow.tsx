import React from "react";
import AppWindow from "../../../components/AppWindow";
import { SkillsIndexType, ViewMode } from "../../../types";
import { WindowBody, WindowBodyContent } from "../../../GlobalStyle";
import useNavHistory from "../../../utils/useNavHistory";
import { BackEnd, FrontEnd, Mobile, ProgrammingLanguage } from "../../../components/skills";
import SkillsNavbar from "../../../components/skills/SkillsNavbar";

const SKILLS_COMPONENTS: Record<SkillsIndexType, React.ComponentType<{ view?: ViewMode }>> = {
  Menu: () => <></>,
  Front: FrontEnd,
  Back: BackEnd,
  Mobile: Mobile,
  Programming: ProgrammingLanguage,
};

interface SkillsContentProps {
  index: SkillsIndexType;
  view: ViewMode;
}

const SkillsContent: React.FC<SkillsContentProps> = ({ index, view }) => {
  const Component = SKILLS_COMPONENTS[index];

  return (
    <WindowBodyContent>
      <Component view={view} />
    </WindowBodyContent>
  );
};

const SkillsWindow: React.FC = () => {
  const {
    current: index,
    navigate,
    back,
    forward,
    canBack,
    canForward,
  } = useNavHistory<SkillsIndexType>("Front");
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
      <WindowBody className="h-full">
        <SkillsNavbar index={index} onClick={handleClick} />
        <SkillsContent index={index} view={view} />
      </WindowBody>
    </AppWindow>
  );
};

export default SkillsWindow;
