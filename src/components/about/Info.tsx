import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import info from "../../info.json";
import profileImage from "../../image/Profile.png";

export const InfoRow: React.FC<{
  icon: IconProp;
  label: string;
  children: React.ReactNode;
}> = ({ icon, label, children }) => (
  <div className="flex items-center gap-3 px-3 py-2">
    <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[var(--hover-overlay)] text-[color:var(--wc-muted)] text-sm shrink-0">
      <FontAwesomeIcon icon={icon} />
    </span>
    <div className="flex flex-col min-w-0">
      <span className="text-[11px] uppercase tracking-wide text-[color:var(--wc-muted)]">
        {label}
      </span>
      <span className="text-[13px] break-words">{children}</span>
    </div>
  </div>
);

const Info: React.FC = () => {
  return (
    <div className="flex flex-col items-center max-w-md mx-auto px-5 py-6">
      <div className="w-[110px] h-[110px] overflow-hidden rounded-full shadow-lg">
        <img src={profileImage} alt="Profile" className="w-full h-auto" />
      </div>

      <div className="mt-3 text-lg font-semibold">
        {`${info.about.info.name.firstName} ${info.about.info.name.lastName}`}
      </div>
      <div className="text-[13px] text-[color:var(--wc-muted)]">
        Full Stack Software Developer
      </div>

      <div className="w-full mt-5 rounded-xl bg-[var(--hover-overlay)]/50 divide-y divide-[color:var(--win-border)]">
        <InfoRow icon={faBriefcase as IconProp} label="Role">
          Full Stack Developer @ AllTrue.ai
        </InfoRow>
        <InfoRow icon={faMapMarkerAlt as IconProp} label="Location">
          Vancouver, BC, Canada
        </InfoRow>
        <InfoRow icon={faGraduationCap as IconProp} label="Education">
          Purdue University — B.S. Computer Science
        </InfoRow>
        <InfoRow icon={faEnvelope as IconProp} label="Email">
          <a
            href={`mailto:${info.about.info.email}`}
            className="text-[var(--accent)] no-underline"
          >
            {info.about.info.email}
          </a>
        </InfoRow>
      </div>
    </div>
  );
};

export default React.memo(Info);
