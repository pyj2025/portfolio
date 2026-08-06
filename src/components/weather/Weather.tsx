import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerHalf, faTint, faWind } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { cn } from "../../utils/cn";
import useWeather from "../../utils/useWeather";
import { getCondition, skyGradient } from "./conditions";
import Stat from "./Stat";
import WeatherFallback from "./WeatherFallback";
import { WEEKDAY_SHORT } from "./constants";

const Weather: React.FC = () => {
  const { data, error } = useWeather();
  const isDay = data?.isDay ?? true;

  if (error || !data) {
    return <WeatherFallback error={!!error} />;
  }

  const condition = getCondition(data.code, data.isDay);

  return (
    <div
      className={cn(
        "w-full h-full overflow-y-auto text-white bg-gradient-to-b",
        skyGradient(isDay),
      )}
    >
      <div className="flex flex-col items-center px-5 pt-5 pb-3">
        <div className="text-lg font-semibold">Vancouver</div>
        <FontAwesomeIcon icon={condition.icon} className="text-4xl my-2 drop-shadow" />
        <div className="text-[64px] leading-none font-light">{data.temp}°</div>
        <div className="text-sm font-medium mt-1">{condition.label}</div>
        <div className="text-sm opacity-85">
          H:{data.high}° L:{data.low}°
        </div>
      </div>

      <div className="flex gap-2 px-4">
        <Stat icon={faThermometerHalf as IconProp} label="Feels" value={`${data.feelsLike}°`} />
        <Stat icon={faTint as IconProp} label="Humidity" value={`${data.humidity}%`} />
        <Stat icon={faWind as IconProp} label="Wind" value={`${data.wind}`} />
      </div>

      <div className="mt-4 mx-4 mb-4 rounded-xl bg-white/15 px-3 py-2">
        <div className="text-[10px] uppercase tracking-wide opacity-70 pb-1 border-b border-white/15">
          7-Day Forecast
        </div>
        {data.daily.map((d, i) => {
          const dow = new Date(`${d.date}T00:00`).getDay();
          const dayCond = getCondition(d.code, true);
          return (
            <div key={d.date} className="flex items-center gap-3 py-1.5 text-sm">
              <span className="w-10 font-medium">{i === 0 ? "Today" : WEEKDAY_SHORT[dow]}</span>
              <FontAwesomeIcon icon={dayCond.icon} className="w-5 text-center opacity-90" />
              <span className="ml-auto opacity-70">{d.min}°</span>
              <span className="w-8 text-right font-medium">{d.max}°</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Weather;
