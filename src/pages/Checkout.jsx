import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Form, Input, Button, Typography } from "antd";

const { Title } = Typography;

export default function Checkout() {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const onFinish = (values) => {
    clearCart();
    navigate("/order-confirmation", { state: { orderId: Date.now() } });
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <Title level={2}>Checkout</Title>
      <Form layout="vertical" onFinish={onFinish}>
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
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Place Order
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
