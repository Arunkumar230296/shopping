import React from "react";
import { Typography, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

export default function OrderConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const orderId = location.state?.orderId || "N/A";

  return (
    <div style={{ padding: 50, textAlign: "center" }}>
      <Title>Thank you for your order!</Title>
      <Paragraph>Your order ID is: <strong>{orderId}</strong></Paragraph>
      <Button type="primary" onClick={() => navigate("/products")}>
        Continue Shopping
      </Button>
    </div>
  );
}
