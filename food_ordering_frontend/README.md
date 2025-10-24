# Ocean Eats – Food Ordering Frontend

A simple React frontend that lets users browse a menu, add items to a cart, and place an order using local state only (no backend).

## Features
- Header with branding and cart summary
- Responsive menu grid (name, description, price, image placeholder)
- Cart drawer with quantity controls, item removal, per-item totals, grand total
- Order confirmation modal that clears the cart after confirming
- Ocean Professional theme (primary #3b82f6, secondary #64748b, success #06b6d4, error #EF4444) with modern styling

## Getting Started
This app uses Create React App.

- Install dependencies:
  npm install

- Start in development (port 3000):
  npm start

Then open http://localhost:3000.

## Project Structure
- src/context/CartContext.jsx – cart state and actions (add, remove, updateQty, clear)
- src/components – Header, Menu, MenuItemCard, Cart, CartItem, OrderModal
- src/data/menuItems.js – sample menu data
- src/styles/theme.css – theme variables
- src/styles/app.css – global and component styles

## Notes
- No environment variables or backend connections are required.
- All state is stored in-memory and resets on reload.
