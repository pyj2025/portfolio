import React from "react";
import {
  faCertificate,
  faCalendarAlt,
  faCalendarTimes,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import info from "../../../info.json";
import { DATABRICKS_GENAI_BADGE_URL } from "../../../image/certifications/DatabrickGenAIFundamentals";
import RowWrapper from "../RowWrapper";

const GenAIFundamentals: React.FC = () => {
  const certification = info.about.certifications;

  return (
    <div className="flex flex-col items-center max-w-md mx-auto px-5 py-6">
      <div className="flex items-center justify-center rounded-2xl bg-white shadow-lg px-6 py-4">
        <img
          src={DATABRICKS_GENAI_BADGE_URL}
          alt="Databricks Generative AI Fundamentals badge"
          className="h-40 w-auto"
        />
      </div>

      <div className="mt-3 text-lg font-semibold">Generative AI Fundamentals</div>
      <div className="text-[13px] text-[color:var(--wc-muted)]">
        Databricks Academy Accreditation
      </div>

      <div className="w-full mt-5 rounded-xl bg-[var(--hover-overlay)]/50 divide-y divide-[color:var(--win-border)]">
        <RowWrapper icon={faCertificate as IconProp} label="Certification">
          {certification.name}
        </RowWrapper>
        <RowWrapper icon={faCalendarAlt as IconProp} label="Issued">
          {certification.issuedDate}
        </RowWrapper>
        <RowWrapper icon={faCalendarTimes as IconProp} label="Expires">
          {certification.expiresDate}
        </RowWrapper>
        <RowWrapper icon={faExternalLinkAlt as IconProp} label="Credential">
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] no-underline"
          >
            View credential
          </a>
        </RowWrapper>
      </div>
    </div>
  );
};

export default React.memo(GenAIFundamentals);
