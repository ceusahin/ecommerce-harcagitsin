import {
  SET_CATEGORIES,
  SET_PRODUCTLIST,
  SET_TOTAL,
  SET_FETCHSTATE,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
} from "../reducers/productReducer";

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});
export const setProductList = (products) => ({
  type: SET_PRODUCTLIST,
  payload: products,
});
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState = (state) => ({
  type: SET_FETCHSTATE,
  payload: state,
});
export const setLimit = (limit) => ({ type: SET_LIMIT, payload: limit });
export const setOffset = (offset) => ({ type: SET_OFFSET, payload: offset });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
