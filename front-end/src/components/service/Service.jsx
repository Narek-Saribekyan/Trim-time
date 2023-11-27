import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { addService, removeService, nullify } from '../../toolkitRedux/sliceToolkit';
import './service.css';

const Service = (props) => {
  const dispatch = useDispatch();
  const knopka = useRef();

  const handleCheckboxChange = () => {
    const money = props.service.price;
    const time = props.service.longevity;

    if (knopka.current.checked) {
      dispatch(addService({ money, time }));
    } else {
      dispatch(removeService({ money, time }));
    }
  };

  // Assuming props.barber is the value that you're using in useMemo
//   const memorizedBarber = useMemo(() => props.barber, [props.barber]);

//   useEffect(() => {
//     console.log("Effect is running. Barber:", props.barber);
//     dispatch(nullify());
//   }, []);
  

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
        <label>
          <input
            ref={knopka}
            type="checkbox"
            onChange={handleCheckboxChange}
            className='checkbox'
          />
          Remove
        </label>
      </div>
    </div>
  );
};

export default Service;
