import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faCloud,
  faCloudSun,
  faCloudMoon,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faBolt,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { cn } from "../../utils/cn";
import useWeather from "../../utils/useWeather";

// icon fields are loosely typed to avoid the duplicate @fortawesome common-types clash
type Condition = { label: string; day: any; night?: any };

// WMO weather codes → label + icon
const CONDITIONS: Record<number, Condition> = {
  0: { label: "Clear", day: faSun, night: faMoon },
  1: { label: "Mostly Clear", day: faCloudSun, night: faCloudMoon },
  2: { label: "Partly Cloudy", day: faCloudSun, night: faCloudMoon },
  3: { label: "Cloudy", day: faCloud },
  45: { label: "Fog", day: faSmog },
  48: { label: "Fog", day: faSmog },
  51: { label: "Drizzle", day: faCloudRain },
  53: { label: "Drizzle", day: faCloudRain },
  55: { label: "Drizzle", day: faCloudRain },
  56: { label: "Freezing Drizzle", day: faCloudRain },
  57: { label: "Freezing Drizzle", day: faCloudRain },
  61: { label: "Rain", day: faCloudShowersHeavy },
  63: { label: "Rain", day: faCloudShowersHeavy },
  65: { label: "Heavy Rain", day: faCloudShowersHeavy },
  66: { label: "Freezing Rain", day: faCloudShowersHeavy },
  67: { label: "Freezing Rain", day: faCloudShowersHeavy },
  71: { label: "Snow", day: faSnowflake },
  73: { label: "Snow", day: faSnowflake },
  75: { label: "Heavy Snow", day: faSnowflake },
  77: { label: "Snow", day: faSnowflake },
  80: { label: "Showers", day: faCloudRain },
  81: { label: "Showers", day: faCloudRain },
  82: { label: "Heavy Showers", day: faCloudShowersHeavy },
  85: { label: "Snow Showers", day: faSnowflake },
  86: { label: "Snow Showers", day: faSnowflake },
  95: { label: "Thunderstorm", day: faBolt },
  96: { label: "Thunderstorm", day: faBolt },
  99: { label: "Thunderstorm", day: faBolt },
};

const getCondition = (code: number, isDay: boolean) => {
  const c = CONDITIONS[code] ?? CONDITIONS[3];
  const icon = (!isDay && c.night ? c.night : c.day) as IconProp;
  return { label: c.label, icon };
};

const WeatherWidget: React.FC = () => {
  const { data, error } = useWeather();

  const isDay = data?.isDay ?? true;
  const condition = data ? getCondition(data.code, data.isDay) : null;

  return (
    <div
      className={cn(
        "w-[155px] h-[155px] rounded-[24px] p-3.5 flex flex-col justify-between text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] select-none bg-gradient-to-b",
        isDay ? "from-[#3f8fd6] to-[#7cc0f5]" : "from-[#1b2a4a] to-[#33507f]",
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
