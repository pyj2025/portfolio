import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { cn } from "../../utils/cn";
import {
  MONTH_NAMES,
  WEEKDAY_LETTERS,
  WEEKDAY_NAMES,
  daysInYear,
  getDayOfYear,
  getMonthCells,
} from "../../utils/calendar";

const Calendar: React.FC = () => {
  const today = React.useMemo(() => new Date(), []);
  const [cursor, setCursor] = React.useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  const shiftMonth = (delta: number) => {
    setCursor(({ year, month }) => {
      const d = new Date(year, month + delta, 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  };

  const goToday = () =>
    setCursor({ year: today.getFullYear(), month: today.getMonth() });

  const cells = getMonthCells(cursor.year, cursor.month, today);

  return (
    <div className="w-full h-full bg-[var(--wc-bg)] text-[color:var(--wc-text)] flex flex-col">
      {/* header */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3">
        <div>
          <div className="text-xl font-semibold leading-tight">
            {MONTH_NAMES[cursor.month]} {cursor.year}
          </div>
          <div className="text-xs text-[color:var(--wc-muted)]">
            {WEEKDAY_NAMES[today.getDay()]}, {MONTH_NAMES[today.getMonth()]}{" "}
            {today.getDate()} · Day {getDayOfYear(today)} of {daysInYear(today.getFullYear())}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            aria-label="Today"
            onClick={goToday}
            className="px-2.5 h-7 rounded-md text-xs font-medium bg-[var(--hover-overlay)] hover:bg-[var(--hover-overlay-strong)] transition-colors"
          >
            Today
          </button>
          <button
            aria-label="Previous month"
            onClick={() => shiftMonth(-1)}
            className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-[var(--hover-overlay)] transition-colors"
          >
            <FontAwesomeIcon icon={faChevronLeft as IconProp} />
          </button>
          <button
            aria-label="Next month"
            onClick={() => shiftMonth(1)}
            className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-[var(--hover-overlay)] transition-colors"
          >
            <FontAwesomeIcon icon={faChevronRight as IconProp} />
          </button>
        </div>
      </div>

      {/* weekday header */}
      <div className="grid grid-cols-7 px-4 pb-1 text-center text-xs font-medium text-[color:var(--wc-muted)] border-b border-b-[color:var(--win-border)]">
        {WEEKDAY_LETTERS.map((d, i) => (
          <div key={i} className="pb-1.5">
            {d}
          </div>
        ))}
      </div>

      {/* grid */}
      <div className="flex-1 grid grid-cols-7 grid-rows-6 px-2 py-1">
        {cells.map((cell, i) => (
          <div key={i} className="flex items-start justify-center pt-1">
            <span
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full text-sm",
                cell.isToday
                  ? "bg-[#ff3b30] text-white font-semibold"
                  : !cell.inMonth
                  ? "text-[color:var(--wc-muted)] opacity-50"
                  : cell.isWeekend
                  ? "text-[color:var(--wc-muted)]"
                  : "text-[color:var(--wc-text)]",
              )}
            >
              {cell.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
