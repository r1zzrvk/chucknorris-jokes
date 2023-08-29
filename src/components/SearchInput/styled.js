import { styled } from "styled-components";
import { breakpoints, colors } from "../../constants/theme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;

  @media (min-width: ${breakpoints.sm}px) {
    width: auto;
    padding: 0px;
    margin-bottom: 60px;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  min-height: 26px;
  background-color: ${colors.white};
  width: 100%;
  font-size: 20px;
  line-height: normal;
  font-weight: 700;
  padding: 19px 30px;
  border-radius: 0px;
  border: none;
  filter: drop-shadow(0px 7px 12px rgba(100, 100, 111, 0.2));
  color: ${colors.primary};
  font-family: "Fira Sans", sans-serif;
  outline: none;

  &::placeholder {
    color: ${colors.primary};
    font-size: 22px;
    line-height: normal;
    font-weight: 700;
    font-family: "Fira Sans", sans-serif;
    opacity: 1;
  }

  @media (min-width: ${breakpoints.sm}px) {
    width: 626px;
  }
`;

const Text = styled.p`
  align-self: flex-start;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  line-height: normal;
  font-weight: 400;
  color: ${colors.black};
  margin-left: 30px;
`;

export const Styled = {
  Input,
  Text,
  Wrapper,
};
