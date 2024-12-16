import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="home">
      <h1>Welcome to E-Shop</h1>
      <ProductList products={products} />
    </div>
  );
}

export default Home;
