import React, { useState, useEffect } from 'react';
import "./form.css";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        // Fetch user information when the component mounts
        fetchUserInfo();
    }, []);

    const fetchUserInfo = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/user-info', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Include your access token here
                },
            });

            if (response.ok) {
                const userInfo = await response.json();
                // Update state with user information
                setName(userInfo.name);
                setEmail(userInfo.email);
                setPhone(userInfo.contact);
            } else {
                console.error('Failed to fetch user information.');
            }
        } catch (error) {
            console.error('Error during user information fetch:', error);
        }
    };

    const handleClick = () => {
        // Handle the click event
    };

    return (
        <form className='form' onSubmit={(e) => e.preventDefault()} action="">
            <h1 className='form__title'>Fill the form</h1>
            <div className="form__fillName form__inp">
                <input className='form__inpName' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Full name' />
            </div>
            <div className="form__fillEmail form__inp">
                <input className='form__inpEmail' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' />
            </div>
            <div className="form__fillPhone form__inp">
                <input className='form__inpPhone' value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" placeholder='Phone number' />
            </div>
            <button onClick={handleClick} className='form__button'>Book</button>
        </form>
    );
};

export default Form;
