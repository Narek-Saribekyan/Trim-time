import { useParams, useNavigate } from 'react-router-dom';
import { barbershops } from '../../fakeBase/base';
import "./barbershop.css"
import Header from '../header/Header';
import Card from '../BarberCard/Card';
const Barberhop = () => {
    const { name } = useParams();
    const navigate = useNavigate();

    const selectedBarbershop = barbershops.find((barbershop) => barbershop.name === name);

    if (!selectedBarbershop) {
        // Redirect to the list page if the barbershop is not found
        navigate('/');
        return null;
    }

    return (
        <>
            <Header />
            <main className='main barbershop'>
                <div className="container">
                    <h1 className='barbershop__title'>{selectedBarbershop.name}</h1>
                    <h2 className='barbershop__subtitle'>Choose a barber</h2>
                    <div className="barbershop__barbers barbers">
                        <div className="barbers__row">
                            {selectedBarbershop.barbers.map((e) => (
                                <Card barber={e}/>
                                // <div className='barbers__column' key={e.id}>
                                //     <img src={e.barberPhoto} alt="" />
                                //     <h3 className='barbers__name'>{e.name}</h3>
                                //     <div className='barbers__workingTime'>
                                //         <span>{e.from} - {e.to}</span>
                                //     </div>
                                // </div>
                            ))}
                        </div>
                    </div>
                    {/* Display other details about the selected barbershop */}
                </div>
            </main>
        </>
    );
};
export default Barberhop;