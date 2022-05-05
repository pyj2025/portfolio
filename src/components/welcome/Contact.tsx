import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const TerminalRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 4px 8px;
`;

const TerminalLine = styled.div`
  margin-left: 8px;
`;

const ContentLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2px;
`;

const ContentLineArrow = styled(FontAwesomeIcon)`
  font-size: 18px;
  margin-right: 8px;
`;

const Contact: React.FC = () => {
  return (
    <TerminalRow>
      <TerminalLine>
        <ContentLine># Info</ContentLine>
        <ContentLine>## Email</ContentLine>
        <ContentLine>
          <ContentLineArrow icon={faAngleRight} />
          <div>pyj2025@gmail.com</div>
        </ContentLine>
        <ContentLine>## Phone Number</ContentLine>
        <ContentLine>
          <ContentLineArrow icon={faAngleRight} />
          <div>(+1) 312-9374435</div>
        </ContentLine>
      </TerminalLine>
    </TerminalRow>
  );
};

export default Contact;