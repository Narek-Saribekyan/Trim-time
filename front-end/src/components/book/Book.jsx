import Calendar from "react-calendar"
import { useState } from "react";
import Form from "./form/Form";
import Example from "./Calendar/BookCalendar";
// import Example from "./Calendar/BookCalendar";
const Book = (props) => {
    const [value, onChange] = useState(new Date())
    // console.log(props.workingTimes);
    const workingTimes=props.workingTimes
    const  barber=props.barber
    return (
        <div className="container flex flex-wrap gap-3 my-[120px]">
            {/* <Calendar
                onChange={onChange}
                value={value}
            /> */}
            <div style={{flex:"1"}}>
                <Example barber={barber} workingTimes={workingTimes}/>
            </div>
            <Form />
        </div>
    );
};
export default Book;