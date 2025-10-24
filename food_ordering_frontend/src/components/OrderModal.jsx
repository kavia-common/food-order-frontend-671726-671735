import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

// PUBLIC_INTERFACE
export default function OrderModal({ isOpen, onClose }) {
  /** Simple order confirmation modal; clears cart after confirming. */
  const { items, total, clearCart } = useCart();
  const [placing, setPlacing] = useState(false);
  const tax = total * 0.08;
  const grand = total + tax;

  const confirm = async () => {
    setPlacing(true);
    // Simulate processing
    await new Promise((r) => setTimeout(r, 800));
    clearCart();
    setPlacing(false);
    onClose();
    alert('Order placed! Thank you for choosing Ocean Eats.');
  };

  return (
    <>
      <div className={`modal ${isOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Order confirmation">
        <div className="modal-header">
          <h3>Confirm Your Order</h3>
          <button className="icon-btn" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="modal-content">
          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul className="summary-list">
                {items.map((i) => (
                  <li key={i.id} className="summary-row">
                    <span>{i.name} × {i.qty}</span>
                    <span>${(i.price * i.qty).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="summary-totals">
                <div className="row"><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
                <div className="row"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
                <div className="row total"><span>Total</span><span>${grand.toFixed(2)}</span></div>
              </div>
            </>
          )}
        </div>
        <div className="modal-footer">
          <button className="btn ghost" onClick={onClose}>Cancel</button>
          <button className="btn success" onClick={confirm} disabled={placing || items.length === 0}>
            {placing ? 'Placing…' : 'Place Order'}
          </button>
        </div>
      </div>
      <div className={`backdrop ${isOpen ? 'show' : ''}`} onClick={onClose} />
    </>
  );
}
