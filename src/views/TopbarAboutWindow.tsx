import React from "react";
import styled from "styled-components";
import { DraggableData } from "react-rnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import img from "../image/Logo.png";
import {
  TopbarBtn,
  TopbarBtnContainer,
  TopbarTitle,
  Window,
  WindowTopbar,
} from "../GlobalStyle";

const WindowBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
