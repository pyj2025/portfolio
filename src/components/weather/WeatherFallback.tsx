import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { cn } from "../../utils/cn";
import { skyGradient } from "./conditions";

interface WeatherFallbackProps {
  error?: boolean;
}

const WeatherFallback: React.FC<WeatherFallbackProps> = ({ error }) => (
  <div
    className={cn(
      "w-full h-full flex flex-col items-center justify-center gap-3 text-white bg-gradient-to-b",
      skyGradient(true),
    )}
  >
    {error ? (
      <>
        <FontAwesomeIcon icon={faExclamationCircle as IconProp} className="text-3xl opacity-90" />
        <div className="text-sm opacity-90">Weather unavailable</div>
      </>
    ) : (
      <div className="w-8 h-8 rounded-full border-[3px] border-white/30 border-t-white animate-spin" />
    )}
  </div>
);

export default WeatherFallback;
