import React from "react";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type ProjectDescriptionTableProps = {
  name: string;
  link: string;
  url?: string;
  stack: Array<string>;
  details: string;
};

const LinkButton: React.FC<{
  href: string;
  icon: IconProp;
  label: string;
}> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--hover-overlay)] hover:bg-[var(--hover-overlay-strong)] text-[color:var(--wc-text)] text-xs no-underline transition-colors"
  >
    <FontAwesomeIcon icon={icon} />
    {label}
  </a>
);

const ProjectDescriptionTable: React.FC<ProjectDescriptionTableProps> = ({
  name,
  link,
  url,
  stack,
  details,
}) => {
  return (
    <div className="flex flex-col max-w-xl mx-auto px-5 pb-5 gap-3">
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        <span className="text-lg font-semibold">{name}</span>
        <div className="flex gap-1.5">
          <LinkButton href={link} icon={faGithub as IconProp} label="GitHub" />
          {url && (
            <LinkButton
              href={url}
              icon={faExternalLinkAlt as IconProp}
              label="Live"
            />
          )}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5">
        {stack.map(tech => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded-full bg-[var(--chip-bg)] text-[11px] font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="m-0 text-[13px] leading-relaxed opacity-85">{details}</p>
    </div>
  );
};

export default React.memo(ProjectDescriptionTable);
