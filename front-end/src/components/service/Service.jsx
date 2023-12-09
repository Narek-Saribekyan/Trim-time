import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addService, removeService, nullify } from '../../toolkitRedux/sliceToolkit';
import './service.css';
import check from "../../assets/check.svg"
const Service = (props) => {
  const dispatch = useDispatch();
  const knopka = useRef();

  const handleAddButtonClick = () => {
    const money = props.service.price;
    const time = props.service.longevity;
    const serviceName = props.service.name;
    knopka.current.classList.toggle('active');
    
    if (knopka.current.classList.contains('active')) {
      dispatch(addService({ money, time,serviceName }));
    } else {
      dispatch(removeService({ money, time,serviceName }));
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
        <button ref={knopka} onClick={handleAddButtonClick} className='button flex items-center justify-center'>
          <img src={check} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Service;
