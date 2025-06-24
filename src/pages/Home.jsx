import React from "react";
import { Button, Typography, Space } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: 50,
        
        textAlign: "center",
        maxWidth: 600,
        margin: "auto",
      }}
    >
      <Title>Welcome to Arunshopping!</Title>
      <Paragraph>Find the best products for your daily needs.</Paragraph>
      <Space size="middle">
        <Button type="primary" size="large" onClick={() => navigate("/products")}>
          Shop Now
        </Button>
      </Space>
    </div>
  );
}
