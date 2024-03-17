import Header from './components/Header/Header'
import Products from './components/Products/Products'
import { useState, useEffect } from 'react'

function App() {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(storedCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const emptyCart = () => {
    setCart([]);
  }

  return (
    <div className='container mx-auto px-4 py-4'>
      <Header cart={cart} emptyCart={emptyCart} setCart={setCart} />
      <Products cart={cart} setCart={setCart} />
    </div>
  )
}

export default App
