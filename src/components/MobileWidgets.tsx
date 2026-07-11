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

  // The button reserves exactly the scaled footprint (targetWidth x scaled
  // height) and the widget inside is scaled to fill it. We intentionally do NOT
  // use `overflow-hidden`: combined with the CSS transform it mis-clipped the
  // scaled content (chopping the bottom of the widget) on real devices. Because
  // the footprint already matches the scaled size there is nothing to clip, and
  // letting overflow show lets each widget's own rounded corners + drop shadow
  // render naturally.
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      style={{ width: targetWidth, height: naturalHeight * scale }}
      className="relative shrink-0 transition-transform active:scale-95"
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

// Natural widget footprints (must match the desktop CalendarWidget/WeatherWidget/
// TodoWidget sizes). Calendar is a 330x155 landscape card; weather + todo are
// 155x155 squares. Because every widget shares WIDGET_HEIGHT (155), scaling them
// all by one factor keeps their on-screen heights identical.
const WIDGET_HEIGHT = 155;
const CAL_WIDTH = 330;
const SQUARE_WIDTH = 155;

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

  // Every widget is scaled by the SAME factor `k` so their heights always
  // match (calendar height == square side, exactly like the desktop layout
  // where the calendar is 330x155 and the squares are 155x155). `k` is capped
  // at 1 so the widgets never grow TALLER than their desktop size — they only
  // shrink to fit a narrow screen, matching the desktop widget height at most.
  const avail = width - H_PADDING * 2;

  // phone: calendar spans the row, weather + todo fill the row below it
  if (width <= MOBILE_MAX_WIDTH) {
    const k = Math.min(avail / CAL_WIDTH, 1);
    const calW = CAL_WIDTH * k;
    const square = SQUARE_WIDTH * k; // == calendar height, keeps all three equal
    const innerGap = calW - square * 2; // weather + todo align to the calendar edges
    return (
      <div
        className="flex flex-col items-center"
        style={{ padding: `10px ${H_PADDING}px 24px`, gap: 10 }}
      >
        {calendar(calW)}
        <div className="flex flex-row" style={{ gap: innerGap }}>
          {weather(square)}
          {todo(square)}
        </div>
      </div>
    );
  }

  // tablet / iPad: calendar : weather : todo in one row, same uniform scale
  const k = Math.min((avail - GAP * 2) / (CAL_WIDTH + SQUARE_WIDTH * 2), 1);
  return (
    <div
      className="flex flex-row items-start justify-center"
      style={{ padding: `10px ${H_PADDING}px 24px`, gap: GAP }}
    >
      {calendar(CAL_WIDTH * k)}
      {weather(SQUARE_WIDTH * k)}
      {todo(SQUARE_WIDTH * k)}
    </div>
  );
};

export default MobileWidgets;
