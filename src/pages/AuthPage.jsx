import React, { useState } from 'react';
import { supabase } from '../supabase/client';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

export default function AuthPage({ onLogin }) {
  const [page, setPage] = useState('login');

  async function handleLogin(email, password) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert('Login failed: ' + error.message);
    } else {
      onLogin();
    }
  }

  async function handleSignup(email, password, username) {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { username } }
    });
    if (error) {
      alert('Signup failed: ' + error.message);
    } else {
      alert('Signup successful! Please verify your email.');
      setPage('login');
    }
  }

  return page === 'login' ? (
    <LoginForm onSubmit={handleLogin} onSwitch={() => setPage('signup')} />
  ) : (
    <SignupForm onSubmit={handleSignup} onSwitch={() => setPage('login')} />
  );
}
