import React from "react";
import { DraggableData, Position, ResizableDelta } from "react-rnd";
import {
  Certifications,
  Education,
  Experience,
  GenAIFundamentals,
  Info,
} from "../../../components/about";
import { AboutIndexType, WindowPositionSetting, WindowSizeSetting } from "../../../types";
import useScreenSize, { TABLET_MAX_WIDTH } from "../../../utils/useScreenSize";
import {
  MobileBodyContent,
  MobileMenuItemLabel,
  MobileWindowBody,
  MobileWindowMenuItem,
  Window,
} from "../../../GlobalStyle";
import { getIcon } from "../../../components/getIcon";
import useWindowsStore from "../../../utils/useWindowsStore";
import MobileAboutNavbar from "../../../components/about/MobileAboutNavbar";
import { MobilePanel, WindowTopbar } from "../../../components";

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
  const { width, height } = useScreenSize();
  const { focusedWindow, setFocusedWindow } = useWindowsStore(state => state);

  const aboutRef = React.useRef<any>();

  const [aboutSize, setAboutSize] = React.useState<WindowSizeSetting>({
    width: 500,
    height: 300,
  });
  const [aboutPosition, setAboutPosition] = React.useState<WindowPositionSetting>({
    x: 20,
    y: 20,
  });

  const [aboutPrevSetting, setAboutPrevSetting] = React.useState<
    (WindowSizeSetting & WindowPositionSetting) | null
  >(null);

  const [index, setIndex] = React.useState<AboutIndexType>("Menu");
  const [isMobileWindow, setIsMobileWindow] = React.useState<boolean>(false);
  const [showDate, setShowDate] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (width < TABLET_MAX_WIDTH) {
      setAboutSize({
        width,
        height: height - 80 - 25,
      });
      setAboutPosition({
        x: 0,
        y: 0,
      });
      setIsMobileWindow(true);
    } else {
      setIsMobileWindow(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  React.useEffect(() => {
    // 150 is menu
    if (aboutSize.width - 150 >= 470) {
      setShowDate(true);
    } else {
      setShowDate(false);
    }
  }, [aboutSize.width, showDate]);

  const handleClick = React.useCallback(
    (name: AboutIndexType) => {
      setIndex(name);
    },
    [setIndex],
  );

  return (
    <Window
      id="About"
      ref={aboutRef}
      size={{ width: aboutSize.width, height: aboutSize.height }}
      position={{ x: aboutPosition.x, y: aboutPosition.y }}
      dragHandleClassName="topbar"
      minWidth={isMobileWindow ? width : 500}
      minHeight={300}
      style={{ zIndex: focusedWindow === "About" ? 10 : undefined }}
      onDragStart={(_e: any, _data: DraggableData) => {
        setFocusedWindow("About");
      }}
      onDragStop={(_e: any, data: DraggableData) => {
        setAboutPosition({ x: data.x, y: data.y });
      }}
      onResizeStop={(
        _e: MouseEvent | TouchEvent,
        _dir: any,
        ref: any,
        _delta: ResizableDelta,
        position: Position,
      ) => {
        const newWidth = Number(ref.style.width.substring(0, ref.style.width.indexOf("p")));
        const newHeight = Number(ref.style.height.substring(0, ref.style.height.indexOf("p")));
        setAboutSize({
          width: newWidth,
          height: newHeight,
        });
        setAboutPosition({ x: position.x, y: position.y });
      }}
    >
      <WindowTopbar
        title="About"
        windowRef={aboutRef}
        size={aboutSize}
        setSize={setAboutSize}
        position={aboutPosition}
        setPosition={setAboutPosition}
        prevSetting={aboutPrevSetting}
        setPrevSetting={setAboutPrevSetting}
        isMobileWindow={isMobileWindow}
      />
      <MobileWindowBody>
        <MobileAboutNavbar index={index} onClick={handleClick} />
        <MobileBodyContent>
          {index === "Menu" ? (
            <MobileAboutWindowMenu onClick={handleClick} />
          ) : (
            <MobilePanel onClick={() => handleClick("Menu")}>
              {index === "Info" && <Info />}
              {index === "Experience" && (
                <Experience isMobile={isMobileWindow} showDate={showDate} />
              )}
              {index === "Education" && <Education />}
              {index === "Certifications" && <Certifications toggleIndex={setIndex} />}
              {index === "GenAI" && <GenAIFundamentals />}
            </MobilePanel>
          )}
        </MobileBodyContent>
      </MobileWindowBody>
    </Window>
  );
};

export default MobileAboutWindow;
