import React, { useState } from 'react';

const UserRegister = () => {
    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!name || !login || !email || !contact || !password) {
            console.error('All columns are required.');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/registerUser', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    // 'X-Requested-With': 'XMLHttpRequest', // Include this header if needed
                    // 'Authorization': 'Bearer ' + yourAccessToken, // Include authorization header if needed
                },
                body: JSON.stringify({
                    name: name,
                    login: login,
                    email: email,
                    contact: contact,
                    password: password,
                    avatar: '/defaultAvatar/defaultAvatar.png',
                }),
            });

            if (response.ok) {
                console.log('User registered successfully!');
            } else {
                console.error('Failed to register user.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }

        // Clear input fields after registration
        setName('');
        setLogin('');
        setEmail('');
        setContact('');
        setPassword('');
    };

    return (
        <div style={authContainerStyle}>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <label style={labelStyle}>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
                </label>
                <br />
                <label style={labelStyle}>
                    Login:
                    <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} style={inputStyle} />
                </label>
                <br />
                <label style={labelStyle}>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
                </label>
                <br />
                <label style={labelStyle}>
                    Contact:
                    <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} style={inputStyle} />
                </label>
                <br />
                <label style={labelStyle}>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
                </label>
                <br />
                <button type="submit" style={buttonStyle}>Register</button>
            </form>
        </div>
    );
};

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

export default UserRegister;
