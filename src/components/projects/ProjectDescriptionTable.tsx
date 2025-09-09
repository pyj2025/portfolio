import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type ProjectDescriptionTableProps = {
  name: string;
  link: string;
  url?: string;
  stack: Array<string>;
  details: string;
};

const ProjectDescriptionTable: React.FC<ProjectDescriptionTableProps> = ({
  name,
  link,
  url,
  stack,
  details,
}) => {
  return (
    <div className="flex justify-center items-center m-2">
      <table className="border-separate border-spacing-1">
        <tbody>
          <tr>
            <td className="flex">
              <span className="text-gray-500">Name</span>
            </td>
            <td>{name}</td>
          </tr>
          {url && (
            <tr>
              <td className="flex">
                <span className="text-gray-500">Link</span>
              </td>
              <td>
                <a href={url} className="text-white no-underline">
                  <span>
                    URL&nbsp;
                    <FontAwesomeIcon icon={faExternalLinkAlt as IconProp} />
                  </span>
                </a>
              </td>
            </tr>
          )}
          <tr>
            <td className="flex">
              <span className="text-gray-500">Github Link</span>
            </td>
            <td>
              <a href={link} className="text-white no-underline">
                <span>
                  Link <FontAwesomeIcon icon={faExternalLinkAlt as IconProp} />
                </span>
              </a>
            </td>
          </tr>
          <tr>
            <td className="flex">
              <span className="text-gray-500">Stack</span>
            </td>
            <td>{stack.map((value, idx) => (idx === stack.length - 1 ? value : value + ", "))}</td>
          </tr>
          <tr>
            <td className="flex">
              <span className="text-gray-500">Details</span>
            </td>
            <td>{details}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(ProjectDescriptionTable);
