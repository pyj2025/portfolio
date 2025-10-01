import React from "react";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import info from "../../../info.json";
import GenAIFundamentalsLogo from "../../../image/certifications/DatabrickGenAIFundamentals";

const LabelContainerStyle = "flex w-32";
const LabelTextStyle = "text-gray-500";
const ValueTextStyle = "break-words";

const GenAIFundamentals: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap justify-start min-w-80 m-2.5">
      <div className="flex justify-start items-center m-2 px-20">
        <GenAIFundamentalsLogo />
      </div>

      <div className="flex justify-start items-center m-2 px-4">
        <table className="border-spacing-1 w-full table-fixed">
          <colgroup>
            <col className="w-32" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td className={LabelContainerStyle}>
                <span className={LabelTextStyle}>Name</span>
              </td>
              <td className={ValueTextStyle}>{info.about.certifications.name}</td>
            </tr>

            <tr>
              <td className={LabelContainerStyle}>
                <span className={LabelTextStyle}>Issued On</span>
              </td>
              <td className={ValueTextStyle}>{info.about.certifications.issuedDate}</td>
            </tr>

            <tr>
              <td className={LabelContainerStyle}>
                <span className={LabelTextStyle}>Expires On</span>
              </td>
              <td className={ValueTextStyle}>{info.about.certifications.expiresDate}</td>
            </tr>

            <tr>
              <td className={LabelContainerStyle}>
                <span className={LabelTextStyle}>Link</span>
              </td>
              <td className={ValueTextStyle}>
                <a href={info.about.certifications.link} className="text-white no-underline">
                  <span>
                    Link <FontAwesomeIcon icon={faExternalLinkAlt as IconProp} />
                  </span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(GenAIFundamentals);
