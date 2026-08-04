import React from "react";
import { faGraduationCap, faBook, faCode, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import PurdueLogo from "../../image/PurdueLogo.png";
import info from "../../info.json";
import RowWrapper from "./RowWrapper";

const Education: React.FC = () => {
  const university = info.about.education.university;

  return (
    <div className="flex flex-col items-center max-w-md mx-auto px-5 py-6">
      <div className="flex items-center justify-center w-[110px] h-[110px] rounded-2xl bg-white shadow-lg overflow-hidden p-2.5">
        <img src={PurdueLogo} alt="Purdue" className="w-full h-full object-contain" />
      </div>

      <div className="mt-3 text-lg font-semibold">{university.name}</div>
      <div className="text-[13px] text-[color:var(--wc-muted)]">
        {`${university.degree} in ${university.major}`}
      </div>

      <div className="w-full mt-5 rounded-xl bg-[var(--hover-overlay)]/50 divide-y divide-[color:var(--win-border)]">
        <RowWrapper icon={faGraduationCap as IconProp} label="Degree">
          {university.degree}
        </RowWrapper>
        <RowWrapper icon={faBook as IconProp} label="Major">
          {university.major}
        </RowWrapper>
        <RowWrapper icon={faCode as IconProp} label="Concentration">
          {university.concentration}
        </RowWrapper>
        <RowWrapper icon={faCalendarAlt as IconProp} label="Graduated">
          {`${university.graduateYear.month} ${university.graduateYear.year}`}
        </RowWrapper>
      </div>
    </div>
  );
};

export default React.memo(Education);
