import React, { useState } from 'react';
import '../components/SignupForm.css';

export default function SignupForm({ onSubmit, onSwitch }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(email, password, username);
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} autoComplete="on">
        <input
          type="text"
          name="username"
          autoComplete="username"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        
        <input
          type="password"
          name="password"
          autoComplete="new-password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{' '}
        <button type="button" onClick={onSwitch}>Login</button>
      </p>
    </div>
  );
}
