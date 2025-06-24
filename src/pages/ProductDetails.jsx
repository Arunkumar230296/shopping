import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { Typography, InputNumber, Button, Row, Col, Image } from "antd";

const { Title, Paragraph } = Typography;

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product)
    return <Typography.Paragraph style={{ padding: 20 }}>Product not found.</Typography.Paragraph>;

  return (
    <Row justify="center" style={{ padding: 20 }}>
      <Col xs={24} md={10}>
        <Image src={product.image} alt={product.name} />
      </Col>
      <Col xs={24} md={10} style={{ paddingLeft: 20 }}>
        <Title level={2}>{product.name}</Title>
        <Paragraph>{product.description}</Paragraph>
        <Paragraph strong style={{ fontSize: 18 }}>
          Price: Rs.{product.price.toFixed(2)}
        </Paragraph>
        <InputNumber
          min={1}
          value={quantity}
          onChange={(value) => setQuantity(value)}
          style={{ marginRight: 10 }}
        />
        <Button type="primary" onClick={() => addToCart(product, quantity)}>
          Add to Cart
        </Button>
      </Col>
    </Row>
  );
}
