import React from "react";
import { HeaderContainer, HeaderTitle, HeaderContent } from "./Header.styles";
import SearchBox from "./SearchBox";
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitle>IP Address Tracker</HeaderTitle>
        <SearchBox />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
