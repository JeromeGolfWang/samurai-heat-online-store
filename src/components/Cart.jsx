// src/components/Cart.jsx
import React from 'react';

const Cart = ({ cart, proceedToCheckout }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ position: 'fixed', right: '20px', top: '20px', border: '1px solid #ccc', padding: '10px', background: '#fff' }}>
      <h2>Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map(item => (
        <div key={item.id} style={{ marginBottom: '10px' }}>
          <p>{item.name}</p>
          {item.option && <p>Color: {item.option}</p>}
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${(item.price / 100).toFixed(2)}</p>
        </div>
      ))}
      {cart.length > 0 && (
        <>
          <h3>Total: ${(total / 100).toFixed(2)}</h3>
          <button onClick={proceedToCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;