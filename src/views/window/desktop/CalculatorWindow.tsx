import React from "react";
import AppWindow from "../../../components/AppWindow";
import { Calculator } from "../../../components/calculator";

const CalculatorWindow: React.FC = () => (
  <AppWindow
    id="Calculator"
    defaultSize={{ width: 240, height: 400 }}
    defaultPosition={({ width }) => ({ x: Math.max(width - 240 - 40, 20), y: 80 })}
    minWidth={240}
    minHeight={400}
    resizable={false}
  >
    <Calculator />
  </AppWindow>
);

export default CalculatorWindow;
