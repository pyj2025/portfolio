import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { BoldText, MutedText } from "../GlobalStyle";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const DataRow = styled.div<{ isEven?: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${({ isEven }) => (isEven ? "#28292a" : "transparent")};
  padding-left: 8px;
  cursor: pointer;
`;

const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 4px;
`;

const Experience: React.FC = () => {
  const [isEnfusionOpen, setEnfusionOpen] = React.useState<boolean>(false);
  const [isPurdueOpen, setPurdueOpen] = React.useState<boolean>(false);
  const [isDotisOpen, setDotisOpen] = React.useState<boolean>(false);
  const [isHyopWoonOpen, setHyopWoonOpen] = React.useState<boolean>(false);

  const toggleEnfusionOpen = () => {
    setEnfusionOpen((state) => !state);
  };

  const togglePurdueOpen = () => {
    setPurdueOpen((state) => !state);
  };

  const toggleDotisOpen = () => {
    setDotisOpen((state) => !state);
  };

  const toggleHyopWoonOpen = () => {
    setHyopWoonOpen((state) => !state);
  };

  return (
    <Container>
      <DataRow onClick={toggleEnfusionOpen}>
        <FontAwesomeIcon
          icon={isEnfusionOpen ? faChevronDown : faChevronRight}
        />
        <img src="https://img.icons8.com/color/48/000000/file.png" alt="file" />
        <BoldText>Junior Frontend Developer</BoldText>
        <MutedText>Jan 2020 - Present</MutedText>
      </DataRow>
      {isEnfusionOpen ? (
        <DataRow>
          <BoldText>Junior Frontend Developer</BoldText>
          <RowContainer>
            <MutedText>Name</MutedText>
            <div>Enfusion</div>
          </RowContainer>
          <RowContainer>
            <MutedText>Location</MutedText>
            <div>Chicago, IL, USA</div>
          </RowContainer>
          <RowContainer>
            <MutedText>Date</MutedText>
            <div>Jan 2020 - Present</div>
          </RowContainer>
        </DataRow>
      ) : null}
      <DataRow isEven onClick={togglePurdueOpen}>
        <FontAwesomeIcon icon={isPurdueOpen ? faChevronDown : faChevronRight} />
        <img src="https://img.icons8.com/color/48/000000/file.png" alt="file" />
        <BoldText>Undergraduate Teaching Assistant</BoldText>
        <MutedText>Aug 2018 - Dec 2019</MutedText>
      </DataRow>
      {isPurdueOpen ? (
        <DataRow>
          <BoldText>Undergraduate Teaching Assistant</BoldText>
          <RowContainer>
            <MutedText>Name</MutedText>
            <div>Purdue University</div>
          </RowContainer>
          <RowContainer>
            <MutedText>Location</MutedText>
            <div>West Lafayette, IN, USA</div>
          </RowContainer>
          <RowContainer>
            <MutedText>Date</MutedText>
            <div>Aug 2018 - Dec 2019</div>
          </RowContainer>
        </DataRow>
      ) : null}
      <DataRow onClick={toggleDotisOpen}>
        <FontAwesomeIcon icon={isDotisOpen ? faChevronDown : faChevronRight} />
        <img src="https://img.icons8.com/color/48/000000/file.png" alt="file" />
        <BoldText>Technical Consultant Intern</BoldText>
        <MutedText>Jun 2017 - Jul 2017</MutedText>
      </DataRow>
      {isDotisOpen ? (
        <DataRow>
          <BoldText>Technical Consultant Intern</BoldText>
          <RowContainer>
            <MutedText>Name</MutedText>
            <div>Dotis</div>
          </RowContainer>
          <RowContainer>
            <MutedText>Location</MutedText>
            <div>Seoul, South Korea</div>
          </RowContainer>
          <RowContainer>
            <MutedText>Date</MutedText>
            <div>Jun 2017 - Jul 2017</div>
          </RowContainer>
        </DataRow>
      ) : null}
      <DataRow isEven onClick={toggleHyopWoonOpen}>
        <FontAwesomeIcon
          icon={isHyopWoonOpen ? faChevronDown : faChevronRight}
        />
        <img src="https://img.icons8.com/color/48/000000/file.png" alt="file" />
        <BoldText>Software Engineering Intern</BoldText>
        <MutedText>Jul 2015 - Aug 2015</MutedText>
      </DataRow>
      {isHyopWoonOpen ? (
        <DataRow>
          <BoldText>Software Engineering Intern</BoldText>
          <RowContainer>
            <MutedText>Name</MutedText>
            <div>Hyop Woon International Co .,Ltd</div>
          </RowContainer>
          <RowContainer>
            <MutedText>Location</MutedText>
            <div>Seoul, South Korea</div>
          </RowContainer>
          <RowContainer>
            <MutedText>Date</MutedText>
            <div>Jul 2015 - Aug 2015</div>
          </RowContainer>
        </DataRow>
      ) : null}
    </Container>
  );
};

export default Experience;
