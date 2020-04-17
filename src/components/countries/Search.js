import React, { useState } from 'react';
import axios from 'axios';
import Country from './Country';

const Search = () => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState(null);
    // const [country, setCountry] = useState(null);
    
    const onSubmit = (e) => {
        axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(res => {
                setCountry(res.data[0])
            })
            .catch(err => {
                console.log(err)
            })
        e.preventDefault()
    }

    const onChange = e => setName(e.target.value);

    return (
        <div>
            <form className="search-box siimple--width-50 siimple--mx-auto" onSubmit={onSubmit}>
                <input type="text" value={name} className="siimple-input siimple-input--fluid siimple--py-4" placeholder="I need information about..." onChange={onChange}/>
                <input type="submit" className="siimple-btn siimple-btn--primary siimple-btn--fluid" value="Submit"/>
            </form>
            <span className="siimple-rule siimple--width-25 siimple--mx-auto"></span>
            <Country country={country}/>
        </div>
    )
    
}

export default Search;
