import React, { useEffect, useState, useMemo } from 'react';
import "./service.css"
import AddButton from '../MyButton/AddButton';
import { useDispatch } from 'react-redux';
import { addService, removeService, change, nullify } from "../../toolkitRedux/sliceToolkit";

const Service = (props) => {

    const dispatch = useDispatch()
    const [isActive, setIsActive] = useState(false);
    // console.log(props.barber);

    const memorizedBarber = useMemo(() => props.barber, [props.barber]);
    useEffect(() => {
        setIsActive(false)
        console.log("barber has changed");
        dispatch(nullify())
    }, [memorizedBarber])

    const handleAddButtonClick = () => {
        console.log("Before state update:", isActive);
        setIsActive(prev=>!prev)
        console.log("After state update:", isActive);
        const money = props.service.price;
        const time = props.service.longevity;

        if (!isActive) {
            dispatch(addService({ money, time }));
        } else {
            dispatch(removeService({ money, time }));
        }
    };



    return (
        <div className='service'>
            <div className="service__name">
                <h2>{props.service.name}</h2>

            </div>
            <div className="service__info">
                <span>
                    <h3>{props.service.price} դր.</h3>
                    <h3>{props.service.longevity} ր.</h3>
                </span>
                {/* <AddButton isActive={isActive} onClick={handleAddButtonClick} /> */}
                <button onClick={handleAddButtonClick} className={isActive ? 'button active' : 'button'}>
                    {isActive ? "remove" : "add"}
                </button>
            </div>
        </div>
    );
};
export default Service;