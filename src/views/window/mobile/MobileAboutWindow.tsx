import React from "react";
import AppWindow from "../../../components/AppWindow";
import {
  Certifications,
  Education,
  Experience,
  GenAIFundamentals,
  Info,
} from "../../../components/about";
import ExperienceDetail from "../../../components/about/ExperienceDetail";
import info from "../../../info.json";
import { AboutIndexType, ViewMode } from "../../../types";
import {
  MobileBodyContent,
  MobileMenuItemLabel,
  MobileWindowBody,
  MobileWindowMenuItem,
} from "../../../GlobalStyle";
import { getIcon } from "../../../components/getIcon";
import useNavHistory from "../../../utils/useNavHistory";
import MobileAboutNavbar from "../../../components/about/MobileAboutNavbar";
import { MobilePanel } from "../../../components";

type MobileAboutWindowMenuProps = {
  onClick: (index: AboutIndexType) => void;
};

const MobileAboutWindowMenu: React.FC<MobileAboutWindowMenuProps> = React.memo(({ onClick }) => {
  return (
    <>
      <MobileWindowMenuItem onClick={() => onClick("Info")}>
        {getIcon("File")}
        <MobileMenuItemLabel>About</MobileMenuItemLabel>
      </MobileWindowMenuItem>
      <MobileWindowMenuItem onClick={() => onClick("Experience")} isEven>
        {getIcon("Folder")}
        <MobileMenuItemLabel>Experience</MobileMenuItemLabel>
      </MobileWindowMenuItem>
      <MobileWindowMenuItem onClick={() => onClick("Education")}>
        {getIcon("File")}
        <MobileMenuItemLabel>Education</MobileMenuItemLabel>
      </MobileWindowMenuItem>
      <MobileWindowMenuItem onClick={() => onClick("Certifications")} isEven>
        {getIcon("Folder")}
        <MobileMenuItemLabel>Certifications</MobileMenuItemLabel>
      </MobileWindowMenuItem>
    </>
  );
});

const MobileAboutWindow: React.FC = () => {
  const {
    current: index,
    navigate: setIndex,
    back,
    forward,
    canBack,
    canForward,
  } = useNavHistory<AboutIndexType>("Menu");
  const [view, setView] = React.useState<ViewMode>("icon");

  const handleClick = React.useCallback(
    (name: AboutIndexType) => {
      setIndex(name);
    },
    [setIndex],
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
      {({ isMobileWindow, size }) => {
        // 150 is menu
        const showDate = size.width - 150 >= 470;
        return (
          <MobileWindowBody className="h-full">
            <MobileAboutNavbar index={index} onClick={handleClick} />
            <MobileBodyContent>
              {index === "Menu" ? (
                <MobileAboutWindowMenu onClick={handleClick} />
              ) : (
                <MobilePanel onClick={() => handleClick("Menu")}>
                  {index === "Info" && <Info />}
                  {index === "Experience" && (
                    <Experience
                      isMobile={isMobileWindow}
                      showDate={showDate}
                      view={view}
                      onOpen={exp => setIndex(`Experience:${exp.title}`)}
                    />
                  )}
                  {index.startsWith("Experience:") &&
                    (() => {
                      const title = index.slice("Experience:".length);
                      const experience = info.about.experience.find(
                        exp => exp.title === title,
                      );
                      return experience ? (
                        <ExperienceDetail experience={experience} />
                      ) : null;
                    })()}
                  {index === "Education" && <Education />}
                  {index === "Certifications" && (
                    <Certifications toggleIndex={setIndex} view={view} />
                  )}
                  {index === "GenAI" && <GenAIFundamentals />}
                </MobilePanel>
              )}
            </MobileBodyContent>
          </MobileWindowBody>
        );
      }}
    </AppWindow>
  );
};

export default MobileAboutWindow;
