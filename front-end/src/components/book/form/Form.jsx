import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const apiUrl = `http://127.0.0.1:8000/api/bookers`;
    console.log("Submit button clicked");

    axios.post(apiUrl, {
      // Include the data you want to send in the POST request body
      booker_name: name,
      booker_email: email,
      booker_phone: phone,
    })
      .then(response => {
        console.log("API Response:", response);
        // Handle the response as needed
      })
      .catch(error => {
        console.error("Error submitting data:", error);
        // Handle the error as needed
      });
  };

  return (
    <form className='form' onSubmit={handleClick} action="">
      <h1 className='form__title'>Fill the form</h1>
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
  );
};

export default Form;
