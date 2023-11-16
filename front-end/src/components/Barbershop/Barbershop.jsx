import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Header from '../header/Header';
import Card from '../BarberCard/Card';
import Services from '../Services/Services';
import {useDispatch} from 'react-redux';
import {nullify} from '../../toolkitRedux/sliceToolkit';
import Book from '../book/Book';

const Barberhop = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [barberId, setBarberId] = useState(0);
    const dispatch = useDispatch();
    const [selectedBarbershop, setSelectedBarbershop] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = `http://127.0.0.1:8000/api/barbershops/${id}`;

        axios.get(apiUrl)
            .then(response => {
                setSelectedBarbershop(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching barbershop data:", error);
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error || !selectedBarbershop || !selectedBarbershop.barbers) {
        navigate('/');
        return <p>Error loading barbershop data.</p>;
    }

    return (
        <>
            <Header/>
            <main className='main barbershop'>
                <div className="container">
                    <h1 className='barbershop__title'>{selectedBarbershop.name}</h1>
                    <h2 className='barbershop__subtitle'>Choose a barber</h2>
                    <div className="barbershop__barbers barbers">
                        <div className="barbers__row">
                            {selectedBarbershop.barbers.length > 0 ? (
                                selectedBarbershop.barbers.map((barber) => (
                                    <Card key={barber.id} onClick={() => {
                                        setBarberId(barber)
                                        barber = (barber.id)
                                    }}/>
                                ))
                            ) : (
                                <p>No barbers available.</p>
                            )}
                        </div>
                    </div>
                    <Services barber={selectedBarbershop.barbers[barberId]}/>
                </div>
            </main>
            <section>
                <Book/>
            </section>
        </>
    );
};

export default Barberhop;