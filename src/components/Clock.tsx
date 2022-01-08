import * as React from "react";

const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const time = currentTime.toLocaleTimeString("en", {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
};

export default Clock;
