import React, { useState } from 'react';

const UserLogin = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        // Validate inputs
        if (!login || !password) {
            console.error('Login and password are required.');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/loginUser', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    login: login,
                    password: password,
                }),
            });

            if (response.ok) {
                console.log('User logged in successfully!');
                // Perform any additional actions after successful login
                // For example, you can redirect to another page
                window.location.href = '/';
            } else {
                console.error('Failed to log in.');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }

        // Clear input fields after login
        setLogin('');
        setPassword('');
    };

    return (
        <div style={authContainerStyle}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label style={labelStyle}>
                    Login:
                    <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} style={inputStyle} />
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

// Styling styles
const authContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
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

export default UserLogin;
