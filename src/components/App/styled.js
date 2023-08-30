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

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (min-width: ${breakpoints.md}px) {
    gap: 20px;
  }
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (min-width: ${breakpoints.tablet}px) {
    gap: 20px;
  }
`;

export const Styled = {
  MainWrapper,
  ListWrapper,
  ButtonsWrapper,
};
