import { IconProp } from "@fortawesome/fontawesome-svg-core";
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

const Intro: React.FC = () => {
  return (
    <TerminalRow>
      <TerminalLine>
        <ContentLine># Hi, I'm Joon.</ContentLine>
        <ContentLine>
          <ContentLineArrow icon={faAngleRight as IconProp} />
          <div>I'm a Full Stack developer.</div>
        </ContentLine>
        <ContentLine>
          <ContentLineArrow icon={faAngleRight as IconProp} />
          <div>I am an alumnus of Purdue University with a major in Computer Science.</div>
        </ContentLine>
        <ContentLine>
          <ContentLineArrow icon={faAngleRight as IconProp} />
          <div>I am passionate about developing both web and mobile applications.</div>
        </ContentLine>
        <ContentLine>
          <ContentLineArrow icon={faAngleRight as IconProp} />
          <div>Feel free to explore, and I hope you enjoy my website.</div>
        </ContentLine>
      </TerminalLine>
    </TerminalRow>
  );
};

export default Intro;
