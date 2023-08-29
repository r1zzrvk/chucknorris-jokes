import { styled } from "styled-components"
import { colors } from "../../constants/theme"

const Input = styled.input`
  min-height: 26px;
  background-color: ${colors.white};
  width: 566px;
  font-size: 20px;
  line-height: normal;
  font-weight: 700;
  padding: 19px 30px;
  border-radius: 0px;
  border: none;
  filter: drop-shadow(0px 7px 12px rgba(100, 100, 111, 0.20));
  color: ${colors.primary};
  font-family: 'Fira Sans', sans-serif;
  outline: none;

  &::placeholder {
    color: ${colors.primary};
    font-size: 22px;
    line-height: normal;
    font-weight: 700;
    font-family: 'Fira Sans', sans-serif;
    opacity: 1;
  }
`

export const Styled = {
  Input,
}
