const initialState = {
  user: null,
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "",
  language: "",
};

export const SET_USER = "client/SET_USER";
export const SET_ROLES = "client/SET_ROLES";
export const SET_THEME = "client/SET_THEME";
export const SET_LANGUAGE = "client/SET_LANGUAGE";

export default function clientReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_ROLES:
      return { ...state, roles: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
}
