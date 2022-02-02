import React from "react";
import { DraggableData, Position, ResizableDelta } from "react-rnd";
import Education from "../../components/Education";
import About from "../../components/About";
import Experience from "../../components/Experience";
import {
  NavItmLabel,
  TopbarBtn,
  TopbarBtnContainer,
  TopbarTitle,
  TopbarTitleImage,
  TopbarTitleText,
  Window,
  WindowBody,
  WindowBodyContent,
  WindowBodyNavbar,
  WindowBodyNavItm,
  WindowTopbar,
} from "../../GlobalStyle";
import { WindowPositionSetting, WindowSizeSetting } from "../../types";
import useScreenSize from "../../utils/useScreenSize";
import { useWindows } from "../../utils/context/context";
import { WindowProps } from "../../BodyContent";

type IndexType = "About" | "Experience" | "Education";

const AboutWindow: React.FC<WindowProps> = ({ handleFocus }) => {
  const { width, height } = useScreenSize();
  const {
    focusedWindow,
    isAboutExpanded,
    setAboutMinimized,
    toggleAboutOpen,
    toggleAboutExpanded,
  } = useWindows();

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

  React.useEffect(() => {
    if (width < aboutSize.width) {
      handleAboutExpand();
    }
  }, [width, aboutSize.width]);

  const handleAboutClose = () => {
    if (focusedWindow === "About") toggleAboutOpen();
  };

  const handleAboutMinimized = () => {
    if (focusedWindow === "About") {
      setAboutMinimized(true);
      toggleAboutOpen();
    }
  };

  const handleAboutExpand = () => {
    if (focusedWindow === "About") {
      if (isAboutExpanded) {
        if (aboutPrevSetting === null) {
          setAboutSize({
            width: 500,
            height: 300,
          });
          setAboutPosition({
            x: 20,
            y: 20,
          });
        } else {
          setAboutSize({
            width: aboutPrevSetting.width,
            height: aboutPrevSetting.height,
          });
          setAboutPosition({
            x: aboutPrevSetting.x,
            y: aboutPrevSetting.y,
          });
        }
      } else {
        setAboutPrevSetting({
          width: aboutSize.width,
          height: aboutSize.height,
          x: aboutPosition.x,
          y: aboutPosition.y,
        });

        setAboutSize({
          width: width,
          height: height,
        });
        setAboutPosition({
          x: 0,
          y: 0,
        });
      }
      aboutRef.current.updateSize(aboutSize);
      aboutRef.current.updatePosition(aboutPosition);

      toggleAboutExpanded();
    }
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
      minWidth={500}
      minHeight={300}
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
        setAboutSize({
          width: ref.style.width,
          height: ref.style.height,
        });
        setAboutPosition({ x: position.x, y: position.y });
      }}
    >
      <WindowTopbar className="topbar">
        <TopbarBtnContainer>
          <TopbarBtn
            color="close"
            title={focusedWindow === "About" ? "Close" : undefined}
            onClick={handleAboutClose}
            disabled={focusedWindow !== "About"}
          />
          <TopbarBtn
            color="minimize"
            title={focusedWindow === "About" ? "Minimize" : undefined}
            onClick={handleAboutMinimized}
            disabled={focusedWindow !== "About"}
          />
          <TopbarBtn
            color="expand"
            title={focusedWindow === "About" ? "Expand" : undefined}
            onClick={handleAboutExpand}
            disabled={focusedWindow !== "About"}
          />
        </TopbarBtnContainer>
        <TopbarTitle>
          <TopbarTitleImage
            src="https://img.icons8.com/color/48/000000/mac-logo.png"
            alt="About"
          />
          <TopbarTitleText>About</TopbarTitleText>
        </TopbarTitle>
      </WindowTopbar>
      <WindowBody>
        <WindowBodyNavbar>
          <WindowBodyNavItm
            first
            onClick={() => handleClick("About")}
            focus={index === "About"}
          >
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/file.png"
              alt="folder"
            />
            <NavItmLabel>Personal Info</NavItmLabel>
          </WindowBodyNavItm>
          <WindowBodyNavItm
            onClick={() => handleClick("Experience")}
            focus={index === "Experience"}
          >
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/file.png"
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
              alt="folder"
            />
            <NavItmLabel>Education</NavItmLabel>
          </WindowBodyNavItm>
        </WindowBodyNavbar>
        <WindowBodyContent>
          {index === "About" ? <About /> : null}
          {index === "Experience" ? <Experience /> : null}
          {index === "Education" ? <Education /> : null}
        </WindowBodyContent>
      </WindowBody>
    </Window>
  );
};

export default AboutWindow;
