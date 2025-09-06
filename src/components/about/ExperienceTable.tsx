import React from "react";
import { ExperienceType } from "./ExperienceRow";

type ExperienceTableProps = {
  experience: ExperienceType;
};

const ExperienceTable: React.FC<ExperienceTableProps> = ({ experience }) => {
  return (
    <table className="border-separate border-spacing-1">
      <tbody>
        <tr>
          <td className="flex">
            <span className="opacity-50">Name</span>
          </td>
          <td>{experience.company}</td>
        </tr>
        <tr>
          <td className="flex">
            <span className="opacity-50">Location</span>
          </td>
          <td>{experience.location}</td>
        </tr>
        <tr>
          <td className="flex">
            <span className="opacity-50">Date</span>
          </td>
          <td>{experience.date}</td>
        </tr>
        <tr>
          <td className="flex">
            <span className="opacity-50">Tech</span>
          </td>
          <td>{experience.tech}</td>
        </tr>
        <tr>
          <td className="flex">
            <span className="opacity-50">Role</span>
          </td>
          <td>{experience.description}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default React.memo(ExperienceTable);
