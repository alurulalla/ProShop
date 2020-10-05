import {
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';

const initialState = {
  products: [],
  loading: false,
  error: null,
  selectedProduct: {
    reviews: [],
  },
};
export const productListReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        products: payload,
        loading: false,
        error: null,
      };
    case PRODUCT_LIST_FAIL:
      return {
        ...state,
        products: [],
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const productDetailReducer = (
  state = initialState,
  { payload, type }
) => {
  switch (type) {
    case PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        selectedProduct: { ...state.selectedProduct, ...payload },
        loading: false,
        error: null,
      };
    case PRODUCT_DETAIL_FAIL:
      return {
        ...state,
        selectedProduct: null,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
