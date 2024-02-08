import React from "react";

export const TABLET_MAX_WIDTH = 900;
export const MOBILE_MAX_WIDTH = 768;

const getScreenSize = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
};

export default function useScreenSize() {
  const [screenSize, setScreenSize] = React.useState(getScreenSize);

  React.useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
}
