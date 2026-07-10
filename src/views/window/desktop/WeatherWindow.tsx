import React from "react";
import AppWindow from "../../../components/AppWindow";
import Weather from "../../../components/weather/Weather";

const WeatherWindow: React.FC = () => (
  <AppWindow
    id="Weather"
    defaultSize={{ width: 320, height: 480 }}
    defaultPosition={({ width }) => ({ x: Math.max(width - 320 - 40, 20), y: 90 })}
    minWidth={300}
    minHeight={420}
  >
    <Weather />
  </AppWindow>
);

export default WeatherWindow;
