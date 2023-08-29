import { Styled } from "./styled"

export const SearchInput = ({ placeholder }) => {
  return (
    <Styled.Input 
    // placeholder={placeholder}
    type="text" 
    placeholder="Search jokes..." />
  )
}