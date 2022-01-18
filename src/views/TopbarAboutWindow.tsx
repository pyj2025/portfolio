import React from "react";
import styled from "styled-components";
import { DraggableData, Rnd } from "react-rnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import img from "../image/Logo.png";

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

const TopbarTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
`;

const WindowBody = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 272px;
  color: black;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoListItem = styled.div`
  display: flex;
  flex-direction: row;
`;

const InfoListItemLabel = styled.div`
  margin-left: 8px;
`;

type TopbarAboutWindowProps = {
  width: number;
  height: number;
  focusedWindow: string;
  handleFocus: (_e: any, data: DraggableData) => void;
  toggleDesktopAboutOpen: () => void;
};

const TopbarAboutWindow: React.FC<TopbarAboutWindowProps> = ({
  width,
  height,
  focusedWindow,
  handleFocus,
  toggleDesktopAboutOpen,
}) => {
  const desktopAboutRef = React.useRef<any>();

  const handleDesktopAboutClose = () => {
    if (focusedWindow === "DesktopAbout") toggleDesktopAboutOpen();
  };

  return (
    <Window
      id="DesktopAbout"
      ref={desktopAboutRef}
      default={{
        x: width / 3,
        y: -1 * ((height * 2) / 3),
        width: 500,
        height: 300,
      }}
      dragHandleClassName="topbar"
      onDragStart={handleFocus}
      enableResizing={false}
    >
      <WindowTopbar className="topbar">
        <TopbarBtnContainer>
          <TopbarBtn
            color="close"
            title={focusedWindow === "DesktopAbout" ? "Close" : undefined}
            onClick={handleDesktopAboutClose}
            disabled={focusedWindow !== "DesktopAbout"}
          />
          <TopbarBtn color="disabled" disabled={true} />
          <TopbarBtn color="disabled" disabled={true} />
        </TopbarBtnContainer>
        <TopbarTitle />
      </WindowTopbar>
      <WindowBody>
        <LogoContainer>
          <img src={img} width="200" height="200" alt="Logo" />
        </LogoContainer>
        <div>
          <h1>Youngjoon Park</h1>
          <h4>Junior Frontend Developer</h4>
          <InfoList>
            <InfoListItem>
              <FontAwesomeIcon icon={faBirthdayCake} />
              <InfoListItemLabel>Jan.17.1994</InfoListItemLabel>
            </InfoListItem>
            <InfoListItem>
              <FontAwesomeIcon icon={faPhone} />
              <InfoListItemLabel>+1 312-937-4435</InfoListItemLabel>
            </InfoListItem>
            <InfoListItem>
              <FontAwesomeIcon icon={faLocationArrow} />
              <InfoListItemLabel>
                25 W Randolph St Apt 903, Chicago, IL, 60601
              </InfoListItemLabel>
            </InfoListItem>
          </InfoList>
        </div>
      </WindowBody>
    </Window>
  );
};

export default TopbarAboutWindow;
