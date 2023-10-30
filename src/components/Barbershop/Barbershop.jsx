import { useParams, useNavigate } from 'react-router-dom';
import { barbershops } from '../../fakeBase/base';
import Header from '../header/Header';
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
            <h1>{selectedBarbershop.name}</h1>
            {selectedBarbershop.barbers.map((e) => (
                <div key={e.id}>
                    {e.services.map((el) => (
                        <div key={el.id}>
                            {el.service_name}
                        </div>
                    ))}
                </div>
            ))}
            {/* Display other details about the selected barbershop */}
        </>
    );
};
export default Barberhop;