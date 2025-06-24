import React from "react";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <Title level={2}>Your Cart</Title>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      ))}
      <Title level={3}>Total: ${totalPrice.toFixed(2)}</Title>
      {cartItems.length > 0 && (
        <Button type="primary" onClick={() => navigate("/checkout")}>
          Checkout
        </Button>
      )}
    </div>
  );
}
