import { Styled } from "./styled";

export const Card = ({isLarge}) => {
  return (
    <Styled.Wrapper isLarge={isLarge}>
      <div>
        Wilt Chamberlain claims to have slept with more than 20,000 women in his
        lifetime. Chuck Norris calls this a slow Tuesday.
      </div>
      <Styled.Footer>
      <div>hxdulftcswqglp1-qe3nfw</div>
      <div>01.05.2020</div>
      </Styled.Footer>
    </Styled.Wrapper>
  );
};
