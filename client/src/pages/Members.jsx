// client/src/pages/Members.jsx:
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import { AuthContext } from '../AuthContext'; // Import the AuthContext

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
  const [loginMutation, { loading, error }] = useMutation(LOGIN_MUTATION); // Renamed to loginMutation
  const { login } = useContext(AuthContext); // Destructure only login from AuthContext

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const { data } = await loginMutation({
        variables: { username, password },
      }); // Use loginMutation

      if (data.login.token) {
        login(); // Use login from AuthContext
        navigate('/membersHome');
      }
    } catch (e) {
      console.error('Login error:', e.message);
    }
  };

  return (
    <div className="mt-32 mb-96">
      <div
        className="max-w-md mx-auto px-2 py-7 text-center border-2 border-white rounded-lg"
        style={{
          boxShadow: '0px 0px 20px 10px #E53179ff',
        }}
      >
        <h2
          style={{
            color: '#DA1279ff',
            marginTop: '20px',
          }}
        >
          Band Member Login
        </h2>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}

        <div>
          <label htmlFor="username" style={{ color: '#ffffff' }}>
            Username:
          </label>
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
          <label htmlFor="password" style={{ color: '#ffffff' }}>
            Password:
          </label>
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
          <button
            onClick={handleLogin}
            style={{
              margin: '10px',
              padding: '10px',
              backgroundColor: '#DA1279ff',
              color: '#ffffff',
              borderRadius: '5px',
            }}
          >
            Login
          </button>
        </div>
        <h2 style={{ color: '#DA1279ff', marginTop: '20px' }}>
          Sorry friends, this one's for us!
        </h2>
      </div>
    </div>
  );
};

export default BandMemberLogin;
