import React from 'react';
import Search from '../countries/Search';

const Home = () => {
    return (
        <div>
            <div className="siimple-tabs">
                <div className="siimple-tabs-item">Find by name</div>
                <div className="siimple-tabs-item">Find by capital city</div>
                <div className="siimple-tabs-item">Find by calling code</div>
                <div className="siimple-tabs-item">Find by currency</div>
            </div>
            <h2 className="siimple-h2 siimple--text-center">Search for country by name</h2>
            <Search />
        </div>
    )
}

export default Home;