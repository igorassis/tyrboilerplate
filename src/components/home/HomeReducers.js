import {
  LOAD_PRODUCTS
} from './HomeActions';

const initialState = {
  products: []
}

export const products = ( state = initialState.products, action) => {
  switch(action.type){
    case LOAD_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}