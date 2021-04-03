import styled from "styled-components";

export const IpGeodataContainer = styled.section`
  width: 90%;
  background-color: ${({ theme }) => theme.white};
  position: absolute;
  top: 240px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0.9rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 1rem 0;
  -webkit-box-shadow: 0px 12px 22px -4px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 12px 22px -4px rgba(0, 0, 0, 0.1);
  z-index: 555;

  @media screen and (min-width: 1000px) {
    align-items: flex-start;
    flex-direction: row;
    justify-content: initial;
    text-align: left;
  }
`;

export const IpGeodataInfo = styled.div`
  padding: 1rem 0;
  line-height: 1.5;

  @media screen and (min-width: 1000px) {
    padding: 1rem 2rem 2rem;
    position: relative;
    flex: 1;

    &:nth-child(1)::before,
    &:nth-child(2)::before,
    &:nth-child(3)::before {
      content: "";
      position: absolute;
      height: 60%;
      width: 1px;
      background-color: ${({ theme }) => theme.darkGray};
      right: 0;
      top: 20px;
    }
  }
`;

export const IpGeodataInfoTitle = styled.h4`
  color: ${({ theme }) => theme.darkGray};
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const IpGeodataValue = styled.span`
  font-weight: 500;
  font-size: 1.5rem;
`;
