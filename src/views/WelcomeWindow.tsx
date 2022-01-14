import React from "react";
import styled from "styled-components";
import { DraggableData, Rnd } from "react-rnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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

const TerminalBadge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const FirstBadge = styled.div`
  background-color: #000000;
  padding: 4px 10px;
`;

const SecondBadge = styled.div`
  background-color: #caa9fa;
  color: #000000;
  margin-left: 8px;
  padding: 4px 10px;
`;

const TerminalBadgeArrow = styled(FontAwesomeIcon)`
  font-size: 18px;
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

  React.useEffect(() => {
    setTimeout(() => {
      setFirstLine(true);
    }, 1000);

    setTimeout(() => {
      setSecondLine(true);
    }, 1500);
    setTimeout(() => {
      setSecondContent(true);
    }, 2000);
    setTimeout(() => {
      setThirdLine(true);
    }, 2500);
    setTimeout(() => {
      setThirdContent(true);
    }, 3000);
  }, []);

  return (
    <Window
      id="Welcome"
      ref={welcomeRef}
      default={{
        x: window.innerWidth / 5,
        y: -1 * ((window.innerHeight * 4) / 5),
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
        <TerminalRow>Welcome!</TerminalRow>
        {firstLine ? (
          <TerminalRow>
            <TerminalBadge>
              <FirstBadge>joon@MacBook-Air</FirstBadge>
              <TerminalBadgeArrow icon={faAngleRight} />
            </TerminalBadge>
            <TerminalLine>cd portfolio</TerminalLine>
          </TerminalRow>
        ) : null}
        {secondLine ? (
          <TerminalRow>
            <TerminalBadge>
              <FirstBadge>joon@MacBook-Air</FirstBadge>
              <TerminalBadgeArrow icon={faAngleRight} />
              <SecondBadge>~/portfolio</SecondBadge>
              <TerminalBadgeArrow icon={faAngleRight} />
            </TerminalBadge>
            <TerminalLine>cat intro.md</TerminalLine>
          </TerminalRow>
        ) : null}
        {secondContent ? (
          <TerminalRow>
            <TerminalLine>####</TerminalLine>
          </TerminalRow>
        ) : null}
        {thirdLine ? (
          <TerminalRow>
            <TerminalBadge>
              <FirstBadge>joon@MacBook-Air</FirstBadge>
              <TerminalBadgeArrow icon={faAngleRight} />
              <SecondBadge>~/portfolio</SecondBadge>
              <TerminalBadgeArrow icon={faAngleRight} />
            </TerminalBadge>
            <TerminalLine>cat contact.md</TerminalLine>
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
