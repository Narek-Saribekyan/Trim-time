import Calendar from "react-calendar"
import { useState } from "react";
import Form from "./form/Form";
import Example from "./Calendar/BookCalendar";
// import Example from "./Calendar/BookCalendar";
const Book = () => {
    const [value, onChange] = useState(new Date())
    console.log(value);
    return (
        <div className="container flex flex-wrap gap-3">
            {/* <Calendar
                onChange={onChange}
                value={value}
            /> */}
            <div style={{flex:"1"}}>
                <Example />
            </div>
            <Form />
        </div>
    );
};
export default Book;