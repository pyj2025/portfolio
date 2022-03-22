import React from "react";
import styled from "styled-components";
import { BoldText } from "../GlobalStyle";

const ContentContainer = styled.div`
  color: white;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Maintenance: React.FC = () => {
  return (
    <ContentContainer>
      <BoldText>Site is in maintenance now. Please come back later...</BoldText>
    </ContentContainer>
  );
};

export default Maintenance;
