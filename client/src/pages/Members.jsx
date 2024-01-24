import React, { useState } from 'react';

const BandMemberLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);

        // Add your login logic here
        // For example, you might want to send the credentials to a server for authentication
    };

    return (
        <div>
            <h2>Band Member Login</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <div>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default BandMemberLogin;