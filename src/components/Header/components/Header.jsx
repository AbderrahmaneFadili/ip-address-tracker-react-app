import React from "react";
import { HeaderContainer, HeaderTitle } from "./Header.styles";
import SearchBox from "./SearchBox";
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>IP Address Tracker</HeaderTitle>
      <SearchBox />
    </HeaderContainer>
  );
};

export default Header;
