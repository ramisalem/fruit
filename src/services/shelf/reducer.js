import { FETCH_PRODUCTS  , ADD_QU } from './actionTypes';

const initialState = {
  products: []
};

const updateObject = (oldObject, updatedProperties) => {
  return {
      ...oldObject,
      ...updatedProperties
  };
};

const updatedItems = (state, action) => {
      const updatedItems = state.products.map(item => { 
            if(item.id === action.payload.productId){
              updateObject(  item , { q: action.payload.q } );  
              console.log(item);
              console.log(action.payload);
              return    item   // here item wont be updated 
               
            }
       
            
      }) ;

      return state       
};


export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
      case ADD_QU:   return updatedItems(state , action);
    default:
      return state;
  }
}
