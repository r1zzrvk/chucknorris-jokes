import { useSelector } from "react-redux";
import { Styled } from "./styled";

export const SearchInput = ({ placeholder, onChange, value }) => {
  const totalItems = useSelector(({ app }) => app.totalItems);

  return (
    <Styled.Wrapper>
      <Styled.Input
        autoFocus
        value={value}
        placeholder={placeholder}
        type="text"
        onChange={(event) => onChange(event.target.value)}
      />
      {totalItems === 0 || <Styled.Text>Found jokes: {totalItems}</Styled.Text>}
    </Styled.Wrapper>
  );
};
