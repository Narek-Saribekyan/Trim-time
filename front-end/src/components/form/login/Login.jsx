// Login.js
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        // Add your login logic here (e.g., make API request)
        console.log('Logging in user:', username);
        console.log('Password:', password);

        // Clear input fields after login
        setUsername('');
        setPassword('');
    };

    return (
        <div style={authContainerStyle}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label style={labelStyle}>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={inputStyle} />
                </label>
                <br />
                <label style={labelStyle}>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
                </label>
                <br />
                <button type="submit" style={buttonStyle}>Login</button>
            </form>
        </div>
    );
};

const authContainerStyle = {
    width: "100vw",
    height:"100vh",
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: "100",
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
};

const labelStyle = {
    display: 'block',
    margin: '10px 0',
};

const inputStyle = {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '200px',
};

const buttonStyle = {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    background: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
};

export default Login;
