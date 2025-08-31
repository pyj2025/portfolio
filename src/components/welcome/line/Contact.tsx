import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import info from "../../../info.json";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const LineWrapperStyle = "flex flex-row justify-start items-center gap-2";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-start mx-2 px-2">
      <div className={LineWrapperStyle}>
        <div>#</div>
        <div>Info</div>
      </div>
      <div className={LineWrapperStyle}>
        <div>##</div>
        <div>Email</div>
      </div>
      <div className={LineWrapperStyle}>
        <FontAwesomeIcon icon={faAngleRight as IconProp} />
        <div>{info.about.info.email}</div>
      </div>
      <div className={LineWrapperStyle}>
        <div>##</div>
        <div>Phone Number</div>
      </div>
      <div className={LineWrapperStyle}>
        <FontAwesomeIcon icon={faAngleRight as IconProp} />
        <div>{info.about.info.phoneNumber}</div>
      </div>
    </div>
  );
};

export default React.memo(Contact);
