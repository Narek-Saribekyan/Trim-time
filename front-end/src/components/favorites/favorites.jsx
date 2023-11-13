import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./favorites.css";
import logo from "./logo.jpg";

const Favorites = () => {
    const [barbershops, setBarbershops] = useState([]);

    useEffect(() => {
        // Fetch data from your Laravel API endpoint
        fetch("http://127.0.0.1:8000/barbershops")
            .then(response => response.json())
            .then(data => setBarbershops(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <section className="favs">
            <div className="container">
                <h1 className="favs__title">Favorites</h1>
                {barbershops.length > 0 ? (
                    <div className="favs__row">
                        {barbershops.map((e) => (
                            <Link to={`/${e.name}`} key={e.id}>
                                <div className="favs__card card">
                                    <div className="card__content">
                                        <h2>{e.name}</h2>
                                        <img src={e.logo} alt="" />
                                        <span>{e.from}-{e.to}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: "center", fontSize: "2.5rem" }} className="emptyFavs">
                        <h1>You haven't chosen yet</h1>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Favorites;
