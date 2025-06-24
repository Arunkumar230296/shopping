import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { Row, Col } from "antd";

export default function Products() {
  const { addToCart } = useCart();

  return (
    <div style={{ padding: 20 }}>
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <ProductCard product={product} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
