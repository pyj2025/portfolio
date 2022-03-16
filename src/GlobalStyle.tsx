import { Rnd } from "react-rnd";
import styled from "styled-components";

//Layout
export const TwoColumnsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
`;

//window
export const Window = styled(Rnd)`
  display: grid;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 0px 8px black;
`;

export const WindowTopbarContainer = styled.div`
  width: 100%;
  height: 28px;
  background-color: rgb(51, 52, 54);
  border-top: 1px solid rgb(70, 75, 80);
  padding: 0px 10px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
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

export const TopbarTitleImage = styled.img`
  width: 16px;
  height: 16px;
`;

export const TopbarTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
`;

export const TopbarTitleText = styled.span`
  margin-left: 6px;
  pointer-events: none;
`;

export const WindowBody = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
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
  border-bottom-left-radius: 6px;
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
  background-color: ${({ focus }) =>
    focus ? "rgba(120, 120, 120, 0.5)" : "transparent"};
  color: white;
  margin-top: ${({ first, isChild }) =>
    first ? "4px" : isChild ? "1px" : undefined};
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
  border-bottom-right-radius: 6px;
  overflow-x: hidden;
  overflow-y: scroll;
`;

//text
export const BoldText = styled.span`
  font-weight: bold;
`;

export const MutedText = styled.span`
  opacity: 0.5;
`;
