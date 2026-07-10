import React from "react";
import CalendarWidget from "./calendar/CalendarWidget";
import WeatherWidget from "./weather/WeatherWidget";
import TodoWidget from "./todo/TodoWidget";
import useScreenSize, { MOBILE_MAX_WIDTH } from "../utils/useScreenSize";
import {
  useCalendarWindow,
  useWeatherWindow,
  useTodoWindow,
} from "../utils/appRegistry";

/**
 * Renders a fixed-size desktop widget scaled to fit `targetWidth`, keeping its
 * design intact. Height is measured from the natural layout and scaled to match.
 */
const ScaledWidget: React.FC<{
  naturalWidth: number;
  targetWidth: number;
  ariaLabel: string;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ naturalWidth, targetWidth, ariaLabel, onClick, children }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<number>();
  const scale = targetWidth / naturalWidth;

  React.useLayoutEffect(() => {
    if (ref.current) setHeight(ref.current.offsetHeight * scale);
  }, [scale]);

  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      style={{ width: targetWidth, height }}
      className="relative overflow-hidden shrink-0 transition-transform active:scale-95"
    >
      <div
        ref={ref}
        style={{
          width: naturalWidth,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </button>
  );
};

const H_PADDING = 12;
const GAP = 8;

const MobileWidgets: React.FC = () => {
  const { width } = useScreenSize();
  const openCalendar = useCalendarWindow(state => state.open);
  const openWeather = useWeatherWindow(state => state.open);
  const openTodo = useTodoWindow(state => state.open);

  const calendar = (targetWidth: number) => (
    <ScaledWidget
      naturalWidth={330}
      targetWidth={targetWidth}
      ariaLabel="Calendar"
      onClick={openCalendar}
    >
      <CalendarWidget />
    </ScaledWidget>
  );
  const weather = (targetWidth: number) => (
    <ScaledWidget
      naturalWidth={155}
      targetWidth={targetWidth}
      ariaLabel="Weather"
      onClick={openWeather}
    >
      <WeatherWidget />
    </ScaledWidget>
  );
  const todo = (targetWidth: number) => (
    <ScaledWidget
      naturalWidth={155}
      targetWidth={targetWidth}
      ariaLabel="Todo"
      onClick={openTodo}
    >
      <TodoWidget />
    </ScaledWidget>
  );

  // phone: calendar on its own row, weather + todo on the next row
  if (width <= MOBILE_MAX_WIDTH) {
    const full = width - H_PADDING * 2;
    const half = (full - GAP) / 2;
    return (
      <div
        className="flex flex-col items-start"
        style={{ padding: `12px ${H_PADDING}px`, gap: GAP }}
      >
        {calendar(full)}
        <div className="flex flex-row" style={{ gap: GAP }}>
          {weather(half)}
          {todo(half)}
        </div>
      </div>
    );
  }

  // tablet / iPad: calendar : weather : todo = 2 : 1 : 1 in one row
  const unit = (width - H_PADDING * 2 - GAP * 2) / 4;
  return (
    <div
      className="flex flex-row items-start"
      style={{ padding: `12px ${H_PADDING}px`, gap: GAP }}
    >
      {calendar(unit * 2)}
      {weather(unit)}
      {todo(unit)}
    </div>
  );
};

export default MobileWidgets;
