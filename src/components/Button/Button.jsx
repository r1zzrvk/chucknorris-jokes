import { Styled } from "./styled";

export const Button = ({ onClick, type, children, isOutline }) => {
  return (
    <Styled.Button onClick={onClick} type={type} isOutline={isOutline}>
      {children}
    </Styled.Button>
  );
};
