import { useParams, useNavigate } from 'react-router-dom';
import { barbershops } from '../../fakeBase/base';
import "./barbershop.css"
import Header from '../header/Header';
import Card from '../BarberCard/Card';
import { useState } from 'react';
import Services from '../Services/Services';
import { useSelector,useDispatch } from 'react-redux';
import { nullify } from '../../toolkitRedux/sliceToolkit';
const Barberhop = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [barberID, setBarberID] = useState(0)
    const dispatch=useDispatch()
    const selectedBarbershop = barbershops.find((barbershop) => barbershop.name === name);
    const [isActive, setIsActive] = useState(false);
    if (!selectedBarbershop) {
        // Redirect to the list page if the barbershop is not found
        navigate('/');
        return null;
    }


    const handleCardClick = (index) => {
        // Do something with the index or unique identifier
        if(barberID!==index){
            dispatch(nullify())
        }
        console.log(`Card clicked with index: ${index}`);
        setBarberID(index)
    };

    return (
        <>
            <Header />
            <main className='main barbershop'>
                <div className="container">
                    <h1 className='barbershop__title'>{selectedBarbershop.name}</h1>
                    <h2 className='barbershop__subtitle'>Choose a barber</h2>
                    <div className="barbershop__barbers barbers">
                        <div className="barbers__row">
                            {selectedBarbershop.barbers.map((e, idx) => (
                                <Card key={e.id} barber={e} onClick={() => handleCardClick(idx)} />
                            ))}
                        </div>
                    </div>
                    {/* Display other details about the selected barbershop */}
                    <Services  barber={selectedBarbershop.barbers[barberID]} />
                </div>
            </main>
        </>
    );
};
export default Barberhop;