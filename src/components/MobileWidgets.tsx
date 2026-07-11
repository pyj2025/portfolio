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
  naturalHeight: number;
  targetWidth: number;
  ariaLabel: string;
  onClick: () => void;
  children: React.ReactNode;
}> = ({
  naturalWidth,
  naturalHeight,
  targetWidth,
  ariaLabel,
  onClick,
  children,
}) => {
  const scale = targetWidth / naturalWidth;

  // Height is derived from the widget's known natural size, not measured from
  // the DOM — measuring risked reading the height before the widget's content
  // finished laying out, leaving the scaled button too short and clipping the
  // bottom of the widget on real devices.
  //
  // The button owns the rounded corners + drop shadow: `overflow-hidden` clips
  // the scaled content to a crisp rounded rect, and the box-shadow lives on the
  // button (which is NOT clipped by its own overflow) so the shadow renders
  // cleanly around all four corners instead of being chopped at the bottom.
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      style={{
        width: targetWidth,
        height: naturalHeight * scale,
        borderRadius: 24 * scale,
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
      }}
      className="relative overflow-hidden shrink-0 transition-transform active:scale-95"
    >
      <div
        style={{
          width: naturalWidth,
          height: naturalHeight,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </button>
  );
};

const WIDGET_HEIGHT = 155;

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
      naturalHeight={WIDGET_HEIGHT}
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
      naturalHeight={WIDGET_HEIGHT}
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
      naturalHeight={WIDGET_HEIGHT}
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
