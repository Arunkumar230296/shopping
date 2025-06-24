import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Badge, Menu, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { supabase } from "../supabase/client";

export default function Navbar() {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload(); // refresh to show login
  };

  return (
    <Menu
      mode="horizontal"
      theme="dark"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Menu.Item key="logo">
        <Link to="/" style={{ fontWeight: "bold", color: "white" }}>
          Arunshopping
        </Link>
      </Menu.Item>

      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        <Menu.Item key="products">
          <Link to="/products" style={{ fontWeight: "bold", color: "white" }}>
            Products
          </Link>
        </Menu.Item>

        <Menu.Item key="cart">
          <Link to="/cart">
            <Badge count={totalItems} offset={[10, 0]}>
              <ShoppingCartOutlined style={{ fontSize: "20px" }} />
            </Badge>
          </Link>
        </Menu.Item>

        <Menu.Item key="logout">
          <Button type="link" onClick={handleLogout} style={{ color: "white" }}>
            Logout
          </Button>
        </Menu.Item>
      </div>
    </Menu>
  );
}
