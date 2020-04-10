import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import CountriesState from './context/RESTCountries/CountriesState';
import './App.css';

const App = () => {
  return (
    <CountriesState>
      <Router>
        <div className="App">
          <Navbar/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
            <Footer/>
        </div>
      </Router>
    </CountriesState>
  );
}

export default App;
