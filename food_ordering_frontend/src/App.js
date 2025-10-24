import React, { useState } from 'react';
import './styles/theme.css';
import './styles/app.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart';
import OrderModal from './components/OrderModal';
import { CartProvider } from './context/CartContext';

// PUBLIC_INTERFACE
function App() {
  /** Root app for Food Ordering UI with Ocean Professional theme. */
  const [isCartOpen, setCartOpen] = useState(false);
  const [isOrderOpen, setOrderOpen] = useState(false);

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);
  const openOrder = () => setOrderOpen(true);
  const closeOrder = () => setOrderOpen(false);

  return (
    <CartProvider>
      <div className="app-shell">
        <Header onCartClick={openCart} />
        <main className="container">
          <Menu onOpenCart={openCart} onOpenOrder={openOrder} />
        </main>

        <Cart isOpen={isCartOpen} onClose={closeCart} onCheckout={openOrder} />
        <OrderModal isOpen={isOrderOpen} onClose={closeOrder} />
        <footer className="footer">
          <div className="container footer-inner">
            <p>© {new Date().getFullYear()} Ocean Eats. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;
