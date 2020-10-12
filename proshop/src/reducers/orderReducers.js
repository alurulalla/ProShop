import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_MY__FAIL,
  ORDER_LIST_MY__REQUEST,
  ORDER_LIST_MY__RESET,
  ORDER_LIST_MY__SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_RESET,
  ORDER_PAY_SUCCESS,
} from '../constants/orderConstants';

const initialState = {
  loading: false,
  success: false,
  order: {},
  error: false,
};
export const orderCreateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ORDER_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        order: payload,
        error: false,
      };
    case ORDER_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        order: {},
        error: payload,
      };

    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { orderItems: [], shippingAddress: {}, loading: true },
  { type, payload }
) => {
  switch (type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        order: payload,
        loading: false,
      };
    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true,
      };
    case ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ORDER_PAY_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

export const orderListMyReducer = (
  state = { orders: [] },
  { type, payload }
) => {
  switch (type) {
    case ORDER_LIST_MY__REQUEST:
      return {
        loading: true,
      };
    case ORDER_LIST_MY__SUCCESS:
      return {
        loading: false,
        orders: payload,
      };
    case ORDER_LIST_MY__FAIL:
      return {
        loading: false,
        error: payload,
      };
    case ORDER_LIST_MY__RESET:
      return {
        orders: [],
      };
    default:
      return state;
  }
};
