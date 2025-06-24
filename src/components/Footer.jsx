import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 50,
        padding: 20,
        textAlign: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      &copy; {new Date().getFullYear()} ArunShopping. All rights reserved.
    </footer>
  );
}
