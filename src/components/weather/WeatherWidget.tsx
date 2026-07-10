import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "../../utils/cn";
import useWeather from "../../utils/useWeather";
import { getCondition, skyGradient } from "./conditions";

const WeatherWidget: React.FC = () => {
  const { data, error } = useWeather();

  const isDay = data?.isDay ?? true;
  const condition = data ? getCondition(data.code, data.isDay) : null;

  return (
    <div
      className={cn(
        "w-[155px] h-[155px] rounded-[24px] p-3.5 flex flex-col justify-between text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] select-none bg-gradient-to-b",
        skyGradient(isDay),
      )}
    >
      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <div className="text-[15px] font-semibold leading-tight truncate">
            Vancouver
          </div>
          <div className="text-[28px] font-medium leading-none mt-1">
            {data ? `${data.temp}°` : error ? "—" : "··"}
          </div>
        </div>
        {condition && (
          <FontAwesomeIcon
            icon={condition.icon}
            className="text-2xl mt-0.5 drop-shadow"
          />
        )}
      </div>

      <div className="text-xs leading-tight">
        {error ? (
          <div className="opacity-90">Weather unavailable</div>
        ) : data ? (
          <>
            <div className="font-medium">{condition?.label}</div>
            <div className="opacity-85">
              H:{data.high}° L:{data.low}°
            </div>
          </>
        ) : (
          <div className="opacity-70">Loading…</div>
        )}
      </div>
    </div>
  );
};

export default WeatherWidget;
