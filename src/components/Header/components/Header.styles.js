import styled from "styled-components";
import patternBg from "../../../images/pattern-bg.png";

//Header Container
export const HeaderContainer = styled.header`
  height: 45vh;
  width: 100%;
  background: url(${patternBg});
  display: flex;
  align-items: center;
  flex-direction: column;
`;

//Header title
export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.white};
  text-align: center;
  margin: 2rem 0;
  font-weight: 500;
`;
