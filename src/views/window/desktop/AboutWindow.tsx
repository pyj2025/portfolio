import React from "react";
import AppWindow from "../../../components/AppWindow";
import { WindowBody, WindowBodyContent } from "../../../components/WindowChrome";
import { AboutIndexType, ViewMode } from "../../../types";
import useNavHistory from "../../../utils/useNavHistory";
import {
  Certifications,
  Education,
  Experience,
  GenAIFundamentals,
  Info,
} from "../../../components/about";
import ExperienceDetail from "../../../components/about/ExperienceDetail";
import AboutNavbar from "../../../components/about/AboutNavbar";
import info from "../../../info.json";

const BASIC_COMPONENTS: Record<string, React.ComponentType> = {
  Info: Info,
  Education: Education,
  GenAI: GenAIFundamentals,
};

interface AboutContentProps {
  index: AboutIndexType;
  setIndex: (index: AboutIndexType) => void;
  showDate: boolean;
  view: ViewMode;
}

const AboutContent: React.FC<AboutContentProps> = ({
  index,
  setIndex,
  showDate,
  view,
}) => {
  if (index === "Menu") {
    return null;
  }

  if (index === "Experience") {
    return (
      <WindowBodyContent>
        <Experience
          showDate={showDate}
          view={view}
          onOpen={exp => setIndex(`Experience:${exp.title}`)}
        />
      </WindowBodyContent>
    );
  }

  if (index.startsWith("Experience:")) {
    const title = index.slice("Experience:".length);
    const experience = info.about.experience.find(exp => exp.title === title);
    return experience ? (
      <WindowBodyContent>
        <ExperienceDetail experience={experience} />
      </WindowBodyContent>
    ) : null;
  }

  if (index === "Certifications") {
    return (
      <WindowBodyContent>
        <Certifications toggleIndex={setIndex} view={view} />
      </WindowBodyContent>
    );
  }

  const Component = BASIC_COMPONENTS[index];
  if (Component) {
    return (
      <WindowBodyContent>
        <Component />
      </WindowBodyContent>
    );
  }

  return null;
};

const AboutWindow: React.FC = () => {
  const {
    current: index,
    navigate,
    back,
    forward,
    canBack,
    canForward,
  } = useNavHistory<AboutIndexType>("Info");
  const [view, setView] = React.useState<ViewMode>("icon");

  const handleClick = React.useCallback(
    (name: AboutIndexType) => {
      navigate(name);
    },
    [navigate],
  );

  return (
    <AppWindow
      id="About"
      defaultSize={{ width: 500, height: 300 }}
      defaultPosition={{ x: 20, y: 20 }}
      minWidth={500}
      minHeight={300}
      nav={{ onBack: back, onForward: forward, canBack, canForward }}
      view={view}
      onViewChange={setView}
    >
      {({ size }) => {
        // 168 is the sidebar width; hide the date column when content gets narrow
        const showDate = size.width - 168 >= 470;
        return (
          <WindowBody className="h-full">
            <AboutNavbar index={index} onClick={handleClick} />
            <AboutContent
              index={index}
              setIndex={handleClick}
              showDate={showDate}
              view={view}
            />
          </WindowBody>
        );
      }}
    </AppWindow>
  );
};

export default AboutWindow;
