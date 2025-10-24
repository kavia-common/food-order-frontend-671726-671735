import React from 'react';
import { useCart } from '../context/CartContext';

// PUBLIC_INTERFACE
export default function Header({ onCartClick }) {
  /** Header with branding, subtle gradient, and cart button. */
  const { items, total } = useCart();
  const count = items.reduce((n, i) => n + i.qty, 0);

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <div className="brand-mark">🌊</div>
          <div>
            <div className="brand-title">Ocean Eats</div>
            <div className="brand-sub">Professional Food Ordering</div>
          </div>
        </div>

        <nav className="nav">
          <button className="btn ghost">Home</button>
          <button className="btn ghost">Menu</button>
          <button className="btn ghost">About</button>
        </nav>

        <button className="btn cart-button" onClick={onCartClick} aria-label="Open cart">
          <span className="cart-icon">🛒</span>
          <span className="cart-meta">
            <strong>{count}</strong> items · ${total.toFixed(2)}
          </span>
        </button>
      </div>
    </header>
  );
}
