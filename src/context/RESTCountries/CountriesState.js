import React, { useReducer } from 'react';
import axios from 'axios';
import CountriesContext from './countriesContext';
import CountriesReducer from './countriesReducer';
import {
    GET_ALL_COUNTRIES,
    GET_BY_NAME,
    GET_BY_CALLING_CODE,
    GET_BY_CURRENCY,
    GET_BY_REGIONAL_REGION,
    GET_BY_REGIONAL_BLOCK
} from '../types';

const CountriesState = props => {
    const initialState = {
        countries: [],
        loading: false
    }

const [state, dispatch] = useReducer(CountriesReducer, initialState);

// Get all countries
const getCountries = async () => {
    const res = await axios.get('https://restcountries.eu/rest/v2/all');
    console.log(res);
}

return <CountriesContext.Provider
    value={{
        countries: state.countires,
        getCountries
    }}
>
{props.children}
</CountriesContext.Provider>
}

export default CountriesState;