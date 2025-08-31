import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LineWrapperStyle = "flex flex-row justify-start items-center gap-2";

const Intro: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-start mx-2 px-2">
      <div className={LineWrapperStyle}>
        <div>#</div>
        <div>Hi, I'm Youngjoon.</div>
      </div>
      <div className={LineWrapperStyle}>
        <FontAwesomeIcon icon={faAngleRight as IconProp} />
        <div>I'm a Full Stack Software developer who transforms digital dreams into reality.</div>
      </div>
      <div className={LineWrapperStyle}>
        <FontAwesomeIcon icon={faAngleRight as IconProp} />
        <div>I am passionate about developing both web and mobile applications.</div>
      </div>
      <div className={LineWrapperStyle}>
        <FontAwesomeIcon icon={faAngleRight as IconProp} />
        <div>I am an alumnus of Purdue University with a major in Computer Science.</div>
      </div>
      <div className={LineWrapperStyle}>
        <FontAwesomeIcon icon={faAngleRight as IconProp} />
        <div>
          Feel free to explore my portfolio and discover how I bring innovative ideas to life.
        </div>
      </div>
    </div>
  );
};

export default React.memo(Intro);
