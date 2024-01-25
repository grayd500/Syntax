// client/serc/pages/Members.jsx:

import React, { useState } from 'react';

const BandMemberLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Handler for username input change
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    // Handler for password input change
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // Handler for the login process
    const handleLogin = async () => {
        // GraphQL query for login
        const query = `
            mutation Login($username: String!, $password: String!) {
                login(input: {username: $username, password: $password}) {
                    token
                    user {
                        id
                        username
                        // Add any other user fields you need from the response
                    }
                }
            }
        `;

        try {
            // Send a POST request to the GraphQL endpoint
            const response = await fetch('/graphql', { // Replace with your actual GraphQL endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query,
                    variables: { username, password },
                }),
            });

            const data = await response.json();
            if (response.ok && data.data.login.token) {
                // Store the JWT token in localStorage on successful login
                localStorage.setItem('jwtToken', data.data.login.token);
                console.log('Login successful. JWT Token stored.');
                // Redirect or update UI state here
            } else {
                // Handle login failure
                console.error('Login failed:', data.errors || data.message);
                // Update UI with error message
            }
        } catch (error) {
            console.error('Login error:', error);
            // Handle network or other unexpected errors
        }
    };

    return (
        <div style={{ marginTop: '8rem', marginBottom: '25rem' }}>
            <div style={{
                maxWidth: '400px',
                margin: 'auto',
                padding: '20px',
                textAlign: 'center',
            }}>
                <h2 style={{ color: '#DA1279ff', marginTop: '20px' }}>Band Member Login</h2>
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

// Notes for Your Front-End Developers:
// The handleLogin function has been updated to perform a GraphQL mutation for logging in. It sends the username and password to your GraphQL server and expects a response containing a JWT token.
// Ensure the GraphQL endpoint (/graphql) matches your server's configuration.
// The JWT token received from the server is stored in localStorage. This token should be used for subsequent authenticated requests.
// Error handling is included to manage login failures and network issues.
// With these changes, the BandMemberLogin component is now ready to interact with your GraphQL backend for admin user authentication. Ensure to test thoroughly to confirm that the login process is working as expected, including both successful logins and handling of invalid credentials or server errors.