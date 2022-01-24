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

const NotSupport: React.FC = () => {
  return (
    <ContentContainer>
      <BoldText>
        Sorry, we do not support IE. You can come via other browsers.
      </BoldText>
    </ContentContainer>
  );
};

export default NotSupport;
