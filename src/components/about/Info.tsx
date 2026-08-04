import React from "react";
import { faEnvelope, faMapMarkerAlt, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import info from "../../info.json";
import profileImage from "../../image/Profile.png";
import RowWrapper from "./RowWrapper";

const Info: React.FC = () => {
  return (
    <div className="flex flex-col items-center max-w-md mx-auto px-5 py-6">
      <div className="w-[110px] h-[110px] overflow-hidden rounded-full shadow-lg">
        <img src={profileImage} alt="Profile" className="w-full h-auto" />
      </div>

      <div className="mt-3 text-lg font-semibold">
        {`${info.about.info.name.firstName} ${info.about.info.name.lastName}`}
      </div>
      <div className="text-[13px] text-[color:var(--wc-muted)]">Full Stack Software Developer</div>

      <div className="w-full mt-5 rounded-xl bg-[var(--hover-overlay)]/50 divide-y divide-[color:var(--win-border)]">
        <RowWrapper icon={faBriefcase as IconProp} label="Role">
          Software Developer @ Global Relay
        </RowWrapper>
        <RowWrapper icon={faMapMarkerAlt as IconProp} label="Location">
          Vancouver, BC, Canada
        </RowWrapper>
        <RowWrapper icon={faEnvelope as IconProp} label="Email">
          <a href={`mailto:${info.about.info.email}`} className="text-[var(--accent)] no-underline">
            {info.about.info.email}
          </a>
        </RowWrapper>
      </div>
    </div>
  );
};

export default React.memo(Info);
