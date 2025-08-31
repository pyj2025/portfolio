import React from "react";
import useWindowsStore from "../../utils/useWindowsStore";
import { SMALL_ICON_SIZE, getIcon } from "../getIcon";

interface TopbarBtnProps {
  color: string;
  disabled: boolean;
  title?: string;
  onClick?: () => void;
  onTouchStart?: () => void;
}

const TopbarBtn: React.FC<TopbarBtnProps> = ({ color, disabled, title, onClick, onTouchStart }) => {
  const getBackgroundColor = () => {
    if (disabled) return "bg-[#686B6D]";
    switch (color) {
      case "minimize":
        return "bg-[#F7BD45]";
      case "expand":
        return "bg-[#5FCB43]";
      case "close":
        return "bg-[#ee514a]";
      default:
        return "bg-[#686B6D]";
    }
  };

  const getMarginLeft = () => {
    return color === "close" ? "ml-0" : "ml-2";
  };

  return (
    <div
      className={`
        w-3 h-3 
        text-[#62574c] 
        inline-block 
        ${getMarginLeft()} 
        rounded-lg 
        items-center 
        align-middle 
        ${getBackgroundColor()} 
        ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
      title={title}
      onClick={onClick}
      onTouchStart={onTouchStart}
    />
  );
};

const WelcomeTopbar: React.FC = () => {
  const { focusedWindow, closeWelcomeWindow } = useWindowsStore(state => state);

  return (
    <div className="topbar w-full h-7 bg-[rgb(51,52,54)] border-b border-[rgb(70,75,80)] px-2.5 py-0 cursor-default grid grid-cols-3 mx-auto items-center box-border">
      <div className="flex justify-start items-center">
        <TopbarBtn
          color="close"
          title={focusedWindow === "Welcome" ? "Close" : undefined}
          onClick={closeWelcomeWindow}
          onTouchStart={closeWelcomeWindow}
          disabled={focusedWindow !== "Welcome"}
        />
        <TopbarBtn color="disabled" disabled={true} />
        <TopbarBtn color="disabled" disabled={true} />
      </div>
      <div className="flex justify-center items-center text-center text-sm">
        {getIcon("Terminal", SMALL_ICON_SIZE)}
        <span className="ml-1.5 pointer-events-none">Welcome</span>
      </div>
      <div></div>
    </div>
  );
};

export default WelcomeTopbar;
