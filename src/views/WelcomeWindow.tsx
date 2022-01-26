import React from "react";
import styled from "styled-components";
import { DraggableData, Rnd } from "react-rnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Typist from "react-typist";

const Window = styled(Rnd)`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: white;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 422px;
  background-color: #282a36;
  color: #ffffff;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

const TerminalRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 4px 8px;
`;

const LoadedCommandLine = styled(Typist)`
  margin-top: 8px;
`;

const TerminalBadge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const FirstBadge = styled.div`
  background-color: #000000;
  padding: 4px 10px;
  border: none;
`;

const BadgeArrow = styled.div<{ first?: boolean }>`
  background-color: ${({ first }) => (first ? "transparent" : "#caa9fa")};
  width: 0;
  height: 0;
  border-top: 13px solid transparent;
  border-bottom: 13px solid transparent;
  border-left: 13px solid #000000;
`;

const SecondBadge = styled.div`
  background-color: #caa9fa;
  color: #000000;
  padding: 4px 10px;
  border: none;
`;

const SecondBadgeArrow = styled(BadgeArrow)`
  background-color: transparent;
  border-left: 13px solid #caa9fa;
`;

const TerminalLine = styled.div`
  margin-left: 8px;
`;

const ContentLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2px;
`;

const ContentLineArrow = styled(FontAwesomeIcon)`
  font-size: 18px;
  margin-right: 8px;
`;

type WelcomeWindowProps = {
  focusedWindow: string;
  handleFocus: (_e: any, data: DraggableData) => void;
  close: (flag: boolean) => void;
};

const WelcomeWindow: React.FC<WelcomeWindowProps> = ({
  focusedWindow,
  handleFocus,
  close,
}) => {
  const welcomeRef = React.useRef<any>();

  const [firstLine, setFirstLine] = React.useState(false);
  const [secondLine, setSecondLine] = React.useState(false);
  const [secondContent, setSecondContent] = React.useState(false);
  const [thirdLine, setThirdLine] = React.useState(false);
  const [thirdContent, setThirdContent] = React.useState(false);

  return (
    <Window
      id="Welcome"
      ref={welcomeRef}
      default={{
        x: 0,
        y: -600,
        width: 700,
        height: 450,
      }}
      dragHandleClassName="topbar"
      onDragStart={handleFocus}
      enableResizing={false}
    >
      <WindowTopbar className="topbar">
        <TopbarBtnContainer>
          <TopbarBtn
            color="close"
            title={focusedWindow === "Welcome" ? "Close" : undefined}
            onClick={() => close(false)}
            disabled={focusedWindow !== "Welcome"}
          />
          <TopbarBtn color="disabled" disabled={true} />
          <TopbarBtn color="disabled" disabled={true} />
        </TopbarBtnContainer>
        <TopbarTitle>
          <TopbarTitleImage
            src="https://img.icons8.com/office/40/000000/console.png"
            alt="Welcome"
          />
          <TopbarTitleText>Welcome</TopbarTitleText>
        </TopbarTitle>
      </WindowTopbar>
      <WindowBody>
        <TerminalRow>
          <LoadedCommandLine
            cursor={{
              show: true,
              blink: true,
              element: "|",
              hideWhenDone: true,
              hideWhenDoneDelay: 100,
            }}
            onTypingDone={() => setFirstLine(true)}
          >
            Loaded...
          </LoadedCommandLine>
        </TerminalRow>
        {firstLine ? (
          <TerminalRow>
            <TerminalBadge>
              <FirstBadge>joon@MacBook-Air</FirstBadge>
              <BadgeArrow first />
            </TerminalBadge>
            <TerminalLine>
              <Typist
                cursor={{
                  show: true,
                  blink: true,
                  element: "|",
                  hideWhenDone: true,
                  hideWhenDoneDelay: 100,
                }}
                onTypingDone={() => setSecondLine(true)}
              >
                cd portfolio
              </Typist>
            </TerminalLine>
          </TerminalRow>
        ) : null}
        {secondLine ? (
          <TerminalRow>
            <TerminalBadge>
              <FirstBadge>joon@MacBook-Air</FirstBadge>
              <BadgeArrow />
              <SecondBadge>~/portfolio</SecondBadge>
              <SecondBadgeArrow />
            </TerminalBadge>
            <TerminalLine>
              <Typist
                cursor={{
                  show: true,
                  blink: true,
                  element: "|",
                  hideWhenDone: true,
                  hideWhenDoneDelay: 100,
                }}
                onTypingDone={() => {
                  setSecondContent(true);
                  setThirdLine(true);
                }}
              >
                cat intro.md
              </Typist>
            </TerminalLine>
          </TerminalRow>
        ) : null}
        {secondContent ? (
          <TerminalRow>
            <TerminalLine>
              <ContentLine># Hi, I'm Joon.</ContentLine>
              <ContentLine>
                <ContentLineArrow icon={faAngleRight} />
                <div>I'm a front-end developer at Enfusion</div>
              </ContentLine>
              <ContentLine>
                <ContentLineArrow icon={faAngleRight} />
                <div>
                  I'm an alumnus of Purdue University Computer Science (Software
                  Engineering)
                </div>
              </ContentLine>
            </TerminalLine>
          </TerminalRow>
        ) : null}
        {thirdLine ? (
          <TerminalRow>
            <TerminalBadge>
              <FirstBadge>joon@MacBook-Air</FirstBadge>
              <BadgeArrow />
              <SecondBadge>~/portfolio</SecondBadge>
              <SecondBadgeArrow />
            </TerminalBadge>
            <TerminalLine>
              <Typist
                cursor={{
                  show: true,
                  blink: true,
                  element: "|",
                  hideWhenDone: true,
                  hideWhenDoneDelay: 100,
                }}
                onTypingDone={() => setThirdContent(true)}
              >
                cat contact.md
              </Typist>
            </TerminalLine>
          </TerminalRow>
        ) : null}
        {thirdContent ? (
          <TerminalRow>
            <TerminalLine>
              <ContentLine># Info</ContentLine>
              <ContentLine>## Email</ContentLine>
              <ContentLine>
                <ContentLineArrow icon={faAngleRight} />
                <div> pyj2025@gmail.com</div>
              </ContentLine>
              <ContentLine>## Phone Number</ContentLine>
              <ContentLine>
                <ContentLineArrow icon={faAngleRight} />
                <div>312-9374435</div>
              </ContentLine>
            </TerminalLine>
          </TerminalRow>
        ) : null}
      </WindowBody>
    </Window>
  );
};

export default WelcomeWindow;
