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
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: ${({ isEven }) => (isEven ? "#28292a" : "transparent")};
  padding-left: 8px;
  cursor: pointer;
`;

const FileImage = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

const DateLabel = styled(MutedText)`
  justify-items: flex-end;
`;

const DataContent = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 8px;
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
      <DataRow>
        <BoldText>Sort</BoldText>
        <BoldText>Sort</BoldText>
      </DataRow>
      <DataRow onClick={toggleEnfusionOpen}>
        <FontAwesomeIcon
          icon={isEnfusionOpen ? faChevronDown : faChevronRight}
        />
        <FileImage
          src="https://img.icons8.com/color/48/000000/file.png"
          alt="file"
        />
        <BoldText>Junior Frontend Developer</BoldText>
        <DateLabel>Jan 2020 - Present</DateLabel>
      </DataRow>
      {isEnfusionOpen ? (
        <DataContent>
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
        </DataContent>
      ) : null}
      <DataRow isEven onClick={togglePurdueOpen}>
        <FontAwesomeIcon icon={isPurdueOpen ? faChevronDown : faChevronRight} />
        <FileImage
          src="https://img.icons8.com/color/48/000000/file.png"
          alt="file"
        />
        <BoldText>Undergraduate Teaching Assistant</BoldText>
        <MutedText>Aug 2018 - Dec 2019</MutedText>
      </DataRow>
      {isPurdueOpen ? (
        <DataContent>
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
        </DataContent>
      ) : null}
      <DataRow onClick={toggleDotisOpen}>
        <FontAwesomeIcon icon={isDotisOpen ? faChevronDown : faChevronRight} />
        <FileImage
          src="https://img.icons8.com/color/48/000000/file.png"
          alt="file"
        />
        <BoldText>Technical Consultant Intern</BoldText>
        <MutedText>Jun 2017 - Jul 2017</MutedText>
      </DataRow>
      {isDotisOpen ? (
        <DataContent>
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
        </DataContent>
      ) : null}
      <DataRow isEven onClick={toggleHyopWoonOpen}>
        <FontAwesomeIcon
          icon={isHyopWoonOpen ? faChevronDown : faChevronRight}
        />
        <FileImage
          src="https://img.icons8.com/color/48/000000/file.png"
          alt="file"
        />
        <BoldText>Software Engineering Intern</BoldText>
        <MutedText>Jul 2015 - Aug 2015</MutedText>
      </DataRow>
      {isHyopWoonOpen ? (
        <DataContent>
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
        </DataContent>
      ) : null}
    </Container>
  );
};

export default Experience;
