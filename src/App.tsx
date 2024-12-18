import {React, useState} from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Categories from './components/Categories';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Card from './components/Card';
import Products from './components/Products';
import Category from './components/category';
import Profile from './components/Profile';
import productData from './data/products.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleCheckout = () => {
    alert('Thank you for your purchase!');
    setCartItems([]); // Savatni bo‘shatish
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BrowserRouter>
        <Navbar cardCount={cartItems.length} />
        <Routes>
          <Route path="/" element={ <><Slider /><Categories /></>} />
          <Route
            path="/cart"
            element={<Card cartItems={cartItems} handleCheckout={handleCheckout} />}
          />
          <Route
            path="/products"
            element={<Products products={productData} addToCart={addToCart} />}
          />
          <Route
            path="/category/food"
            element={<Category products={productData.filter((product) => product.category === 'food')} addToCart={addToCart} />}
          />
          <Route
            path="/category/construction"
            element={<Category products={productData.filter((product) => product.category === 'construction')} addToCart={addToCart} />}
          />
          <Route
            path="/category/electronics"
            element={<Category products={productData.filter((product) => product.category === 'electronics')} addToCart={addToCart} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
