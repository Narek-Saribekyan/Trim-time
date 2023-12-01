import React, { useState } from 'react';
import "./form.css"
const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
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
            <button className='form__button'>Book</button>
        </form>
    );
};
export default Form;