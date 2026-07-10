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

export const getCondition = (
  code: number,
  isDay: boolean,
): { label: string; icon: IconProp } => {
  const c = CONDITIONS[code] ?? CONDITIONS[3];
  const icon = (!isDay && c.night ? c.night : c.day) as IconProp;
  return { label: c.label, icon };
};

/** macOS-weather-style sky gradient — brighter by day, dusky by night. */
export const skyGradient = (isDay: boolean): string =>
  isDay ? "from-[#3f8fd6] to-[#7cc0f5]" : "from-[#1b2a4a] to-[#33507f]";
