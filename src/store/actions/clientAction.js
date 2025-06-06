// actions/client.js
import {
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
} from "../reducers/clientReducer";

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (lang) => ({ type: SET_LANGUAGE, payload: lang });
