import React from "react";
import { Op } from "./types";
import CalculatorButton from "./CalculatorButton";

const formatResult = (n: number): string => {
  if (!isFinite(n)) return "Error";
  const rounded = Math.round(n * 1e10) / 1e10;
  return String(rounded);
};

const formatDisplay = (value: string): string => {
  if (value === "Error") return value;
  const negative = value.startsWith("-");
  const unsigned = negative ? value.slice(1) : value;
  const [intPart, decPart] = unsigned.split(".");
  const grouped = intPart === "" ? "0" : Number(intPart).toLocaleString("en-US");
  const body = decPart !== undefined ? `${grouped}.${decPart}` : grouped;
  return (negative ? "-" : "") + body;
};

const calculate = (a: number, b: number, op: Op): number => {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "×":
      return a * b;
    case "÷":
      return b === 0 ? NaN : a / b;
  }
};

const Calculator: React.FC = () => {
  const [display, setDisplay] = React.useState("0");
  const [prev, setPrev] = React.useState<number | null>(null);
  const [op, setOp] = React.useState<Op | null>(null);
  const [waiting, setWaiting] = React.useState(false);

  const inputDigit = (d: string) => {
    if (display === "Error") {
      setDisplay(d);
      setWaiting(false);
      return;
    }
    if (waiting) {
      setDisplay(d);
      setWaiting(false);
    } else {
      setDisplay(display === "0" ? d : display + d);
    }
  };

  const inputDot = () => {
    if (waiting || display === "Error") {
      setDisplay("0.");
      setWaiting(false);
      return;
    }
    if (!display.includes(".")) setDisplay(display + ".");
  };

  const clearAll = () => {
    setDisplay("0");
    setPrev(null);
    setOp(null);
    setWaiting(false);
  };

  const toggleSign = () => {
    if (display === "Error") return;
    setDisplay(formatResult(parseFloat(display) * -1));
  };

  const percent = () => {
    if (display === "Error") return;
    setDisplay(formatResult(parseFloat(display) / 100));
  };

  const performOp = (nextOp: Op) => {
    if (display === "Error") return;
    const value = parseFloat(display);
    if (prev === null) {
      setPrev(value);
    } else if (op && !waiting) {
      const result = calculate(prev, value, op);
      setDisplay(formatResult(result));
      setPrev(isFinite(result) ? result : null);
    }
    setOp(nextOp);
    setWaiting(true);
  };

  const equals = () => {
    if (op === null || prev === null || display === "Error") return;
    const result = calculate(prev, parseFloat(display), op);
    setDisplay(formatResult(result));
    setPrev(null);
    setOp(null);
    setWaiting(true);
  };

  return (
    <div className="w-full h-full bg-black flex flex-col p-2.5 gap-2">
      <div className="flex-1 flex items-end justify-end px-2 pb-1 text-white text-4xl font-light truncate">
        {formatDisplay(display)}
      </div>
      <div className="grid grid-cols-4 gap-2">
        <CalculatorButton label="AC" variant="function" onClick={clearAll} />
        <CalculatorButton label="+/−" variant="function" onClick={toggleSign} />
        <CalculatorButton label="%" variant="function" onClick={percent} />
        <CalculatorButton
          label="÷"
          variant="operator"
          active={op === "÷" && waiting}
          onClick={() => performOp("÷")}
        />

        <CalculatorButton label="7" onClick={() => inputDigit("7")} />
        <CalculatorButton label="8" onClick={() => inputDigit("8")} />
        <CalculatorButton label="9" onClick={() => inputDigit("9")} />
        <CalculatorButton
          label="×"
          variant="operator"
          active={op === "×" && waiting}
          onClick={() => performOp("×")}
        />

        <CalculatorButton label="4" onClick={() => inputDigit("4")} />
        <CalculatorButton label="5" onClick={() => inputDigit("5")} />
        <CalculatorButton label="6" onClick={() => inputDigit("6")} />
        <CalculatorButton
          label="−"
          variant="operator"
          active={op === "-" && waiting}
          onClick={() => performOp("-")}
        />

        <CalculatorButton label="1" onClick={() => inputDigit("1")} />
        <CalculatorButton label="2" onClick={() => inputDigit("2")} />
        <CalculatorButton label="3" onClick={() => inputDigit("3")} />
        <CalculatorButton
          label="+"
          variant="operator"
          active={op === "+" && waiting}
          onClick={() => performOp("+")}
        />

        <CalculatorButton label="0" wide onClick={() => inputDigit("0")} />
        <CalculatorButton label="." onClick={inputDot} />
        <CalculatorButton label="=" variant="operator" onClick={equals} />
      </div>
    </div>
  );
};

export default React.memo(Calculator);
