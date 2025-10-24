import React from 'react';

// PUBLIC_INTERFACE
export default function MenuItemCard({ item, onAdd }) {
  /** Card showing image, name, description, price, and add button. */
  return (
    <article className="card item-card">
      <div className="item-media">
        {item.image ? (
          <img src={item.image} alt={item.name} />
        ) : (
          <div className="image-placeholder" aria-label="placeholder image">
            <span>🍽️</span>
          </div>
        )}
      </div>
      <div className="item-body">
        <div className="item-head">
          <h3 className="item-title">{item.name}</h3>
          <div className="item-price">${item.price.toFixed(2)}</div>
        </div>
        <p className="item-desc">{item.description}</p>
        <div className="item-actions">
          <button className="btn primary" onClick={onAdd}>Add to Cart</button>
        </div>
      </div>
    </article>
  );
}
