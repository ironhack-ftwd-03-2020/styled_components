import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Button from "./components/Button";
// First we created the variables with the designated css :D
const StyledSection = styled.section`
  background-color: black;
`;
const Styledh1 = styled.h1`
  font-size: 30px;
  color: red;
`;
function App() {
  return (
    <div className="App">
      {/* Here we use the styled components as components */}
      <StyledSection>
        <Styledh1>this the h1</Styledh1>
        <Button color={"red"} size={"20px"}>
          login
        </Button>
        <Button color={"orange"} size={"20px"}>
          register{" "}
        </Button>
        <Button>This is a children</Button>
      </StyledSection>

      {/*   <NiceComponent> Hello</NiceComponent>
      <AnotherH1> The other component</AnotherH1> */}
    </div>
  );
}

export default App;
