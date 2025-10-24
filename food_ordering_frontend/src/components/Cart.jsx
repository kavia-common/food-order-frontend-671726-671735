import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

// PUBLIC_INTERFACE
export default function Cart({ isOpen, onClose, onCheckout }) {
  /** Slide-over cart drawer with quantity controls and totals. */
  const { items, total, clearCart } = useCart();

  return (
    <>
      <div className={`drawer ${isOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Cart drawer">
        <div className="drawer-header">
          <h2>Your Cart</h2>
          <button className="icon-btn" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        <div className="drawer-content">
          {items.length === 0 ? (
            <div className="empty">
              <div className="empty-emoji">🧺</div>
              <p>Your cart is empty. Add some tasty items!</p>
            </div>
          ) : (
            <ul className="cart-list">
              {items.map((i) => (
                <CartItem key={i.id} item={i} />
              ))}
            </ul>
          )}
        </div>

        <div className="drawer-footer">
          <div className="summary">
            <div className="row">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="row">
              <span>Estimated Tax</span>
              <span>${(total * 0.08).toFixed(2)}</span>
            </div>
            <div className="row total">
              <span>Total</span>
              <span>${(total * 1.08).toFixed(2)}</span>
            </div>
          </div>
          <div className="actions">
            <button className="btn outline" onClick={clearCart} disabled={items.length === 0}>Clear</button>
            <button className="btn success" onClick={onCheckout} disabled={items.length === 0}>Checkout</button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div className={`backdrop ${isOpen ? 'show' : ''}`} onClick={onClose} />
    </>
  );
}
