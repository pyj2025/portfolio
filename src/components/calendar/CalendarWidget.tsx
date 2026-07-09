import React from "react";
import { cn } from "../../utils/cn";
import {
  MONTH_NAMES,
  WEEKDAY_LETTERS,
  WEEKDAY_NAMES,
  daysInYear,
  getDayOfYear,
  getMonthCells,
  weeksInMonth,
} from "../../utils/calendar";

const pad2 = (n: number) => String(n).padStart(2, "0");

const CalendarWidget: React.FC = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  const cells = getMonthCells(year, month, today).slice(
    0,
    weeksInMonth(year, month) * 7,
  );

  return (
    <div className="w-[340px] rounded-[26px] bg-white text-[#1d1d1f] shadow-[0_10px_30px_rgba(0,0,0,0.25)] p-4 flex flex-row gap-4 select-none">
      {/* left summary */}
      <div className="flex flex-col justify-between shrink-0 w-[120px]">
        <div className="text-lg font-semibold tracking-tight">
          {year}.{pad2(month + 1)}
        </div>
        <div className="text-[64px] leading-none font-bold -mt-1">{day}</div>
        <div>
          <div className="text-sm font-semibold">
            {MONTH_NAMES[month]} {pad2(day)} {WEEKDAY_NAMES[today.getDay()]}
          </div>
          <div className="text-sm text-gray-400">
            {getDayOfYear(today)}/{daysInYear(year)}
          </div>
        </div>
      </div>

      {/* right mini month */}
      <div className="flex-1">
        <div className="grid grid-cols-7 gap-y-1.5 text-center text-[13px]">
          {WEEKDAY_LETTERS.map((d, i) => (
            <div key={i} className="text-gray-400 font-medium">
              {d}
            </div>
          ))}
          {cells.map((cell, i) => (
            <div key={i} className="flex items-center justify-center">
              {cell.inMonth ? (
                <span
                  className={cn(
                    "flex items-center justify-center w-6 h-6 rounded-full",
                    cell.isToday
                      ? "bg-[#ff3b30] text-white font-semibold"
                      : cell.isWeekend
                      ? "text-gray-400"
                      : "text-[#1d1d1f]",
                  )}
                >
                  {cell.day}
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;
