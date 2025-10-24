import React from 'react';
import { useCart } from '../context/CartContext';
import { menuItems } from '../data/menuItems';
import MenuItemCard from './MenuItemCard';

// PUBLIC_INTERFACE
export default function Menu({ onOpenCart, onOpenOrder }) {
  /** Displays menu items in a responsive grid. */
  const { addItem } = useCart();

  return (
    <section className="menu-section">
      <div className="menu-header">
        <div>
          <h1 className="title">Today’s Menu</h1>
          <p className="subtitle">Crafted with fresh ingredients and ocean-inspired flair.</p>
        </div>
        <div className="menu-actions">
          <button className="btn outline" onClick={onOpenCart}>View Cart</button>
          <button className="btn primary" onClick={onOpenOrder}>Place Order</button>
        </div>
      </div>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            onAdd={() => addItem(item)}
          />
        ))}
      </div>
    </section>
  );
}
