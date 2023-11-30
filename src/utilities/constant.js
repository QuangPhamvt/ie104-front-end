export * from './acq_id'
export * from './location_city'
export const STATE = {
  IDLE: 'idle',
  HAS_VALUE: 'hasValue',
  HAS_ERROR: 'hasError',
  LOADING: 'loading',
}
export const AUTH_MODAL_STATE = {
  LOG_IN: 'logIn',
  SIGN_UP: 'signUp',
}
export const AUTH_SIGN_UP_MODAL_STATE = {
  IDLE: 'idle',
  HAS_VALUE: 'hasValue',
  HAS_ERROR: 'hasError',
  LOADING: 'loading',
}

export const AUTH_API = {
  SIGN_IN: 'auth/sign-in',
  SIGN_UP: 'auth/sign-up',
  SIGN_UP_VERIFY: 'auth/sign-up/verify',
  REFRESH_TOKEN: 'auth/refresh_token',
  PROFILE: 'auth/profile',
  CHECK_ACCOUNT: 'auth/check-account',
}
export const PRODUCT_API = {
  POST_FIND_PRODUCT_BY_CATEGORY: 'product/search-product/categories',
  POST_SEARCH_PRODUCT_BY_ID: 'product/search-id',
  POST_SEARCH_PRODUCT: 'product/search',
  GET_CATEGORIES: 'product/categories',
  CREATE_PRODUCT: 'product/create-product',
}
export const CART_API = {
  GET_CART: 'cart',
  CREATE_CART: 'cart/create',
}
export const ORDER_API = {
  GET_ORDER_LIST: 'order',
  UPDATE_ORIGIN_ORDER: 'order/update',
  FIND_BY_CART_ID: 'order/find/cartId',
  CREATE_ORDER: 'order/create',
}
export const ROLE = {
  BUYER: 'buyer',
  SELLER: 'seller',
}
export const STATUS_API_POST = {
  IDLE: 'idle',
  LOADING: 'loading',
  HAS_VALUE: 'hasValue',
  HAS_ERROR: 'hasError',
}
export const KEY_TOKEN = {
  ACCESS_TOKEN: 'ie104_access_token',
  REFRESH_TOKEN: 'ie104_refresh_token',
}
export const KEY_PROFILE = 'Profile'
export const PUBLIC_IMAGE = {
  BRAND: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE104/frontend/brand.png',
  IMAGE_HEADER_ONE: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE104/frontend/imageHeaderOne.png',
  IMAGE_HEADER_TWO: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE104/frontend/imageHeaderTwo.png',
  IMAGE_HEADER_THREE: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE104/frontend/imageHeaderThree.png',
}
