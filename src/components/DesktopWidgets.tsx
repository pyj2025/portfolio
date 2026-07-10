import React from "react";
import CalendarWidget from "./calendar/CalendarWidget";
import WeatherWidget from "./weather/WeatherWidget";
import { useCalendarWindow } from "../utils/appRegistry";

const DesktopWidgets: React.FC = () => {
  const openCalendar = useCalendarWindow(state => state.open);

  return (
    <div className="absolute top-12 left-3 z-0 flex flex-col items-start gap-4">
      <button
        aria-label="Calendar"
        onClick={openCalendar}
        className="rounded-[26px] transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
      >
        <CalendarWidget />
      </button>
      <WeatherWidget />
    </div>
  );
};

export default DesktopWidgets;
