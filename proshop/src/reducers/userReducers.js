import {
  USER_DETAIL_FAIL,
  USER_DETAIL_REQUEST,
  USER_DETAIL_RESET,
  USER_DETAIL_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
} from '../constants/userConstants';

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
};

export const userLoginReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: payload,
        error: null,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        userInfo: null,
      };
    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const userRegistereducer = (state = {}, { payload, type }) => {
  switch (type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: payload,
      };
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, { payload, type }) => {
  switch (type) {
    case USER_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_DETAIL_SUCCESS:
      return {
        loading: false,
        user: payload,
      };
    case USER_DETAIL_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case USER_DETAIL_RESET:
      return {
        user: {},
      };

    default:
      return state;
  }
};

export const userUpdateProfilesReducer = (
  state = { user: {} },
  { payload, type }
) => {
  switch (type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case USER_UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        userInfo: payload,
        success: true,
      };
    case USER_UPDATE_PROFILE_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
