import React from "react";
import { connect } from "react-redux";
import IpGeoDataComponent from "./components/IpGeoData";
import { fetchIpInfo } from "../../store/actions/ipInfoActions";
const IpGeoData = (props) => <IpGeoDataComponent {...props} />;

const mapStateToProps = (state) => ({
  loading: state.loading,
  ipData: state.ipData,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchIpInfo: (ip) => dispatch(fetchIpInfo(ip)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IpGeoData);
