import React, { useContext } from 'react';
import CountriesContext from '../../context/RESTCountries/countriesContext';

const Home = () => {
    const countriesContext = useContext(CountriesContext);
    countriesContext.getCountries();
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home;