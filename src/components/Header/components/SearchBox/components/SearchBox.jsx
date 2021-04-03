import React, { useState } from "react";
import { SearchBoxWrapper, Input, Button } from "./SearchBox.styles";

const SearchBox = ({ fetchIpInfo, error }) => {
  const [input, setInput] = useState("");

  const ipv4 = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
  const ipv6 = /^([0-9a-f]){1,4}(:([0-9a-f]){1,4}){7}$/i;

  const handleValueChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    if (input === "") {
      alert("Enter an Ip address");
    } else if (ipv4.test(input)) {
      fetchIpInfo(input);
    } else if (ipv6.test(input)) {
      fetchIpInfo(input);
    } else {
      alert("Please Enter a valide ipv6 or ipv4 address");
    }
  };

  return (
    <SearchBoxWrapper>
      <Input
        onChange={handleValueChange}
        placeholder="Search for any IP address or domain"
      />
      <Button onClick={handleClick}>
        <img
          src={require("../../../../../images/icon-arrow.svg").default}
          alt="Arrow"
        />
      </Button>
    </SearchBoxWrapper>
  );
};

export default SearchBox;
