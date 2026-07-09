import React from "react";
import AppWindow from "../../../components/AppWindow";
import Calendar from "../../../components/calendar/Calendar";

const CalendarWindow: React.FC = () => (
  <AppWindow
    id="Calendar"
    defaultSize={{ width: 380, height: 420 }}
    defaultPosition={({ width }) => ({ x: Math.max(width - 380 - 40, 20), y: 320 })}
    minWidth={340}
    minHeight={380}
  >
    <Calendar />
  </AppWindow>
);

export default CalendarWindow;
