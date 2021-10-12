import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #3c3c3c;
  color: white;
`;

function HeaderBar() {
  return (
    <Container>
      <span>Joon Park</span>
    </Container>
  );
}

export default HeaderBar;
