import React from 'react';
import { useState, useEffect } from 'react';
import { ContextProvider } from "./components/Context/Context";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Wishlist from './components/Wishlist/Wishlist';

function App() {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(storedCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const emptyCart = () => {
    setCart([]);
  }

  const header = <Header cart={cart} emptyCart={emptyCart} setCart={setCart} />;

  return (
    <ContextProvider>
      <Router>
        <div className='container mx-auto px-4 py-4'>
          {header}
          <Routes>
            <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
            <Route path="/wishlist" element={<WishlistPage cart={cart} setCart={setCart} />} />
          </Routes>
        </div>
      </Router>
    </ContextProvider>
  )
}

const Home = ({ cart, setCart }) => {
  return (
    <Products cart={cart} setCart={setCart} />
  );
}

const WishlistPage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <div>
      <div className="text-2xl text-white mb-4">
        Wishlist
      </div>
      <Wishlist />
      <button className="bg-black hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-4" onClick={goToHomePage}>
        Back to Homepage
      </button>
    </div>
  );
}

export default App;
