import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  background-color: #3c3c3c;
  color: white;
  height: 20px;
`;

function TopBar() {
  return (
    <Container>
      <span>Joon Park</span>
    </Container>
  );
}

export default TopBar;
