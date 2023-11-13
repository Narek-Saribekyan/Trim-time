import Calendar from "react-calendar"
import { useState } from "react";
const Book = () => {
    const [value, onChange] = useState(new Date())
    console.log(value);
    return (
        <>
            <Calendar
                onChange={onChange}
                value={value}
            />
            <h1>
                {/* {value} */}
            </h1>
        </>
    );
};
export default Book;