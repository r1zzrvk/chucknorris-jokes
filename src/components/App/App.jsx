import { styled } from "styled-components";
import { Card } from "../Card/Card";
import { SearchInput } from "../SearchInput/SearchInput";
import { Styled } from "./styled";

const ListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const App = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Styled.MainWrapper>
      <SearchInput />
      <ListWrap>
        {arr.map((item, i) => (
          <Card isLarge={i === 0 || i === 1}/>
        ))}
      </ListWrap>
    </Styled.MainWrapper>
  );
};
