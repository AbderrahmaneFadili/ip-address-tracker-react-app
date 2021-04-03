import {
  FETCH_IP_INFO_BEGIN,
  FETCH_IP_INFO_SUCCESS,
  FETCH_IP_INFO_FAILURE,
} from "../types/ipInfoTypes";

const initialState = {
  loading: false,
  ipData: null,
  error: null,
};

const ipInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IP_INFO_BEGIN:
      return {
        ...state,
        loading: true,
        ipData: null,
        error: null,
      };
    case FETCH_IP_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        ipData: action.payload,
        error: null,
      };
    case FETCH_IP_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        ipData: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ipInfoReducer;
