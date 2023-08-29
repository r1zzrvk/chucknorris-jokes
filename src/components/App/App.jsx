import { Card } from "../Card/Card";
import { SearchInput } from "../SearchInput/SearchInput";
import { Styled } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchJokes, setSearchValue } from "../../reducers/app";
import { useEffect } from "react";
import { ListWrapper } from "../ListWrapper/ListWrapper";

export const App = () => {
  const searchValue = useSelector(({ app }) => app.searchValue);
  const jokes = useSelector(({ app }) => app.jokes);
  const dispatch = useDispatch();

  const handleSearchChange = (value) => {
    dispatch(setSearchValue(value));
  };

  useEffect(() => {
    if (searchValue.length > 3) {
      dispatch(fetchJokes(searchValue))
    }
  }, [dispatch, searchValue])

  return (
    <Styled.MainWrapper>
      <SearchInput
        onChange={handleSearchChange}
        placeholder="Search jokes..."
        value={searchValue}
      />
      <ListWrapper>
        {jokes.slice(0,8).map((item, i) => (
          <Card isLarge={i === 0 || i === 1} {...item} key={item.id} />
        ))}
      </ListWrapper>
    </Styled.MainWrapper>
  );
};
