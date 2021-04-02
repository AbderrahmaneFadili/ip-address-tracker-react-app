import React from "react";
import { SearchBoxWrapper, Input, Button } from "./SearchBox.styles";

const SearchBox = () => {
  return (
    <SearchBoxWrapper>
      <Input placeholder="Search for any IP address or domain" />
      <Button>
        <img
          src={require("../../../../../images/icon-arrow.svg").default}
          alt="Arrow"
        />
      </Button>
    </SearchBoxWrapper>
  );
};

export default SearchBox;
