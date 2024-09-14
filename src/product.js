// src/products.js
const products = [
  {
    id: 'shirt1',
    name: 'Classic Tee',
    description: 'A classic t-shirt.',
    price: 2000, // in cents
    options: [
      { color: 'Red', hex: '#FF0000' },
      { color: 'Blue', hex: '#0000FF' },
    ],
    image: '/images/shirt1.png',
  },
  {
    id: 'shirt2',
    name: 'V-Neck Tee',
    description: 'A stylish v-neck t-shirt.',
    price: 2500,
    options: [
      { color: 'Green', hex: '#00FF00' },
      { color: 'Black', hex: '#000000' },
    ],
    image: '/images/shirt2.png',
  },
  // Add three more shirts without color options
  {
    id: 'shirt3',
    name: 'Polo Shirt',
    description: 'A comfortable polo shirt.',
    price: 3000,
    image: '/images/shirt3.png',
  },
  {
    id: 'shirt4',
    name: 'Long Sleeve Tee',
    description: 'A long sleeve t-shirt.',
    price: 2800,
    image: '/images/shirt4.png',
  },
  {
    id: 'shirt5',
    name: 'Tank Top',
    description: 'A cool tank top.',
    price: 2200,
    image: '/images/shirt5.png',
  },
];

export default products;