import { Link } from "react-router-dom"
import logo from "../../assets/logoImg.svg"
import "./header.css"
import { useState } from "react";
import Navbar from "../navbar/navbar";
import { barbershops } from "../../fakeBase/base";
import Search from "../search/Search";

const Header = () => {
    const [search, setSearch] = useState("")
     return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <Link className="header__logo" to={"/"}>
                        <img src={logo} alt="" />
                    </Link>
                    <Navbar />
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
                            <Link to={'/user-register'}>
                                <button>Register</button>
                            </Link>
                        </div>
                        <Search searchValue={search} setSearchValue={setSearch}/>

                    </div>

                </div>

            </div>
        </header>
    );
};

export default Header;