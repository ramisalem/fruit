
import React from 'react';
import Product from './ProductItem';


const ProductList = ({ products }) => {
  
   console.log(typeof products);
  return products.map( (p , index )  => {
    return (
        
     <Product product={p} key={index} />

  
      
    );
  });
};

export default ProductList;



