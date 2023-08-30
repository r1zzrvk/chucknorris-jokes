import { Styled } from "./styled";

export const Button = ({ onClick, type, children }) => {
  return (
    <Styled.Button onClick={onClick} type={type}>
      {children}
    </Styled.Button>
  );
};
