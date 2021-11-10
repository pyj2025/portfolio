import React from "react";
import styled from "styled-components";
import { DraggableData, Position, ResizableDelta, Rnd } from "react-rnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faCode,
  faLocationArrow,
  faPhone,
  faSchool,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Window = styled(Rnd)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 6px;
  box-shadow: 0px 0px 8px black;
`;

const WindowTopbar = styled.div`
  width: 100%;
  height: 28px;
  background-color: rgb(51, 52, 54);
  border-top: 1px rgb(70, 75, 80) solid;
  padding: 0px 10px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  cursor: default;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  align-items: center;
  box-sizing: border-box;
`;

const TopbarBtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TopbarBtn = styled.div<{ color: string; disabled: boolean }>`
  width: 12px;
  height: 12px;
  color: #62574c;
  display: inline-block;
  margin-left: ${({ color }: { color: string }) =>
    color === "close" ? "0px" : "8px"};
  border-radius: 8px;
  align-items: center;
  vertical-align: middle;
  background-color: ${({
    color,
    disabled,
  }: {
    color: string;
    disabled: boolean;
  }) =>
    disabled
      ? "#686B6D"
      : color === "minimize"
      ? "#F7BD45"
      : color === "expand"
      ? "#5FCB43"
      : "#ee514a"};
  cursor: ${({ disabled }: { disabled: boolean }) =>
    disabled ? undefined : "pointer"};
`;

const TopbarTitleImage = styled.img`
  width: 16px;
  height: 16px;
`;

const TopbarTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
`;

const TopbarTitleText = styled.span`
  margin-left: 6px;
  pointer-events: none;
`;

const WindowBody = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  width: 100%;
  height: calc(100% - 28px);
  color: black;
`;

const WindowBodyNavbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border-right: 1px solid black;
`;

const WindowBodyNavItm = styled.div<{ first?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-content: flex-start;
  background-color: transparent;
  color: white;
  margin-top: ${({ first }) => (first ? "8px" : "2px")};
  cursor: pointer;
`;

const NavItmIcon = styled(FontAwesomeIcon)`
  margin-left: 8px;
  justify-content: center;
`;

const NavItmLabel = styled.span`
  font-weight: bold;
  justify-content: center;
  margin-left: 4px;
`;

const WindowBodyContent = styled.div`
  height: 100%;
  color: white;
  margin: 8px;
`;

export type WindowSizeSetting = {
  width: number;
  height: number;
};

export type WindowPositionSetting = {
  x: number;
  y: number;
};

type IndexType = "Info" | "Experience" | "Education";

type AboutWindowProps = {
  width: number;
  height: number;
  focusedWindow: string;
  handleFocus: (_e: any, data: DraggableData) => void;
  isAboutExpanded: boolean;
  setAboutMinimized: (flag: boolean) => void;
  toggleAboutOpen: () => void;
  toggleAboutExpanded: () => void;
};

const AboutWindow: React.FC<AboutWindowProps> = ({
  width,
  height,
  focusedWindow,
  handleFocus,
  isAboutExpanded,
  setAboutMinimized,
  toggleAboutOpen,
  toggleAboutExpanded,
}) => {
  const aboutRef = React.useRef<any>();

  const [aboutSize, setAboutSize] = React.useState<WindowSizeSetting>({
    width: 500,
    height: 300,
  });
  const [aboutPosition, setAboutPosition] =
    React.useState<WindowPositionSetting>({
      x: 40,
      y: -600,
    });

  const [aboutPrevSetting, setAboutPrevSetting] = React.useState<
    (WindowSizeSetting & WindowPositionSetting) | null
  >(null);

  const [index, setIndex] = React.useState<IndexType>("Info");

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
            x: 40,
            y: -600,
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
          y: -1 * height,
        });
      }
      aboutRef.current.updateSize(aboutSize);
      aboutRef.current.updatePosition(aboutPosition);

      toggleAboutExpanded();
    }
  };

  const handleClick = (name: IndexType) => {
    if (name === "Experience") {
      setIndex("Experience");
    } else if (name === "Education") {
      setIndex("Education");
    } else {
      setIndex("Info");
    }
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
          <WindowBodyNavItm first onClick={() => handleClick("Info")}>
            <NavItmIcon icon={faUser} />
            <NavItmLabel>Personal Info</NavItmLabel>
          </WindowBodyNavItm>
          <WindowBodyNavItm onClick={() => handleClick("Experience")}>
            <NavItmIcon icon={faCode} />
            <NavItmLabel>Experience</NavItmLabel>
          </WindowBodyNavItm>
          <WindowBodyNavItm onClick={() => handleClick("Education")}>
            <NavItmIcon icon={faSchool} />
            <NavItmLabel>Education</NavItmLabel>
          </WindowBodyNavItm>
        </WindowBodyNavbar>
        <WindowBodyContent>
          {index === "Info" ? (
            <>
              <div>Personal {index}</div>
              <div>
                <div>Youngjoon Park</div>
                <div>
                  <FontAwesomeIcon icon={faBirthdayCake} />
                  <div>Jan.17.1994</div>
                </div>
                <div>
                  <FontAwesomeIcon icon={faPhone} />
                  <div>+1 312-937-4435</div>
                </div>
                <div>
                  <FontAwesomeIcon icon={faLocationArrow} />
                  <div>25 W Randolph St Apt 903, Chicago, IL, 60601</div>
                </div>
              </div>
            </>
          ) : null}
          {index === "Education" ? (
            <>
              <div>{index}</div>
              <div>
                <div>Purdue University</div>
                <div>
                  Bachelor of Science in Computer Science (Software Engineering)
                </div>
                <div>Graduated : December / 2019</div>
              </div>
            </>
          ) : null}
          {index === "Experience" ? (
            <>
              <div>{index}</div>
              <div>
                <div>
                  <div>Junior Frontend Developer</div>
                  <div>Enfusion, Chicago, IL, USA</div>
                  <div>January 2020 - Present</div>
                </div>
                <div>
                  <div>Undergraduate Teaching Assistant</div>
                  <div>Purdue University, West Lafayette, IN, USA</div>
                  <div>Aug 2018 - Dec 2019</div>
                </div>
                <div>
                  <div>Technical Consultant Intern</div>
                  <div>Dotis Corp, Seoul, South Korea</div>
                  <div>Jun 2017 - Jul 2017</div>
                </div>
                <div>
                  <div>Software Engineering Intern</div>
                  <div>Hyop Woon, Seoul, South Korea</div>
                  <div>Jul 2015 - Aug 2015</div>
                </div>
              </div>
            </>
          ) : null}
        </WindowBodyContent>
      </WindowBody>
    </Window>
  );
};

export default AboutWindow;
