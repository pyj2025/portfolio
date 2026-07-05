import React from "react";
import {
  faCertificate,
  faCalendarAlt,
  faCalendarTimes,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import info from "../../../info.json";
import { DatabrickGenAIFundamentalsIcon } from "../../../image/certifications/DatabrickGenAIFundamentals";
import { InfoRow } from "../Info";

const GenAIFundamentals: React.FC = () => {
  const certification = info.about.certifications;

  return (
    <div className="flex flex-col items-center max-w-md mx-auto px-5 py-6">
      <div className="flex items-center justify-center w-[110px] h-[110px] rounded-2xl bg-white shadow-lg overflow-hidden p-2.5">
        <DatabrickGenAIFundamentalsIcon />
      </div>

      <div className="mt-3 text-lg font-semibold">Generative AI Fundamentals</div>
      <div className="text-[13px] text-[color:var(--wc-muted)]">
        Databricks Academy Accreditation
      </div>

      <div className="w-full mt-5 rounded-xl bg-[var(--hover-overlay)]/50 divide-y divide-[color:var(--win-border)]">
        <InfoRow icon={faCertificate as IconProp} label="Certification">
          {certification.name}
        </InfoRow>
        <InfoRow icon={faCalendarAlt as IconProp} label="Issued">
          {certification.issuedDate}
        </InfoRow>
        <InfoRow icon={faCalendarTimes as IconProp} label="Expires">
          {certification.expiresDate}
        </InfoRow>
        <InfoRow icon={faExternalLinkAlt as IconProp} label="Credential">
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] no-underline"
          >
            View credential
          </a>
        </InfoRow>
      </div>
    </div>
  );
};

export default React.memo(GenAIFundamentals);
