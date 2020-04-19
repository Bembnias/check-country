import React, { useState, useContext } from 'react';
import axios from 'axios';
import Country from './Country';
import Alert from '../layout/Alert';
import CurrencyTip from '../layout/CurrencyTip';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const alertContext = useContext(AlertContext);
    const { newAlert } = alertContext;

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [country, setCountry] = useState(null);
    
    const onSubmit = (e) => {
        if (name === '') {
            newAlert('Search input can not be empty');
        } else {
            axios.get(`https://restcountries.eu/rest/v2/${type}/${name}`)
            .then(res => {
                setCountry(res.data[0])
            })
            .catch(err => {
                console.log(err);
                newAlert('Oops! We can\'t find that, try again');
            })
            setName('');
        }
        e.preventDefault()
    }
    
    // Set type to 'name' if it's not selected
    if (type === '') {
        setType('name');
    } 
    const onSelect = e => setType(e.target.value);

    const onChange = e => setName(e.target.value);

    return (
        <div className="siimple--width-50 siimple--mx-auto">
            <form className="search-box" onSubmit={onSubmit}>
                <div className="siimple-grid siimple--mx-auto">
                   <div className="siimple-grid-row">
                        <div className="siimple-grid-col siimple-grid-col--3 siimple-grid-col--md-12">
                            <select className="siimple-select siimple-input--fluid" defaultValue={type} onChange={onSelect}>
                                <option value="name">by name</option>
                                <option value="capital">by capital</option>
                                <option value="callingcode">by calling code</option>
                                <option value="currency">by currency</option>
                            </select>
                        </div>
                        <div className="siimple-grid-col siimple-grid-col--9 siimple-grid-col--md-12">
                            <input type="text" value={name} className="siimple-input siimple-input--fluid" placeholder="I need information about..." onChange={onChange}/>
                        </div>
                   </div>
                </div>
                <CurrencyTip type={type} />
                <input type="submit" className="siimple-btn siimple-btn--primary siimple-btn--fluid siimple--my-2" value="Submit"/>
            </form>
            <Alert />
            <span className="siimple-rule siimple--width-50 siimple--mx-auto"></span>
            <Country country={country}/>
        </div>
    )
    
}

export default Search;
