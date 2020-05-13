import React, { useState } from "react";
import styled, { css } from "styled-components";
const StyledButton = styled.button`
  color: blue;
  background-color: ${(props) => (props.color ? props.color : "black")};

  ${(props) =>
    props.size
      ? css`
          font-size: ${() => props.size};
        `
      : `font-size:80px`}
`;

// by using styled(styledComponent) that new variable will inherit the css properties
const ExtraStyledComponent = styled(StyledButton)``;

const Button = (props) => {
  const [buttonColor, setButton] = useState("pink");
  const changeColor = () => {
    setButton("orange");
  };
  console.log("what is the color?", props.color);
  return (
    <div>
      <StyledButton color={props.color} size={props.size}>
        {props.children}{" "}
      </StyledButton>
      <ExtraStyledComponent
        onClick={changeColor}
        color={buttonColor}
        size={props.size}
      >
        this the extra styled
      </ExtraStyledComponent>
    </div>
  );
};

export default Button;
