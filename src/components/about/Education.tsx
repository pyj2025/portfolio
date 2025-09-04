import React from "react";
import PurdueLogo from "../../image/PurdueLogo.png";
import info from "../../info.json";

const LabelContainerStyle = "flex w-32";
const LabelTextStyle = "text-gray-500";
const ValueTextStyle = "break-words";

const Education: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap justify-start min-w-80 m-2.5">
      <div className="flex justify-start items-center m-2 px-20">
        <div className="relative w-[150px] h-[150px] overflow-hidden">
          <img src={PurdueLogo} alt="Purdue" className="w-full h-full object-contain" />
        </div>
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
              <td className={ValueTextStyle}>{info.about.education.university.name}</td>
            </tr>

            <tr>
              <td className={LabelContainerStyle}>
                <span className={LabelTextStyle}>Graduated</span>
              </td>
              <td className={ValueTextStyle}>
                {`${info.about.education.university.graduateYear.month} ${info.about.education.university.graduateYear.year}`}
              </td>
            </tr>

            <tr>
              <td className={LabelContainerStyle}>
                <span className={LabelTextStyle}>Degree</span>
              </td>
              <td className={ValueTextStyle}>{info.about.education.university.degree}</td>
            </tr>

            <tr>
              <td className={LabelContainerStyle}>
                <span className={LabelTextStyle}>Major</span>
              </td>
              <td className={ValueTextStyle}>{info.about.education.university.major}</td>
            </tr>

            <tr>
              <td className={LabelContainerStyle}>
                <span className={LabelTextStyle}>Concentration</span>
              </td>
              <td className={ValueTextStyle}>{info.about.education.university.concentration}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(Education);
