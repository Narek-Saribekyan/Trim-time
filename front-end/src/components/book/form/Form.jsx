import React, {useState} from 'react';
import axios from 'axios';
import './form.css';

const Form = () => {
    const [selectedServices, setSelectedServices] = useState([]);
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
                const bookerId = response.data.booker.id;
                setMessage("Booker added successfully!");

                // Now, you can use the selectedServices array to create bookings
                createBookings(bookerId);
            })
            .catch(error => {
                setMessage("Error submitting data. Please try again.");
                console.error("Error submitting data:", error);
                setName('');
                setEmail('');
                setPhone('');
            });
    };

    const createBookings = (bookerId) => {
        console.log(selectedServices)
        // Make an API call for each selected service to create a booking
        selectedServices.forEach(service => {
            axios.post("http://127.0.0.1:8000/api/bookings", {
                service_id: service.id, // Assuming your service model has an 'id' property
                booker_id: bookerId,
                date: '2023-12-09 23:36:37',
                status: 1
            })
                .then(response => {
                    console.log("Booking created successfully:", response.data);
                    // Handle the response as needed
                })
                .catch(error => {
                    console.error("Error creating booking:", error);
                    // Handle error, e.g., show an error message to the user
                });
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
