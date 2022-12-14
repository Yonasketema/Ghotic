import styled from "styled-components";

const Button = styled.button`
   
  background-color: ${props => props.primary ?  "#BBD915" : "white"};
  color: ${props => props.primary ? "#FFF" : "black"};
  border-radius: ${props => props.rounded ? "5px" : "0"};
  font-size:1rem;
  font-size: 1em;
  padding: .5rem 1.7rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
`;

const FlexBox = styled.div`
     display:flex;
     gap:1rem;

`

export {
	Button,
	FlexBox
 }
