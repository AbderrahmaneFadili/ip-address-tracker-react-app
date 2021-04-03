import {
  FETCH_IP_INFO_BEGIN,
  FETCH_IP_INFO_SUCCESS,
  FETCH_IP_INFO_FAILURE,
} from "../types/ipInfoTypes";

export const fetchIpInfoBegin = () => ({
  type: FETCH_IP_INFO_BEGIN,
});

export const fetchIpInfoSuccess = (payload) => ({
  payload,
  type: FETCH_IP_INFO_SUCCESS,
});

export const fetchIpInfoFailure = (payload) => ({
  payload,
  type: FETCH_IP_INFO_FAILURE,
});

const api_key = "at_rsr8UcOSst3hwzYfFP8i8bTCt3ea6";

export const fetchIpInfo = (ip) => (dispatch) => {
  dispatch(fetchIpInfoBegin());
  fetch(`https://geo.ipify.org/api/v1?apiKey=${api_key}&ipAddress=${ip}`)
    .then((resp) => resp.json())
    .then((data) => dispatch(fetchIpInfoSuccess(data)))
    .catch((error) => dispatch(fetchIpInfoFailure(error)));
};
