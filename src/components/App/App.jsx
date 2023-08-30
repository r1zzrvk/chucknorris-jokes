import { Card } from "../Card/Card";
import { SearchInput } from "../SearchInput/SearchInput";
import { Styled } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchJokes, setSearchValue } from "../../reducers/app";
import { useEffect } from "react";
import { usePagination } from "../../hooks/usePagination";
import { Button } from "../Button/Button";
import { getPagesArray } from "../../utils/pages";

export const App = () => {
  const searchValue = useSelector(({ app }) => app.searchValue);
  const jokes = useSelector(({ app }) => app.jokes);
  const totalJokes = useSelector(({ app }) => app.totalItems);
  const dispatch = useDispatch();
  const {
    prevPage,
    nextPage,
    firstIndex,
    lastIndex,
    setPage,
    page,
    totalPages,
  } = usePagination({ contentPerPage: 8, itemsCount: totalJokes });
  const pages = getPagesArray(totalPages);

  const handleSearchChange = (value) => {
    dispatch(setSearchValue(value));

    if (searchValue.length > 3 && searchValue !== value) {
      setPage(1)
    }
  };

  useEffect(() => {
    if (searchValue.length > 3) {
      dispatch(fetchJokes(searchValue));
    }
  }, [dispatch, searchValue, setPage]);

  return (
    <Styled.MainWrapper>
      <SearchInput
        onChange={handleSearchChange}
        placeholder="Search jokes..."
        value={searchValue}
      />
      <Styled.ListWrapper>
        {jokes.slice(firstIndex, lastIndex).map((item, i) => (
          <Card isLarge={i === 0 || i === 1} {...item} key={item.id} />
        ))}
      </Styled.ListWrapper>
      {totalJokes <= 8 || (
        <Styled.ButtonsWrapper>
          {page === 1 || <Button onClick={prevPage}>Prev</Button>}
          {page === pages.length || <Button onClick={nextPage}>Next</Button>}
        </Styled.ButtonsWrapper>
      )}
    </Styled.MainWrapper>
  );
};
