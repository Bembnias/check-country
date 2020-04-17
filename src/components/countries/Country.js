import React from 'react';

const Country = (props) => {
    const { country } = props;

    if (country !== null) {
        return (
            <div className="siimple--mx-auto siimple--my-3">
                <h3 className="siimple-h3 siimple--text-center"> {country.name} </h3>
                <div className="country-flag siimple--mx-auto siimple--mb-3" style={{width: '50%'}}>
                    <img src={country.flag} alt="" style={{width: '100%'}}/>
                </div>
                <div className="siimple-list">
                    <div className="siimple-list-item">Capital city: <span className="siimple--color-primary siimple--text-bold"> {country.capital} </span></div>
                    <div className="siimple-list-item">Internet domain: <span className="siimple--color-primary siimple--text-bold"> {country.topLevelDomain[0]} </span></div>
                    <div className="siimple-list-item">Region: <span className="siimple--color-primary siimple--text-bold"> {country.region} </span></div>
                    <div className="siimple-list-item">Population: <span className="siimple--color-primary siimple--text-bold"> {country.population} </span></div>
                    <div className="siimple-list-item">Area: <span className="siimple--color-primary siimple--text-bold"> {country.area} km²</span></div>
                    <div className="siimple-list-item">Currency(ies): <span className="siimple--color-primary siimple--text-bold">
                        {country.currencies[0].code} | {country.currencies[0].name} | {country.currencies[0].symbol}
                    </span></div>
                    <div className="siimple-list-item">Calling code(s): <span className="siimple--color-primary siimple--text-bold"> {country.callingCodes[0]} </span></div>
                </div>
            </div>
        )
    } else {
       return (
           <div className="siimple--text-center">
               <i className="fas fa-globe siimple--color-light siimple-h2"></i>
           </div>
       ) 
    }
}

export default Country;
