import React from 'react';
import { barbershops } from '../../fakeBase/base';
import "./search.css"
import { Link } from 'react-router-dom';

const Search = (props) => {
    const inpClear = () => {
        props.setSearchValue("");
    }

    const filteredBarbershops = barbershops.filter(el =>
        el.name.toLowerCase().includes(props.searchValue.toLowerCase())
    );

    return (
        <div className={props.searchValue.length > 0 ? "searchResult active" : "searchResult"}>
            <ul className="searchList">
                {filteredBarbershops.map((el) => (
                    <Link onClick={inpClear} to={`/${el.name}`} key={el.id} className="searchList__link">
                        <li className="searchItem">
                            <img src={el.barbershopLogo} alt="" />
                            <h2>{el.name}</h2>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Search;

