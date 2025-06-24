import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart, or increase quantity if already in cart
  function addToCart(product, quantity) {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id);
      if (existing) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...items, { ...product, quantity }];
    });
  }

  // Update quantity for a cart item
  function updateQuantity(id, quantity) {
    if (quantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  }

  // Remove item from cart
  function removeFromCart(id) {
    setCartItems((items) => items.filter((item) => item.id !== id));
  }

  // Clear entire cart (after order)
  function clearCart() {
    setCartItems([]);
  }

  // Total items count
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
