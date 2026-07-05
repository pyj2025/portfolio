import React from "react";

type TypewriterProps = {
  text: string;
  // ms per character
  speed?: number;
  onDone?: () => void;
  className?: string;
};

/** Minimal replacement for the abandoned react-typist package. */
const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 45,
  onDone,
  className,
}) => {
  const [count, setCount] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const onDoneRef = React.useRef(onDone);
  onDoneRef.current = onDone;

  React.useEffect(() => {
    setCount(0);
    setDone(false);
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= text.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  React.useEffect(() => {
    if (count >= text.length && !done) {
      const timeout = setTimeout(() => {
        setDone(true);
        onDoneRef.current?.();
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [count, text, done]);

  return (
    <span className={className}>
      {text.slice(0, count)}
      {!done && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default Typewriter;
