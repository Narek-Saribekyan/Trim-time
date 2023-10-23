import { Link } from "react-router-dom"
import logo from "../../assets/logoImg.svg"
import "./header.css"
const Header = () => {
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
                            <input type="text" placeholder="Search"/>
                        </div>
                        <div className="header__button">
                            <button>Register</button>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;