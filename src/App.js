import Sidebar from "./Sidebar";
import HeaderBar from "./HeaderBar";
import FooterBar from "./FooterBar";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 3% auto 3%;
  height: 100vh;
  width: 100vw;
  background-color: black;
  text-align: center;
`;

const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  background-color: #1E1E1E;
  text-align: center;
`;

function App() {
  return (
    <Wrapper>
      <HeaderBar />
      <BodyContainer>
        <Sidebar />
        <div>Body</div>
      </BodyContainer>
      <FooterBar />
    </Wrapper>
  );
}

export default App;
