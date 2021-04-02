import styled from "styled-components";

export const SearchBoxWrapper = styled.div`
  display: flex;
`;

export const Input = styled.input`
  border: 0;
  outline: 0;
  padding: 1rem 1.7rem;
  border-radius: 1rem 0 0 1rem;
  cursor: pointer;

  &::placeholder {
    font-size: 12.4px;
  }
`;

export const Button = styled.button`
  border: 0;
  outline: 0;
  padding: 1rem 1.5rem;
  border-radius: 0 1rem 1rem 0;
  cursor: pointer;
  background-color: ${({ theme }) => theme.veryDarkGray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.4s;

  &:hover {
    opacity: 0.9;
  }
`;
