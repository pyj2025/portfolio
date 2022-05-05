import React from "react";
import { DraggableData, Position, ResizableDelta } from "react-rnd";
import Education from "../../../components/about/Education";
import About from "../../../components/about/About";
import Experience from "../../../components/about/Experience";
import {
  NavItmLabel,
  TopbarTitleImage,
  Window,
  WindowBody,
  WindowBodyContent,
  WindowBodyNavbar,
  WindowBodyNavItm,
} from "../../../GlobalStyle";
import { WindowPositionSetting, WindowSizeSetting } from "../../../types";
import useScreenSize, { TABLET_MAX_WIDTH } from "../../../utils/useScreenSize";
import WindowTopbar from "../../../components/WindowTopbar";
import { WindowProps } from "../../../components/BodyContent";
import { useWindows } from "../../../utils/context/context";

type IndexType = "About" | "Experience" | "Education";

const AboutWindow: React.FC<WindowProps> = ({ handleFocus }) => {
  const { width, height } = useScreenSize();
  const { focusedWindow, setFocusedWindow } = useWindows();

  const aboutRef = React.useRef<any>();

  const [aboutSize, setAboutSize] = React.useState<WindowSizeSetting>({
    width: 500,
    height: 300,
  });
  const [aboutPosition, setAboutPosition] =
    React.useState<WindowPositionSetting>({
      x: 20,
      y: 20,
    });

  const [aboutPrevSetting, setAboutPrevSetting] = React.useState<
    (WindowSizeSetting & WindowPositionSetting) | null
  >(null);

  const [index, setIndex] = React.useState<IndexType>("About");
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

  const clickContentBody = () => {
    setFocusedWindow("About");
  };

  const handleClick = (name: IndexType) => {
    setIndex(name);
  };

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
      onDragStart={handleFocus}
      onDragStop={(_e: any, data: DraggableData) => {
        setAboutPosition({ x: data.x, y: data.y });
      }}
      onResizeStop={(
        _e: MouseEvent | TouchEvent,
        _dir: any,
        ref: any,
        _delta: ResizableDelta,
        position: Position
      ) => {
        const newWidth = Number(
          ref.style.width.substring(0, ref.style.width.indexOf("p"))
        );
        const newHeight = Number(
          ref.style.height.substring(0, ref.style.height.indexOf("p"))
        );

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
      <WindowBody onClick={clickContentBody}>
        <WindowBodyNavbar>
          <WindowBodyNavItm
            first
            onClick={() => handleClick("About")}
            focus={index === "About"}
          >
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/file.png"
              alt="file"
            />
            <NavItmLabel>Personal Info</NavItmLabel>
          </WindowBodyNavItm>
          <WindowBodyNavItm
            onClick={() => handleClick("Experience")}
            focus={index === "Experience"}
          >
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/mac-folder.png"
              alt="folder"
            />
            <NavItmLabel>Experience</NavItmLabel>
          </WindowBodyNavItm>
          <WindowBodyNavItm
            onClick={() => handleClick("Education")}
            focus={index === "Education"}
          >
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/file.png"
              alt="file"
            />
            <NavItmLabel>Education</NavItmLabel>
          </WindowBodyNavItm>
        </WindowBodyNavbar>
        <WindowBodyContent>
          {index === "About" ? <About /> : null}
          {index === "Experience" ? <Experience showDate={showDate} /> : null}
          {index === "Education" ? <Education /> : null}
        </WindowBodyContent>
      </WindowBody>
    </Window>
  );
};

export default AboutWindow;
