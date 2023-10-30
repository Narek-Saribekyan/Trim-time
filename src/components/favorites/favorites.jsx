import { Link } from "react-router-dom";
import "./favorites.css"
import logo from "./logo.jpg"
import { barbershops } from "../../fakeBase/base";
const Favorites = () => {
    const favorites = [
        {
            name: "Barberhop",
            barbershop_photo: logo,
            from: 10,
            to: 10,
        },
        {
            name: "Barberhop",
            barbershop_photo: logo,
            from: 10,
            to: 10,
        },
        {
            name: "Barberhop",
            barbershop_photo: logo,
            from: 10,
            to: 10,
        },
        {
            name: "bomjanoc",
            barbershop_photo: logo,
            from: 10,
            to: 10,
        },
        {
            name: "Barberhop",
            barbershop_photo: logo,
            from: 10,
            to: 10,
        },
        {
            name: "Barberhop",
            barbershop_photo: logo,
            from: 10,
            to: 10,
        },
        {
            name: "Barberhop",
            barbershop_photo: logo,
            from: 10,
            to: 10,
        },
    ];
    return (
        <section className="favs">
            <div className="container">
                <h1 className="favs__title">Favorites</h1>
                {barbershops.length > 0 ? (
                    <div className="favs__row">
                        {barbershops.map((e) => (
                            <Link to={`/${e.name}`}>
                                <div className="favs__card card" key={e.id}>
                                    <div className="card__content">
                                        <h2>{e.name}</h2>
                                        <img src={e.barbershopLogo} alt="" />
                                        <span>{e.from}-{e.to}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: "center", fontSize: "2.5rem" }} className="emptyFavs">
                        <h1>You haven't choose yet</h1>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Favorites;