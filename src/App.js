import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <AlertState>
      <Router>
        <div className="App">
          <Navbar/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
        </div>
        <Footer/>
      </Router>
    </AlertState>
  );
}

export default App;
