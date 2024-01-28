import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';

// GraphQL mutation for logging in
const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      token
      user {
        _id
        username
      }
    }
  }
`;

const BandMemberLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      console.log('Attempting login with:', { username, password }); // Log the credentials being used
      const { data } = await login({ variables: { username, password } });
      console.log('Login response:', data); // Log the response from the server
  
      if (data.login.token) {
        console.log('Login successful!');
        navigate('/membersHome');
      }
    } catch (e) {
      console.error('Login error:', e.message); // Log any error that occurs during login
    }
  };

  return (
    <div style={{ marginTop: '8rem', marginBottom: '24rem' }}>
      <div style={{
          maxWidth: '400px',
          margin: 'auto',
          padding: '20px',
          textAlign: 'center',
      }}>
        <h2 style={{ color: '#DA1279ff', marginTop: '20px' }}>Band Member Login</h2>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}

        <div>
          <label htmlFor="username" style={{ color: '#ffffff' }}>Username:</label>
          <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              style={{ margin: '10px', padding: '5px' }}
          />
        </div>
        <div>
          <label htmlFor="password" style={{ color: '#ffffff' }}>Password:</label>
          <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              style={{ margin: '10px', padding: '5px' }}
          />
        </div>
        <div>
          <button onClick={handleLogin} style={{ margin: '10px', padding: '10px', backgroundColor: '#DA1279ff', color: '#ffffff', borderRadius: '5px' }}>Login</button>
        </div>
        <h2 style={{ color: '#DA1279ff', marginTop: '20px' }}>Sorry friends, this one's for us!</h2>
      </div>
    </div>
  );
};

export default BandMemberLogin;
