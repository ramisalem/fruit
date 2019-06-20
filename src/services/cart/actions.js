import { LOAD_CART, ADD_PRODUCT, REMOVE_PRODUCT  , ADD_Q } from './actionTypes';

export const loadCart = products => ({
  type: LOAD_CART,
  payload: products
});

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product
}
);

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  payload: product
});



export const addQ = ( product  ) => {
  return {
      type: ADD_Q ,
      payload:  product
  };
};


