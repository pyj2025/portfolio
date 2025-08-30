import { Rnd } from "react-rnd";
import styled from "styled-components";

//text
export const BoldText = styled.span`
  font-weight: bold;
`;

export const MutedText = styled.span`
  opacity: 0.5;
`;

//Terminal
export const TerminalRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 4px 8px;
`;

export const TerminalBadge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const BadgeArrow = styled.div<{ first?: boolean }>`
  background-color: ${({ first }) => (first ? "transparent" : "#caa9fa")};
  width: 0;
  height: 0;
  border-top: 13px solid transparent;
  border-bottom: 13px solid transparent;
  border-left: 13px solid #000000;
`;

export const SecondBadge = styled.div`
  background-color: #caa9fa;
  color: #000000;
  padding: 4px 10px;
  border: none;
`;

export const SecondBadgeArrow = styled(BadgeArrow)`
  background-color: transparent;
  border-left: 13px solid #caa9fa;
`;

export const TerminalLine = styled.div`
  margin-left: 0.25rem;
`;

//window
export const Window = styled(Rnd)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 0.375rem;
  -webkit-border-radius: 0.375rem;
  -moz-border-radius: 0.375rem;
  -khtml-border-radius: 0.375rem;
  overflow: hidden;
  box-shadow: 0px 0px 8px black;
`;

export const WindowTopbarContainer = styled.div`
  width: 100%;
  height: 28px;
  background-color: rgb(51, 52, 54);
  border-top: 1px solid rgb(70, 75, 80);
  padding: 0px 10px;
  cursor: default;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 0.2px solid #141516;
`;

export const TopbarBtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TopbarBtn = styled.div<{ color: string; disabled: boolean }>`
  width: 12px;
  height: 12px;
  color: #62574c;
  display: inline-block;
  margin-left: ${({ color }: { color: string }) => (color === "close" ? "0px" : "8px")};
  border-radius: 8px;
  align-items: center;
  vertical-align: middle;
  background-color: ${({ color, disabled }: { color: string; disabled: boolean }) =>
    disabled
      ? "#686B6D"
      : color === "minimize"
      ? "#F7BD45"
      : color === "expand"
      ? "#5FCB43"
      : "#ee514a"};
  cursor: ${({ disabled }: { disabled: boolean }) => (disabled ? undefined : "pointer")};
`;

export const TopbarTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
`;

export const TopbarTitleText = styled.span`
  margin-left: 0.375rem;
  pointer-events: none;
`;

export const WindowBody = styled.div<{ isMobile?: boolean }>`
  display: grid;
  grid-template-columns: ${({ isMobile }) => (isMobile ? "50px auto" : "150px auto")};
  width: 100%;
  height: calc(100% - 28px);
`;

export const WindowBodyNavbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  background-color: rgba(51, 49, 51, 0.9);
  color: white;
  border-right: 0.2px solid #141516;
`;

export const WindowBodyNavItm = styled.div<{
  focus: boolean;
  first?: boolean;
  isChild?: boolean;
}>`
  display: grid;
  grid-template-columns: 20px auto;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ focus }) => (focus ? "rgba(120, 120, 120, 0.5)" : "transparent")};
  color: white;
  margin-top: ${({ first, isChild }) => (first ? "4px" : isChild ? "1px" : undefined)};
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: ${({ isChild }) => (isChild ? "24px" : "8px")};
  cursor: pointer;
`;

export const NavItmLabel = styled.span`
  font-weight: bold;
  justify-content: center;
  margin-left: 4px;
`;

export const WindowBodyContent = styled.div`
  height: 100%;
  background-color: #1d1f21;
  color: white;
  overflow-x: hidden;
  overflow-y: hidden;

  :hover {
    overflow-y: auto;
  }
`;

//Panel
export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  min-width: 20rem;
  margin: 10px;
`;

export const PanelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
`;

export const PanelLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const PanelLogoImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const PanelTableContainer = styled.table`
  border-spacing: 0.25rem;
`;

export const PanelTableLabel = styled.td`
  display: flex;
`;

export const LinkLabel = styled.a`
  color: white;
  text-decoration: none;
`;

//mobile window
export const MobileWindowBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100% - 28px);
`;

export const MobileNavbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 3rem;
  background-color: rgba(51, 49, 51, 0.9);
  color: white;
  border-right: 0.2px solid #141516;
`;

export const MobileNavbarItem = styled.div<{
  focus: boolean;
  isChild?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ focus }) => (focus ? "rgba(120, 120, 120, 0.5)" : "transparent")};
  color: white;
  margin-top: ${({ isChild }) => (isChild ? "1px" : undefined)};
  width: 100%;
  height: 3rem;
  cursor: pointer;
`;

export const MobileNavbarMenu = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

export const MobileNavbarMenuLabel = styled.div`
  font-size: 1rem;
  transform: scale(0.5);
`;

export const MobileBodyContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1d1f21;
  color: white;
  overflow-x: hidden;
  overflow-y: hidden;

  :hover {
    overflow-y: auto;
  }
`;

//mobile menu screen
export const MobileWindowMenuItem = styled.div<{
  isEven?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ isEven }) => (isEven ? "transparent" : "#28292a")};
  color: white;
  padding: 0.25rem 0.5rem;
  width: 100%;
  height: 3rem;
  cursor: pointer;
`;

export const MobileMenuItemLabel = styled.div`
  font-weight: bold;
  margin-left: 1rem;
`;

// mobile panel
export const MobilePanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
`;

export const MobileBackButtonContainer = styled.div`
  display: flex;
  color: white;
  justify-content: flex-start;
  align-items: center;
  height: 1.5rem;
  padding: 0.5rem;
`;

export const MobileBackButton = styled.div`
  position: fixed;
  margin-top: 0.75rem;
  padding: 0.5rem;
`;
