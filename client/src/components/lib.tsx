import styled from "styled-components";

type ButtonProps = {
  primary?: boolean;
  rounded?: boolean;
};

const Button = styled.button`
  background-color: ${(props: ButtonProps) =>
    props.primary ? "#BBD915" : "white"};
  color: ${(props: ButtonProps) => (props.primary ? "#FFF" : "black")};
  border-radius: ${(props: ButtonProps) => (props.rounded ? "5px" : "0")};
  font-size: 1rem;
  font-size: 1em;
  padding: 0.5rem 1.7rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
`;

const Input = styled.input`
  width: 100%;
  border: 2px soild transparent;
  border-radius: 5px;
  padding: 0.7em;
  color: #b2b7c2;
  z-index: 1000;
  background-color: #3333;
  margin: 0.5rem 0;
`;

const FlexBox = styled.div`
  display: flex;
  gap: 1rem;
`;

export { Button, FlexBox, Input };
