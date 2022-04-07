import React from "react";
import { DraggableData, Position, ResizableDelta } from "react-rnd";
import styled from "styled-components";
import About from "../../../components/about/About";
import Education from "../../../components/about/Education";
import Experience from "../../../components/about/Experience";
import WindowTopbar from "../../../components/WindowTopbar";
import { WindowPositionSetting, WindowSizeSetting } from "../../../types";
import useScreenSize, { TABLET_MAX_WIDTH } from "../../../utils/useScreenSize";
import { WindowProps } from "../../BodyContent";

import { TopbarTitleImage, Window } from "../../../GlobalStyle";

type MobileIndexType = "Menu" | "About" | "Experience" | "Education";

type MobileAboutWindowMenuProps = {
  index: MobileIndexType;
  onClick: (index: MobileIndexType) => void;
};

const NewWindowBodyNavItm = styled.div<{
  focus: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ focus }) =>
    focus ? "rgba(120, 120, 120, 0.5)" : "transparent"};
  color: white;
  width: 100%;
  height: 2rem;
  cursor: pointer;
`;

const NewWindowBody2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100% - 28px);
`;

const WindowBodyNavbar2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 3rem;
  background-color: rgba(51, 49, 51, 0.9);
  color: white;
  border-right: 0.2px solid #141516;
  border-bottom-left-radius: 6px;
`;

const WindowBodyContent2 = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1d1f21;
  color: white;
  border-bottom-right-radius: 6px;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const MobileAboutWindowMenu: React.FC<MobileAboutWindowMenuProps> = ({
  index,
  onClick,
}) => {
  return (
    <div>
      <NewWindowBodyNavItm
        onClick={() => onClick("About")}
        focus={index === "About"}
      >
        <TopbarTitleImage
          src="https://img.icons8.com/color/48/000000/file.png"
          alt="file"
        />
      </NewWindowBodyNavItm>
      <NewWindowBodyNavItm
        onClick={() => onClick("Experience")}
        focus={index === "Experience"}
      >
        <TopbarTitleImage
          src="https://img.icons8.com/color/48/000000/mac-folder.png"
          alt="folder"
        />
      </NewWindowBodyNavItm>
      <NewWindowBodyNavItm
        onClick={() => onClick("Education")}
        focus={index === "Education"}
      >
        <TopbarTitleImage
          src="https://img.icons8.com/color/48/000000/file.png"
          alt="file"
        />
      </NewWindowBodyNavItm>
    </div>
  );
};

const MobileAboutWindow: React.FC<WindowProps> = ({ handleFocus }) => {
  const { width, height } = useScreenSize();

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

  const [index, setIndex] = React.useState<MobileIndexType>("Menu");
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

  const handleClick = (name: MobileIndexType) => {
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
      <NewWindowBody2>
        <WindowBodyNavbar2>
          <NewWindowBodyNavItm
            onClick={() => handleClick("About")}
            focus={index === "About"}
          >
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/file.png"
              alt="file"
            />
          </NewWindowBodyNavItm>
          <NewWindowBodyNavItm
            onClick={() => handleClick("Experience")}
            focus={index === "Experience"}
          >
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/mac-folder.png"
              alt="folder"
            />
          </NewWindowBodyNavItm>
          <NewWindowBodyNavItm
            onClick={() => handleClick("Education")}
            focus={index === "Education"}
          >
            <TopbarTitleImage
              src="https://img.icons8.com/color/48/000000/file.png"
              alt="file"
            />
          </NewWindowBodyNavItm>
        </WindowBodyNavbar2>
        <WindowBodyContent2>
          {index === "About" ? (
            <div style={{ border: "2px solid red" }}>
              <div>#</div>
              <About />
            </div>
          ) : null}
          {index === "Experience" ? <Experience showDate={showDate} /> : null}
          {index === "Education" ? <Education /> : null}
        </WindowBodyContent2>
      </NewWindowBody2>
    </Window>
  );
};

export default MobileAboutWindow;
