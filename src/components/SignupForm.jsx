import React, { useState } from 'react';

export default function SignupForm({ onSubmit, onSwitch }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(email, password, username);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text" placeholder="Username" value={username}
          onChange={e => setUsername(e.target.value)} required />
        <br /><br />
        <input
          type="email" placeholder="Email" value={email}
          onChange={e => setEmail(e.target.value)} required />
        <br /><br />
        <input
          type="password" placeholder="Password" value={password}
          onChange={e => setPassword(e.target.value)} required />
        <br /><br />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{' '}
        <button onClick={onSwitch}>Login</button>
      </p>
    </div>
  );
}
