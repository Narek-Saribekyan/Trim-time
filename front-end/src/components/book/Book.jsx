import Calendar from "react-calendar"
import { useState } from "react";
import Form from "./form/Form";
const Book = () => {
    const [value, onChange] = useState(new Date())
    console.log(value);
    return (
        <>
            {/* <Calendar
                onChange={onChange}
                value={value}
            /> */}
            <Form />
        </>
    );
};
export default Book;