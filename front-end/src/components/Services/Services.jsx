import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "./services.css";
import Card from '../BarberCard/Card';
import Service from '../service/Service';
import { useDispatch } from 'react-redux';
import { nullify } from '../../toolkitRedux/sliceToolkit';

const Services = (props) => {

    console.log(props)
    const totalSumm = useSelector(state => state.toolkit.summ)
    const totalTime = useSelector(state => state.toolkit.time)
    const [services, setServices] = useState([{ name: "milirovanie", price: 1000, longevity: 10 }])
    const handleAddButtonClick = (price) => {
        // Do something with the price, e.g., add it to a shopping cart
        console.log(`Service added with price: ${price}`);
    };

    const dispatch = useDispatch()

    useEffect(() => {
        setServices(props.services)
        console.log(props.services);
    }, [props.services])

    return (
        <div className='barber'>
            <div className='container'>
                <div className="barber__row">
                    <div className="barber__column">
                        <Card color="dark" barber={props.barber} />
                    </div>
                    <div className="barber__column">
                        <div className='barber__menu menu'>
                            <div className="menu__content">
                                {services && services.length > 0 ? (
                                    services.map((service, index) => (
                                        <Service
                                            key={Math.random()}
                                            barber={props.barber}
                                            service={service}
                                            onAddButtonClick={handleAddButtonClick}
                                        />
                                    ))
                                ) : (
                                    <p>No services available.</p>
                                )}
                            </div>
                            <div className="menu__footer">
                                <div className="menu__row">
                                    <div className="menu__column">
                                        <div className="menu__total">
                                            <h1>Total: {totalSumm}amd {totalTime}min</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
