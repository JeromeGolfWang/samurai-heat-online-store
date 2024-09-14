// src/components/ProductItem.jsx
import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0].color : null
  );

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      option: selectedOption,
      quantity: 1,
    });
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${(product.price / 100).toFixed(2)}</p>
      {product.options && (
        <select
          value={selectedOption}
          onChange={e => setSelectedOption(e.target.value)}
        >
          {product.options.map(option => (
            <option key={option.color} value={option.color}>
              {option.color}
            </option>
          ))}
        </select>
      )}
      <button onClick={handleAddToCart} style={{ marginTop: '10px' }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;