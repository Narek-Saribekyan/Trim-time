import Calendar from "react-calendar"
import { useState } from "react";
import Form from "./form/Form";
// import Example from "./Calendar/BookCalendar";
const Book = () => {
    const [value, onChange] = useState(new Date())
    console.log(value);
    return (
        <>
            {/* <Calendar
                onChange={onChange}
                value={value}
            /> */}
            {/* <Example/> */}
            <Form />
        </>
    );
};
export default Book;