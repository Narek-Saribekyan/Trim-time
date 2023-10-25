import { Link } from "react-router-dom";
import "./favorites.css"
import logo from "./logo.jpg"
const Favorites = () => {
    const favorites = [{
        name: "Barberhop",
        barbershop_photo: logo,
        from: 10,
        to: 10
    },
    {
        name: "Barberhop",
        barbershop_photo: logo,
        from:10,
        to:10
    },
    {
        name: "Barberhop",
        barbershop_photo: logo,
        from:10,
        to:10
    },
    {
        name: "Barberhop",
        barbershop_photo: logo,
        from:10,
        to:10
    },
    {
        name: "Barberhop",
        barbershop_photo: logo,
        from:10,
        to:10
    },
    {
        name: "Barberhop",
        barbershop_photo: logo,
        from:10,
        to:10
    },
    {
        name: "Barberhop",
        barbershop_photo: logo,
        from:10,
        to:10
    },
    ];
    return (
        <section className="favs">
            <div className="container">
                <h1 className="favs__title">Favorites</h1>
                {favorites.length > 0 ? (
                    <div className="favs__row">
                        {favorites.map((e) => (
                            <div className="favs__card card" key={e.id}>
                                <Link to={`/details/${e.id}`}>
                                    <div className="card__content">
                                        <h2>{e.name}</h2>
                                        <img src={e.barbershop_photo} alt="" />
                                        <span>{e.from}-{e.to}</span>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="emptyFavs">
                        <h1>You haven't chosen yet</h1>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Favorites;