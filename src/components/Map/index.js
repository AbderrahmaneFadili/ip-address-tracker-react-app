import React from "react";
import MapComponent from "./components/Map";
import { connect } from "react-redux";
import { fetchIpInfo } from "../../store/actions/ipInfoActions";

const Map = (props) => <MapComponent {...props} />;

const mapStateToProps = (state) => ({
  loading: state.loading,
  ipData: state.ipData,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchIpInfo: (ip) => dispatch(fetchIpInfo(ip)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
