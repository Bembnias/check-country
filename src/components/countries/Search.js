import React, { useState, useContext } from 'react';
import axios from 'axios';
import Country from './Country';
import Alert from '../layout/Alert';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const alertContext = useContext(AlertContext);
    const { newAlert } = alertContext;

    const [name, setName] = useState('');
    const [country, setCountry] = useState(null);
    
    const onSubmit = (e) => {
        if (name === '') {
            newAlert('Search input can not be empty');
        } else {
            axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(res => {
                setCountry(res.data[0])
            })
            .catch(err => {
                console.log(err);
                newAlert('Oops! We can\'t find that country, try another one');
            })
        }
        e.preventDefault()
    }

    const onChange = e => setName(e.target.value);

    return (
        <div className="siimple--width-50 siimple--mx-auto">
            <form className="search-box" onSubmit={onSubmit}>
                <input type="text" value={name} className="siimple-input siimple-input--fluid siimple--py-4" placeholder="I need information about..." onChange={onChange}/>
                <input type="submit" className="siimple-btn siimple-btn--primary siimple-btn--fluid siimple--my-2" value="Submit"/>
            </form>
            <Alert />
            <span className="siimple-rule siimple--width-50 siimple--mx-auto"></span>
            <Country country={country}/>
        </div>
    )
    
}

export default Search;
