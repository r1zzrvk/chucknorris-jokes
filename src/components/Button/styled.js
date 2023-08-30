import { styled } from "styled-components";
import { breakpoints, colors } from "../../constants/theme";

const Button = styled.button`
  border: 2px solid ${colors.primary};
  background-color: ${({ isOutline }) => isOutline ? colors.white : colors.primary};
  color: ${({ isOutline }) => isOutline ? colors.primary : colors.white};
  width: 100%;
  padding: 17px 30px;
  font-size: 20px;
  line-height: normal;
  font-weight: 700;
  border-radius: 0px;
  font-family: "Fira Sans", sans-serif;
  outline: none;
  cursor: pointer;

  @media (min-width: ${breakpoints.tablet}px) {
    padding: 19px 30px;
    width: auto;
    min-width: 300px;
  }
`;

export const Styled = {
  Button,
};
