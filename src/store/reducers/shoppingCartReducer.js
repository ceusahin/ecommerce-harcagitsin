const initialState = {
  cart: [], // [{ count: 1, product: { id: "123", ... } }, ...]
  payment: {}, // ödeme bilgileri
  address: {}, // seçilen adres
};

export const SET_CART = "shoppingCart/SET_CART";
export const SET_PAYMENT = "shoppingCart/SET_PAYMENT";
export const SET_ADDRESS = "shoppingCart/SET_ADDRESS";

export default function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return { ...state, cart: action.payload };

    case SET_PAYMENT:
      return { ...state, payment: action.payload };

    case SET_ADDRESS:
      return { ...state, address: action.payload };

    default:
      return state;
  }
}
