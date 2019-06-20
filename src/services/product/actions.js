import { FETCH_PRODUCTS , ADD_QU  } from './actionTypes';
import axios from 'axios';

import { productsAPI } from '../util';

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  }
};



export const fetchProducts = (filters, sortBy, callback) => dispatch => {
  

      let { products } =  productsAPI  ;

      if (!!filters && filters.length > 0) {
        products = products.filter(p =>
          filters.find(f => p.availableSizes.find(size => size === f))
        );
      }

      if (!!sortBy) {
        products = products.sort(compare[sortBy]);
      }

      if (!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });
   
};



export const addQu = ( ) => {
  return {
      type: ADD_QU ,
      payload: {
        productId: 1 ,  // Peter's ID
        q: 3
      }
  };
};



// export function update_q(obj){
//   return function(dispatch,getState){
//          let products = getState().products ;

         

//   }
// }