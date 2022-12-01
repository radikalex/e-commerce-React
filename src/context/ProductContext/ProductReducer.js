const products = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case "ADD_CART":
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };
    default:
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
     
  }
};
export default products;