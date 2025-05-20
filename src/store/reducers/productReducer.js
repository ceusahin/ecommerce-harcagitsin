const initialState = {
  categories: [],
  productList: [],
  total: 0,
  limit: 25,
  offset: 0,
  filter: "",
  fetchState: "NOT_FETCHED", // "NOT_FETCHED", "FETCHING", "FETCHED", "FAILED"
};

export const SET_CATEGORIES = "product/SET_CATEGORIES";
export const SET_PRODUCTLIST = "product/SET_PRODUCTLIST";
export const SET_TOTAL = "product/SET_TOTAL";
export const SET_FETCHSTATE = "product/SET_FETCHSTATE";
export const SET_LIMIT = "product/SET_LIMIT";
export const SET_OFFSET = "product/SET_OFFSET";
export const SET_FILTER = "product/SET_FILTER";

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };

    case SET_PRODUCTLIST:
      return { ...state, productList: action.payload };

    case SET_TOTAL:
      return { ...state, total: action.payload };

    case SET_FETCHSTATE:
      return { ...state, fetchState: action.payload };

    case SET_LIMIT:
      return { ...state, limit: action.payload };

    case SET_OFFSET:
      return { ...state, offset: action.payload };

    case SET_FILTER:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
}
