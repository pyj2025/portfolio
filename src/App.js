import styled from "styled-components";
import React from "react";

import { isIE } from "react-device-detect";
import Maintenance from "./components/Maintenance";
import NotSupport from "./components/NotSupport";
import MainApp from "./views/MainApp";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [inMaintenance, setMaintenance] = React.useState(false);

  return (
    <Wrapper>
      {inMaintenance ? <Maintenance /> : null}
      {isIE ? <NotSupport /> : null}
      {!inMaintenance && !isIE ? <MainApp /> : null}
    </Wrapper>
  );
}

export default App;
