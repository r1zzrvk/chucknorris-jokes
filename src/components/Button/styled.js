import { styled } from "styled-components"
import { breakpoints, colors } from "../../constants/theme"

const Button = styled.button`
  border: 2px solid ${colors.primary};
  background-color: ${colors.primary};
  color: ${colors.white};
  width: 100%;
  padding: 19px 30px;
  font-size: 20px;
  line-height: normal;
  font-weight: 700;
  border-radius: 0px;
  font-family: "Fira Sans", sans-serif;
  outline: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in;
    background-color: ${colors.white};
    color: ${colors.primary};
  }

  @media (min-width: ${breakpoints.tablet}px) {
    width: auto;
    min-width: 300px;
  }
`

export const Styled = {
  Button,
}