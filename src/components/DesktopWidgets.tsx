import React from "react";
import CalendarWidget from "./calendar/CalendarWidget";
import WeatherWidget from "./weather/WeatherWidget";
import { useCalendarWindow, useWeatherWindow } from "../utils/appRegistry";

const widgetButton =
  "rounded-[26px] transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99] cursor-pointer";

const DesktopWidgets: React.FC = () => {
  const openCalendar = useCalendarWindow(state => state.open);
  const openWeather = useWeatherWindow(state => state.open);

  return (
    <div className="absolute top-12 left-3 z-0 flex flex-col items-start gap-4">
      <button aria-label="Calendar" onClick={openCalendar} className={widgetButton}>
        <CalendarWidget />
      </button>
      <button aria-label="Weather" onClick={openWeather} className={widgetButton}>
        <WeatherWidget />
      </button>
    </div>
  );
};

export default DesktopWidgets;
