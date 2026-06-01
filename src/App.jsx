import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import AdminDashboard from './pages/AdminDashboard'
import { productsData } from './assets/products'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme')
    ? localStorage.getItem('theme') : 'light')

  // Load products state from localStorage, fallback to products.js catalog
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('fuweb_products');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing saved products", e);
      }
    }
    return productsData;
  });

  // Sync products with localStorage on change
  useEffect(() => {
    localStorage.setItem('fuweb_products', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  const handleDeleteProduct = (productId) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home theme={theme} setTheme={setTheme} products={products} />} />
        <Route path='/product/:productId' element={<ProductDetails theme={theme} setTheme={setTheme} products={products} />} />
        <Route path='/admin' element={
          <AdminDashboard 
            theme={theme} 
            setTheme={setTheme} 
            products={products} 
            onAddProduct={handleAddProduct} 
            onDeleteProduct={handleDeleteProduct} 
          />
        } />
      </Routes>
    </div>
  )
}

export default App