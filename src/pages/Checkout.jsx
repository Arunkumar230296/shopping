import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Form, Input, Button, Typography } from "antd";

const { Title } = Typography;

export default function Checkout() {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Order placed with data:", values); // Optional: log form data
    clearCart();
    navigate("/order-confirmation", { state: { orderId: Date.now() } });
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <Title level={2}>Checkout</Title>
      <Form layout="vertical" onFinish={onFinish}>
        {/* Shipping Info */}
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input your address!" }]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>

        {/* Payment Info - Mock Fields */}
        <Title level={4}>Payment Details</Title>
        <Form.Item
          label="Cardholder Name"
          name="cardholder"
          rules={[{ required: true, message: "Please enter the cardholder name!" }]}
        >
          <Input placeholder="John Doe" />
        </Form.Item>
        <Form.Item
          label="Card Number"
          name="cardNumber"
          rules={[{ required: true, message: "Please enter the card number!" }]}
        >
          <Input placeholder="1234 5678 9012 3456" maxLength={19} />
        </Form.Item>
        <Form.Item
          label="Expiry Date"
          name="expiry"
          rules={[{ required: true, message: "Please enter the expiry date!" }]}
        >
          <Input placeholder="MM/YY" maxLength={5} />
        </Form.Item>
        <Form.Item
          label="CVV"
          name="cvv"
          rules={[{ required: true, message: "Please enter the CVV!" }]}
        >
          <Input.Password placeholder="123" maxLength={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Place Order
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
