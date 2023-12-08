import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState(null);

    const handleClick = (e) => {
        e.preventDefault();

        if (!name || !email || !phone) {
            setMessage("Name, email, and phone are required.");
            return;
        }

        axios.post("http://127.0.0.1:8000/api/bookers", {
            booker_name: name,
            booker_email: email,
            booker_contact: phone,
        })
            .then(response => {
                setMessage("Booker added successfully!");
                console.log("API Response:", response.data);
                // Handle the response as needed
            })
            .catch(error => {
                setMessage("Error submitting data. Please try again.");
                console.error("Error submitting data:", error);
                setName('');
                setEmail('');
                setPhone('');
            });
    };

    return (
        <div>
            <form className='form' onSubmit={handleClick} action="">
                <h1 className='form__title'>Fill the form</h1>
                {message && <p className="form__message">{message}</p>}
                <div className="form__fillName form__inp">
                    <input
                        className='form__inpName'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder='Full name'
                    />
                </div>
                <div className="form__fillEmail form__inp">
                    <input
                        className='form__inpEmail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder='Email'
                    />
                </div>
                <div className="form__fillPhone form__inp">
                    <input
                        className='form__inpPhone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="phone"
                        placeholder='Phone number'
                    />
                </div>
                <button type='submit' className='form__button'>Book</button>
            </form>
        </div>
    );
};

export default Form;
