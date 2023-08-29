import { Styled } from "./styled";

export const Card = ({ isLarge, id, value, url, updated_at }) => {
  const date = new Date(updated_at)
    .toLocaleDateString("en-GB")
    .replace(/\//gm, ".");

  return (
    <Styled.Wrapper
      isLarge={isLarge}
      href={url}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <div>{value}</div>
      <Styled.Footer>
        <div>{id}</div>
        <div>{date}</div>
      </Styled.Footer>
    </Styled.Wrapper>
  );
};
