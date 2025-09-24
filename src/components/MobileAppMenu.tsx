import React from "react";
import { isMobile, isTablet } from "react-device-detect";
import useScreenSize, { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from "../utils/useScreenSize";
import { getIcon } from "./getIcon";
import info from "../info.json";
import { cn } from "../utils/cn";

const IconContainerStyle =
  "flex flex-col justify-center items-center text-center text-white mx-auto p-2 no-underline cursor-pointer";

const IconStyle = "flex flex-col w-12 h-12 bg-white rounded-lg justify-center items-center";

const IconLabelStyle = "mt-1";

const MobileAppMenu: React.FC = () => {
  const { width } = useScreenSize();
  const [numOfCols, setNumOfCols] = React.useState(5);

  React.useEffect(() => {
    if (isMobile || width <= MOBILE_MAX_WIDTH) {
      setNumOfCols(4);
    } else if (isTablet || (width > MOBILE_MAX_WIDTH && width <= TABLET_MAX_WIDTH)) {
      setNumOfCols(5);
    } else {
      setNumOfCols(5);
    }
  }, [width]);

  const handleEmailClick = React.useCallback(() => {
    window.open(`mailto:${info.about.info.email}`);
  }, []);

  const getGridCols = (cols: number) => {
    switch (cols) {
      case 4:
        return "grid-cols-4";
      case 5:
        return "grid-cols-5";
      default:
        return "grid-cols-5";
    }
  };

  return (
    <div className="flex items-start w-full">
      <div className={`grid ${getGridCols(numOfCols)} gap-2 w-full`}>
        <a
          title="Resume"
          href="https://drive.google.com/file/d/14bb5ogfmAumTw7cMA_0PEUVwsPE_mOd-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={IconContainerStyle}
        >
          <div className={IconStyle}>{getIcon("Resume")}</div>
          <div className={IconLabelStyle}>Resume</div>
        </a>

        <a
          title="Github"
          href="https://github.com/pyj2025"
          target="_blank"
          rel="noopener noreferrer"
          className={IconContainerStyle}
        >
          <div className={IconStyle}>{getIcon("Github")}</div>
          <div className={IconLabelStyle}>Github</div>
        </a>

        <a
          title="Linkedin"
          href="https://www.linkedin.com/in/devjoon/"
          target="_blank"
          rel="noopener noreferrer"
          className={IconContainerStyle}
        >
          <div className={IconStyle}>{getIcon("Linkedin")}</div>
          <div className={IconLabelStyle}>Linkedin</div>
        </a>

        <a
          title="Facebook"
          href="https://www.facebook.com/youngjoon.park.71"
          target="_blank"
          rel="noopener noreferrer"
          className={IconContainerStyle}
        >
          <div className={IconStyle}>{getIcon("Facebook")}</div>
          <div className={IconLabelStyle}>Facebook</div>
        </a>

        <button
          title="Email"
          onClick={handleEmailClick}
          className={cn(IconContainerStyle, "bg-transparent border-none")}
        >
          <div className={IconStyle}>{getIcon("Email")}</div>
          <div className={IconLabelStyle}>Email</div>
        </button>
      </div>
    </div>
  );
};

export default React.memo(MobileAppMenu);
