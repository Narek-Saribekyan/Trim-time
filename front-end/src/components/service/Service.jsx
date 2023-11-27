import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addService, removeService, nullify } from '../../toolkitRedux/sliceToolkit';
import './service.css';
import { Checkmark } from 'react-checkmark'
import check from "../../assets/check.svg"
const Service = (props) => {
  const dispatch = useDispatch();
  const knopka = useRef();

  const handleAddButtonClick = () => {
    const money = props.service.price;
    const time = props.service.longevity;

    knopka.current.classList.toggle('active');

    if (knopka.current.classList.contains('active')) {
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
        <button ref={knopka} onClick={handleAddButtonClick} className='button'>
            <img src={check} alt="" />
       </button>
      </div>
    </div>
  );
};

export default Service;
