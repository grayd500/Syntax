import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BandMemberLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
        navigate('/membersHome');
        // if (username == 'yourUsername' && password == 'yourPassword'){
        //     navigate('/membersHome');
        // }

        // Add your login logic here
        // For example, you might want to send the credentials to a server for authentication
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