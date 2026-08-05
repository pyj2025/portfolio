import React from "react";
import { cn } from "../../utils/cn";

interface CalculatorButtonProps {
  label: string;
  onClick: () => void;
  variant?: "function" | "digit" | "operator";
  active?: boolean;
  wide?: boolean;
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  label,
  onClick,
  variant = "digit",
  active = false,
  wide = false,
}) => (
  <button
    onClick={onClick}
    className={cn(
      "h-11 rounded-full text-lg font-medium flex items-center justify-center select-none transition-colors active:brightness-125",
      variant === "function" && "bg-[#a5a5a5] text-black",
      variant === "digit" && "bg-[#333333] text-white",
      variant === "operator" && "bg-[#ff9f0a] text-white text-2xl",
      active && "bg-white text-[#ff9f0a]",
      wide ? "col-span-2 justify-start pl-5" : "",
    )}
  >
    {label}
  </button>
);

export default React.memo(CalculatorButton);
