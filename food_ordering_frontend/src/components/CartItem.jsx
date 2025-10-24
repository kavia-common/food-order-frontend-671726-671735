import React from 'react';
import { useCart } from '../context/CartContext';

// PUBLIC_INTERFACE
export default function CartItem({ item }) {
  /** A single cart line item with quantity controls and per-item total. */
  const { updateQty, removeItem } = useCart();

  const dec = () => updateQty(item.id, item.qty - 1);
  const inc = () => updateQty(item.id, item.qty + 1);

  return (
    <li className="cart-item">
      <div className="thumb">
        {item.image ? (
          <img src={item.image} alt={item.name} />
        ) : (
          <div className="thumb-ph">🍴</div>
        )}
      </div>
      <div className="details">
        <div className="top">
          <div className="name">{item.name}</div>
          <button className="icon-btn danger" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`}>🗑️</button>
        </div>
        <div className="bottom">
          <div className="qty">
            <button className="icon-btn" onClick={dec} aria-label="Decrease quantity">−</button>
            <input
              aria-label="Quantity"
              className="qty-input"
              type="number"
              min="1"
              max="99"
              value={item.qty}
              onChange={(e) => {
                const v = parseInt(e.target.value || '1', 10);
                updateQty(item.id, isNaN(v) ? 1 : v);
              }}
            />
            <button className="icon-btn" onClick={inc} aria-label="Increase quantity">+</button>
          </div>
          <div className="line-total">${(item.qty * item.price).toFixed(2)}</div>
        </div>
      </div>
    </li>
  );
}
