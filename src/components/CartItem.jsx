import React from "react";
import { Row, Col, InputNumber, Button } from "antd";

export default function CartItem({ item, updateQuantity, removeFromCart }) {
  return (
    <Row
      gutter={16}
      align="middle"
      style={{ borderBottom: "1px solid #ccc", padding: "12px 0" }}
    >
      <Col flex="auto">
        <h4>{item.name}</h4>
        <p>${item.price.toFixed(2)}</p>
      </Col>
      <Col>
        <InputNumber
          min={1}
          value={item.quantity}
          onChange={(value) => updateQuantity(item.id, value)}
        />
      </Col>
      <Col>
        <Button danger onClick={() => removeFromCart(item.id)}>
          Remove
        </Button>
      </Col>
    </Row>
  );
}
