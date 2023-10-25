import { Link } from "react-router-dom";
const Favorites = () => {
    const favorites = [{
        name: "Barberhop",
        barbershop_photo: "",
    }];
    return (
        <section className="favs">
            <h1>Favorites</h1>
            {favorites.length > 0 ? (
                favorites.map(e => (
                    <div className="favs__card card" key={e.id}>
                        <Link>
                            <div className="card__content">
                                <h2>{e.name}</h2>
                                <img src={e.barbershop_photo} alt="" />
                            </div>
                        </Link>
                    </div>
                ))
            ) : (
                <div className="empthyFavs">
                    <h1>You haven't choose yet</h1>
                </div>
            )}
        </section>
    );
};

export default Favorites;
