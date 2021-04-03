import React from "react";
import SearchBoxComponent from "./components/SearchBox";
import { fetchIpInfo } from "../../../../store/actions/ipInfoActions";
import { connect } from "react-redux";

const SearchBox = (props) => <SearchBoxComponent {...props} />;

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIpInfo: (ip) => dispatch(fetchIpInfo(ip)),
  };
};
const mapStateToProps = (state) => ({
  loading: state.loading,
  ipData: state.ipData,
  error: state.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
