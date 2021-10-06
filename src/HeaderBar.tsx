import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #3C3C3C;
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
