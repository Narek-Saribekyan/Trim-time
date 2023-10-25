import { Link } from "react-router-dom"
import logo from "../../assets/logoImg.svg"
import "./header.css"
import { useState } from "react";


const Header = () => {

    const [search, setSearch] = useState("")
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <Link className="header__logo" to={"/"}>
                        <img src={logo} alt="" />
                    </Link>
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li className="nav__item">
                                <Link to={"/about"}>About Us</Link>
                            </li>
                            <li className="nav__item">
                                <Link to={"/services"}>Services</Link>
                            </li>
                            <li className="nav__item">
                                <Link to={"/contact"}>Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__buttons">
                        <div className="header__search">
                            <input
                                type="text"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <div className="header__button">
                            <button>Register</button>
                        </div>
                        <div className={search.length > 0 ? "searchResult active" : "searchResult"}>
                            <ul className="searchList">
                                <Link className="searchList__link" >
                                    <li className="searchItem">
                                        <img src={logo} alt="" />
                                        <h2>Barbershop name</h2>
                                    </li>
                                </Link>
                                <Link className="searchList__link" >
                                    <li className="searchItem">
                                        <img src={logo} alt="" />
                                        <h2>Barbershop name</h2>
                                    </li>
                                </Link>
                                <Link className="searchList__link" >
                                    <li className="searchItem">
                                        <img src={logo} alt="" />
                                        <h2>Barbershop name</h2>
                                    </li>
                                </Link>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        </header>
    );
};

export default Header;