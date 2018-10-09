import axios from "axios";
import * as API from "../../api/connect";

//URL
const PRODUCTS = API.PRODUCTS;

//types & Dispatch
export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const loadProductsDispatch = products => {
  return { type: LOAD_PRODUCTS, products };
};

export const loadProduct = () => {
  return async dispatch => {
    try {
      const product = await axios.get(PRODUCTS);
      return dispatch(loadProductsDispatch(product));
    } catch (e) {
      throw e;
    }
  };
};
