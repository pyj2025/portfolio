import React from "react";
import { cn } from "../../utils/cn";

type Op = "+" | "-" | "×" | "÷";

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

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: "function" | "digit" | "operator";
  active?: boolean;
  wide?: boolean;
};

const CalcButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "digit",
  active = false,
  wide = false,
}) => (
  <button
    onClick={onClick}
    className={cn(
      "h-11 rounded-full text-lg font-medium flex items-center justify-center select-none transition-colors active:brightness-125",
      variant === "function" && "bg-[#a5a5a5] text-black",
      variant === "digit" && "bg-[#333333] text-white",
      variant === "operator" && "bg-[#ff9f0a] text-white text-2xl",
      active && "bg-white text-[#ff9f0a]",
      wide ? "col-span-2 justify-start pl-5" : "",
    )}
  >
    {label}
  </button>
);

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
        <CalcButton label="AC" variant="function" onClick={clearAll} />
        <CalcButton label="+/−" variant="function" onClick={toggleSign} />
        <CalcButton label="%" variant="function" onClick={percent} />
        <CalcButton
          label="÷"
          variant="operator"
          active={op === "÷" && waiting}
          onClick={() => performOp("÷")}
        />

        <CalcButton label="7" onClick={() => inputDigit("7")} />
        <CalcButton label="8" onClick={() => inputDigit("8")} />
        <CalcButton label="9" onClick={() => inputDigit("9")} />
        <CalcButton
          label="×"
          variant="operator"
          active={op === "×" && waiting}
          onClick={() => performOp("×")}
        />

        <CalcButton label="4" onClick={() => inputDigit("4")} />
        <CalcButton label="5" onClick={() => inputDigit("5")} />
        <CalcButton label="6" onClick={() => inputDigit("6")} />
        <CalcButton
          label="−"
          variant="operator"
          active={op === "-" && waiting}
          onClick={() => performOp("-")}
        />

        <CalcButton label="1" onClick={() => inputDigit("1")} />
        <CalcButton label="2" onClick={() => inputDigit("2")} />
        <CalcButton label="3" onClick={() => inputDigit("3")} />
        <CalcButton
          label="+"
          variant="operator"
          active={op === "+" && waiting}
          onClick={() => performOp("+")}
        />

        <CalcButton label="0" wide onClick={() => inputDigit("0")} />
        <CalcButton label="." onClick={inputDot} />
        <CalcButton label="=" variant="operator" onClick={equals} />
      </div>
    </div>
  );
};

export default React.memo(Calculator);
