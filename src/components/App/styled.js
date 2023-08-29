import { styled } from "styled-components";
import { breakpoints } from "../../constants/theme";

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px;

  @media (min-width: ${breakpoints.sm}px) {
    padding: 128px 64px 60px 64px;
  }

  @media (min-width: ${breakpoints.xl}px) {
    padding: 128px 162px 60px 162px;
  }
`;

export const Styled = {
  MainWrapper,
};
