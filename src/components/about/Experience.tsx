import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { BoldText } from "../../GlobalStyle";
import ExperienceRow, { ExperienceType } from "./ExperienceRow";

const ExperienceObject = [
  {
    title: "Junior Frontend Developer",
    company: "Enfusion",
    location: "Chicago, IL, USA",
    date: "Jan 2020 - Present",
    dateRank: 1,
  },
  {
    title: "Undergraduate Teaching Assistant",
    company: "Purdue University",
    location: "West Lafayette, IN, USA",
    date: "Aug 2018 - Dec 2019",
    dateRank: 2,
  },
  {
    title: "Technical Consultant Intern",
    company: "Dotis",
    location: "Seoul, South Korea",
    date: "Jun 2017 - Jul 2017",
    dateRank: 3,
  },
  {
    title: "Software Engineering Intern",
    company: "Hyop Woon International Co .,Ltd",
    location: "Seoul, South Korea",
    date: "Jul 2015 - Aug 2015",
    dateRank: 4,
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DataRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding-left: 0.5rem;
`;

export const SortButton = styled.div`
  cursor: pointer;
`;

type SortType = "asc" | "dec";

const Experience: React.FC = () => {
  const [experiences, setExperiences] =
    React.useState<Array<ExperienceType>>(ExperienceObject);
  const [positionSortType, setPositionSortType] =
    React.useState<SortType | null>(null);
  const [dateSortType, setDateSortType] = React.useState<SortType | null>(null);

  const sortByPosition = React.useCallback(() => {
    if (positionSortType === "asc") {
      setPositionSortType(null);
      setDateSortType(null);

      setExperiences((prev) => {
        return [...prev.sort((a, b) => a.dateRank - b.dateRank)];
      });
    } else if (positionSortType === "dec") {
      setPositionSortType("asc");
      setDateSortType(null);

      setExperiences((prevExperiences) => {
        return [
          ...prevExperiences.sort((a, b) => (a.title > b.title ? 1 : -1)),
        ];
      });
    } else {
      setPositionSortType("dec");
      setDateSortType(null);

      setExperiences((prevExperiences) => {
        return [
          ...prevExperiences.sort((a, b) => (b.title > a.title ? 1 : -1)),
        ];
      });
    }
  }, [positionSortType]);

  const sortByDate = React.useCallback(() => {
    if (dateSortType === "asc") {
      setDateSortType(null);
      setPositionSortType(null);

      setExperiences((prev) => {
        return [...prev.sort((a, b) => a.dateRank - b.dateRank)];
      });
    } else if (dateSortType === "dec") {
      setDateSortType("asc");
      setPositionSortType(null);

      setExperiences((prev) => {
        return [...prev.sort((a, b) => b.dateRank - a.dateRank)];
      });
    } else {
      setDateSortType("dec");
      setPositionSortType(null);

      setExperiences((prev) => {
        return [...prev.sort((a, b) => a.dateRank - b.dateRank)];
      });
    }
  }, [dateSortType]);

  return (
    <Container>
      <DataRow>
        <SortButton onClick={sortByPosition}>
          <BoldText>Position</BoldText>
          {positionSortType ? (
            <FontAwesomeIcon
              icon={positionSortType === "asc" ? faChevronUp : faChevronDown}
            />
          ) : null}
        </SortButton>
        <SortButton onClick={sortByDate}>
          <BoldText>Date</BoldText>
          {dateSortType ? (
            <FontAwesomeIcon
              icon={dateSortType === "asc" ? faChevronUp : faChevronDown}
            />
          ) : null}
        </SortButton>
      </DataRow>
      {experiences.map((experience: ExperienceType, idx: number) => (
        <ExperienceRow
          key={experience.title}
          experience={experience}
          isEven={idx % 2 === 0}
        />
      ))}
    </Container>
  );
};

export default Experience;
