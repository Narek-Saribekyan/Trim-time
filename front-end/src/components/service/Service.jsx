import React,{useEffect, useState} from 'react';
import "./service.css"
import AddButton from '../MyButton/AddButton';
import {  useDispatch } from 'react-redux';
import { addService,removeService,change, nullify } from "../../toolkitRedux/sliceToolkit";

const Service = (props) => {

    const dispatch=useDispatch()
    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
        setIsActive(false)
        dispatch(nullify())
    },[props.barber])

    const handleAddButtonClick = () => {
        setIsActive((prevIsActive) => !prevIsActive);
        const money=props.service.price;
        const time=props.service.longevity
        if(!isActive){
          dispatch(addService({money: money, time:time}))
        } else dispatch(removeService({money: money, time:time}))
        props.onAddButtonClick(props.service.price);
    };
  
    return (
        <div className='service'>
            <div className="service__name">
                <h2>{props.service.service_name}</h2>
            </div>
            <div className="service__info">
                <span>
                    <h3>{props.service.price} դր.</h3>
                    <h3>{props.service.longevity} ր.</h3>
                </span>
                <AddButton isActive={isActive} onClick={handleAddButtonClick}/>
            </div>
        </div>
    );
};
export default Service;