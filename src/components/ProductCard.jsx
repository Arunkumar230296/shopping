import React from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default function ProductCard({ product, addToCart }) {
  return (
    <Card
      hoverable
      style={{ width: 240, marginBottom: 20 }}
      cover={<img alt={product.name} src={product.image} />}
    >
      <Meta title={product.name} description={`$${product.price.toFixed(2)}`} />
      <div style={{ marginTop: 10 }}>
        <Link to={`/products/${product.id}`}>
          <Button type="link">View Details</Button>
        </Link>
        <Button
          type="primary"
          onClick={() => addToCart(product, 1)}
          style={{ float: "right" }}
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}
