const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock Data
const products = [
  { id: 1, title: 'Laptop', description: 'A powerful laptop', price: 1200, image: 'https://via.placeholder.com/150', category: 'electronics' },
  { id: 2, title: 'Headphones', description: 'Noise-cancelling headphones', price: 200, image: 'https://via.placeholder.com/150', category: 'electronics' },
  { id: 3, title: 'Coffee Maker', description: 'Brews perfect coffee', price: 100, image: 'https://via.placeholder.com/150', category: 'appliances' },
];

let cart = [];

// Routes
app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

app.get('/cart', (req, res) => {
  res.json(cart);
});

app.post('/cart', (req, res) => {
  const { id, quantity } = req.body;
  const product = products.find((p) => p.id === id);
  if (product) {
    const cartItem = { ...product, quantity };
    cart.push(cartItem);
    res.status(201).json(cartItem);
  } else {
    res.status(404).send('Product not found');
  }
});

app.delete('/cart/:id', (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter((item) => item.id !== id);
  res.status(204).send();
});const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock Data
const products = [
  { id: 1, title: 'Laptop', description: 'A powerful laptop', price: 1200, image: 'https://via.placeholder.com/150', category: 'electronics' },
  { id: 2, title: 'Headphones', description: 'Noise-cancelling headphones', price: 200, image: 'https://via.placeholder.com/150', category: 'electronics' },
  { id: 3, title: 'Coffee Maker', description: 'Brews perfect coffee', price: 100, image: 'https://via.placeholder.com/150', category: 'appliances' },
];

let cart = [];

// Routes
app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

app.get('/cart', (req, res) => {
  res.json(cart);
});

app.post('/cart', (req, res) => {
  const { id, quantity } = req.body;
  const product = products.find((p) => p.id === id);
  if (product) {
    const cartItem = { ...product, quantity };
    cart.push(cartItem);
    res.status(201).json(cartItem);
  } else {
    res.status(404).send('Product not found');
  }
});

app.delete('/cart/:id', (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter((item) => item.id !== id);
  res.status(204).send();
});
