import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_TOP_FAIL,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_RESET,
  PRODUCT_UPDATE_SUCCESS,
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
        products: payload.products,
        pages: payload.pages,
        page: payload.page,
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

export const productDeleteReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case PRODUCT_DELETE_REQUEST:
      return {
        loading: true,
      };
    case PRODUCT_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case PRODUCT_DELETE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case PRODUCT_CREATE_REQUEST:
      return {
        loading: true,
      };
    case PRODUCT_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        product: payload,
      };
    case PRODUCT_CREATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productUpdateReducer = (
  state = { product: {} },
  { payload, type }
) => {
  switch (type) {
    case PRODUCT_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case PRODUCT_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        product: payload,
      };
    case PRODUCT_UPDATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};

export const productCreateReviewReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return {
        loading: true,
      };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const productTopRatedReducer = (
  state = { products: [] },
  { payload, type }
) => {
  switch (type) {
    case PRODUCT_TOP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_TOP_SUCCESS:
      return {
        loading: false,
        products: payload,
      };
    case PRODUCT_TOP_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
