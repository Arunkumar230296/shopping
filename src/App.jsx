import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { supabase } from "./supabase/client";
import AuthPage from "./pages/AuthPage";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";

function AppContent({ session, setSession }) {
  const navigate = useNavigate();

  // Keep track of previous session state to detect login transition
  const [prevSession, setPrevSession] = useState(null);

  useEffect(() => {
    if (session && !prevSession) {
      // User just logged in, redirect to home page
      navigate("/");
    }
    setPrevSession(session);
  }, [session, prevSession, navigate]);

  if (!session) {
    return (
      <AuthPage
        onLogin={() =>
          supabase.auth.getSession().then(({ data }) => setSession(data.session))
        }
      />
    );
  }

  return (
    <>
      <Navbar session={session} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSession() {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);
    }

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <CartProvider>
      <Router>
        <AppContent session={session} setSession={setSession} />
      </Router>
    </CartProvider>
  );
}
