import React from 'react';

const About = () => {
    return (
        <div className="siimple-jumbotron siimple-jumbotron--primary siimple-jumbotron--fluid" align="center">
            <div className="siimple-jumbotron-title">About this app</div>
            <div className="siimple-jumbotron-subtitle"><i className="fas fa-globe-europe"></i> check-country 1.0.0</div>
            <div className="siimple-jumbotron-detail">
                Check country is App based on <a href="https://restcountries.eu/" className="siimple--color-white">RESTCountries</a> API <br/>
                This application alowes you to search for information about all countries from around the world. <br/>
                <a href="https://github.com/Bembnias/check-country" className="siimple--color-white"><i className="fab fa-github"></i> check-country</a> on GitHub <br/>
                <i className="fas fa-envelope"></i> Contact: BieniasMt@gmail.com
            </div>
        </div>
    )
}

export default About;
