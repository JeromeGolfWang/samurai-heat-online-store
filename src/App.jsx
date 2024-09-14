// src/App.jsx
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id && item.option === product.option);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id && item.option === product.option
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, product];
      }
    });
  };

  const proceedToCheckout = async () => {
    const stripe = await stripePromise;
    const response = await axios.post('/api/create-checkout-session', { cart });
    const session = response.data;

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} proceedToCheckout={proceedToCheckout} />
    </div>
  );
};

export default App;