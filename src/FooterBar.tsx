import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #2879bd;
  color: white;
`;

function FooterBar() {
  return (
    <Container>
      <span>Footer</span>
    </Container>
  );
}

export default FooterBar;
