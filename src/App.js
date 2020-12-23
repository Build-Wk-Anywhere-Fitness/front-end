import './App.css';
import {useState} from 'react';
import {Switch, Route} from 'react-router'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
