import { styled } from "styled-components";
import { colors } from "../../constants/theme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${colors.white};
  box-shadow: 0px 7px 25px 0px rgba(100, 100, 111, 0.2);
  padding: 40px 40px 25px 40px;
  font-family: "Fira Sans", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  min-height: ${({ isLarge }) => (isLarge ? '197px' : '150px')};
  max-width: ${({ isLarge }) => (isLarge ? '708px' : '438px')};
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${colors.grey};
`;

export const Styled = {
  Wrapper,
  Footer,
};
