
import React from 'react';
import Product from './ProductItem';


const ProductList = ({ products }) => {
  return products.map(p => {
    return (
        
    <Product product={p} key={p.id} />
    
    );
  });
};

export default ProductList;



