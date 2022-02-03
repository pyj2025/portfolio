import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  height: 25px;
  width: 100%;
  font-weight: bold;
`;

const MobileTopBar: React.FC<unknown> = () => {
  return (
    <Container>
      <span>Joon Park</span>
    </Container>
  );
};

export default MobileTopBar;
