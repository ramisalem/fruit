import { LOAD_CART, ADD_PRODUCT, REMOVE_PRODUCT ,ADD_Q  } from './actionTypes';

export const updateObject = (oldObject, updatedProperties) => {
  return {
      ...oldObject,
      ...updatedProperties
  };
};

const initialState = {
  products: [] ,
  quantity: 1 
};



export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_CART:
      return {
        ...state,
        products: action.payload
      };
    case ADD_PRODUCT:
      return {
        ...state,
        productToAdd: Object.assign({}, action.payload)
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        productToRemove: Object.assign({}, action.payload)
      };
      case ADD_Q:
        return {
          ...state , 
          qToAdd:   Object.assign({}, action.payload)
        }   
    default:
      return state;
  }
}
