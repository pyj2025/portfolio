import React from "react";

interface WelcomeTopbarBtnProps {
  color: string;
  disabled: boolean;
  title?: string;
  onClick?: () => void;
  onTouchStart?: () => void;
}

const WelcomeTopbarBtn: React.FC<WelcomeTopbarBtnProps> = ({
  color,
  disabled,
  title,
  onClick,
  onTouchStart,
}) => {
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

export default WelcomeTopbarBtn;
