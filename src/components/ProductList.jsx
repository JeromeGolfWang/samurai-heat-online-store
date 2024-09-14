// src/components/ProductList.jsx
import React from 'react';
import ProductItem from './ProductItem';
import products from '../products';

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h1>Our Shirts</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;