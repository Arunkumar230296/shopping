import React, { useState } from 'react';
import '../components/LoginForm.css';

export default function LoginForm({ onSubmit, onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-header">
        <span role="img" aria-label="shopping cart">🛒</span>
        Arunshopping
      </div>

      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} autoComplete="on">
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <br /><br />
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <br /><br />
          <button type="submit">Login</button>
        </form>

        <p>
          Don&apos;t have an account?{' '}
          <button type="button" onClick={onSwitch}>Sign Up</button>
        </p>
      </div>
    </div>
  );
}
