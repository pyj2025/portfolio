import React from "react";
import CalendarWidget from "./calendar/CalendarWidget";
import WeatherWidget from "./weather/WeatherWidget";
import TodoWidget from "./todo/TodoWidget";
import useScreenSize from "../utils/useScreenSize";
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

  // calendar : weather : todo = 2 : 1 : 1 across the screen width
  const unit = (width - H_PADDING * 2 - GAP * 2) / 4;

  return (
    <div
      className="flex flex-row items-start"
      style={{ padding: `12px ${H_PADDING}px`, gap: GAP }}
    >
      <ScaledWidget
        naturalWidth={330}
        targetWidth={unit * 2}
        ariaLabel="Calendar"
        onClick={openCalendar}
      >
        <CalendarWidget />
      </ScaledWidget>
      <ScaledWidget
        naturalWidth={155}
        targetWidth={unit}
        ariaLabel="Weather"
        onClick={openWeather}
      >
        <WeatherWidget />
      </ScaledWidget>
      <ScaledWidget
        naturalWidth={155}
        targetWidth={unit}
        ariaLabel="Todo"
        onClick={openTodo}
      >
        <TodoWidget />
      </ScaledWidget>
    </div>
  );
};

export default MobileWidgets;
