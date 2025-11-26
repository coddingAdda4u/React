import React, { useState } from 'react';
import { useContext } from 'react';
import UserContext from '../Context/userContext';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <input
        type="text"
        placeholder='Username'
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder='Password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export default Login;
