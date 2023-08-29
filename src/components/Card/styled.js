import { styled } from "styled-components";
import { breakpoints, colors } from "../../constants/theme";

const Wrapper = styled.a`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${colors.white};
  box-shadow: 0px 7px 25px 0px rgba(100, 100, 111, 0.2);
  padding: 16px 16px 12px 16px;
  font-family: "Fira Sans", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 400;
  color: ${colors.black};
  width: 100%;
  text-decoration: none;
  min-height: 150px;

  @media (min-width: ${breakpoints.sm}px) {
    font-size: 20px;
    line-height: 30px;
    padding: 40px 40px 25px 40px;
    min-height: ${({ isLarge }) => (isLarge ? "262px" : "150px")};
    max-width: ${({ isLarge }) => (isLarge ? "100%" : "calc(((100vw - 128px) / 2) - 10px)")};
  }

  @media (min-width: ${breakpoints.xl}px) {
    max-width: ${({ isLarge }) => (isLarge ? "788px" : "518px")};
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: ${colors.grey};
  margin-top: 16px;

  @media (min-width: ${breakpoints.sm}px) {
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;
  }
`;

export const Styled = {
  Wrapper,
  Footer,
};
