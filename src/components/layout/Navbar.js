import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="siimple-navbar siimple-navbar--success siimple-navbar--fluid">
            <h1 className="siimple-navbar-title"> <i className="fas fa-globe-europe"></i> Check Country</h1> 
            <p className="siimple-navbar-subtitle siimple-grid-col--sm-hide"> | Unknow country? Check it</p>
            <ul className="siimple--float-right">
                <Link to='/' className="siimple-navbar-item">Home</Link>
                <Link to='/about' className="siimple-navbar-item">About</Link>
            </ul>
        </nav>
    )
}

export default Navbar;