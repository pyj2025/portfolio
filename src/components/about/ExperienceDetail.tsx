import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ExperienceType } from "./ExperienceRow";

type ExperienceDetailProps = {
  experience: ExperienceType;
};

const ExperienceDetail: React.FC<ExperienceDetailProps> = ({ experience }) => {
  const techs = experience.tech.split(",").map(t => t.trim()).filter(Boolean);

  return (
    <div className="flex flex-col max-w-xl mx-auto px-5 py-5 gap-3">
      <div className="text-center">
        <div className="text-lg font-semibold">{experience.title}</div>
        <div className="text-[13px] text-[color:var(--wc-muted)]">
          {experience.company}
        </div>
        <div className="flex justify-center gap-4 mt-1 text-xs text-[color:var(--wc-muted)]">
          <span>
            <FontAwesomeIcon icon={faMapMarkerAlt as IconProp} className="mr-1" />
            {experience.location}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarAlt as IconProp} className="mr-1" />
            {experience.date}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5">
        {techs.map(tech => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded-full bg-[var(--chip-bg)] text-[11px] font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="m-0 text-[13px] leading-relaxed opacity-85">
        {experience.description}
      </p>
    </div>
  );
};

export default React.memo(ExperienceDetail);
