import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 0.8rem 1rem;
  border-radius: 20px;
  background-color: #2E4960;
  width: ${props => props.$width || '100px'};
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: .04rem;
  cursor: pointer;
  margin-top: 2rem;
  &:hover {
    background-color: #294156;
  }
`;


export const Button = ({title, width, onClick}) => {
  return (
    <StyledButton $width={width} onClick={onClick}>
      {title}
    </StyledButton>
  )
}