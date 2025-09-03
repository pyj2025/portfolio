import React from "react";
import info from "../../info.json";
import profileImage from "../../image/Profile.png";

const LabelContainerStyle = "flex w-32";
const LabelTextStyle = "text-gray-500";
const ValueTextStyle = "break-words";

const Info: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap justify-start min-w-80 m-2.5">
      <div className="flex justify-start items-center m-2 px-20">
        <div className="relative w-[120px] h-[120px] overflow-hidden rounded-full">
          <img src={profileImage} alt="Profile" className="w-full h-auto" />
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
              <td
                className={ValueTextStyle}
              >{`${info.about.info.name.firstName} ${info.about.info.name.lastName}`}</td>
            </tr>

            <tr>
              <td className={LabelContainerStyle}>
                <span className={LabelTextStyle}>Date of Birth</span>
              </td>
              <td className={ValueTextStyle}>
                {`${info.about.info.dateOfBirth.month} ${info.about.info.dateOfBirth.day} ${info.about.info.dateOfBirth.year}`}
              </td>
            </tr>

            <tr>
              <td className={LabelContainerStyle}>
                <span className={LabelTextStyle}>Phone</span>
              </td>
              <td className={ValueTextStyle}>{info.about.info.phoneNumber}</td>
            </tr>

            <tr>
              <td className={LabelContainerStyle}>
                <span className={LabelTextStyle}>Address</span>
              </td>
              <td className={ValueTextStyle}>
                <div>
                  <div>{info.about.info.address.address}</div>
                  <div>{`${info.about.info.address.city}, ${info.about.info.address.state}, ${info.about.info.address.postalCode}`}</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(Info);
