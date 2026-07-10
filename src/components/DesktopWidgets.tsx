import React from "react";
import CalendarWidget from "./calendar/CalendarWidget";
import WeatherWidget from "./weather/WeatherWidget";
import TodoWidget from "./todo/TodoWidget";
import {
  useCalendarWindow,
  useWeatherWindow,
  useTodoWindow,
} from "../utils/appRegistry";

const widgetButton =
  "rounded-[26px] transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99] cursor-pointer";

const DesktopWidgets: React.FC = () => {
  const openCalendar = useCalendarWindow(state => state.open);
  const openWeather = useWeatherWindow(state => state.open);
  const openTodo = useTodoWindow(state => state.open);

  return (
    <div className="absolute top-12 left-3 z-0 flex flex-col items-start gap-4">
      <button aria-label="Calendar" onClick={openCalendar} className={widgetButton}>
        <CalendarWidget />
      </button>
      <div className="flex flex-row gap-4">
        <button aria-label="Weather" onClick={openWeather} className={widgetButton}>
          <WeatherWidget />
        </button>
        <button aria-label="Todo" onClick={openTodo} className={widgetButton}>
          <TodoWidget />
        </button>
      </div>
    </div>
  );
};

export default DesktopWidgets;
