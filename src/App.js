import './App.css';
import {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Signup from './components/Signup';
import ClientPage from './components/ClientPage';
import PrivateRoute from './components/PrivateRoute';

import { checkToken } from './actions/index';
import AdminPanel from './components/AdminPanel';

function App({online}) {

  return (
    <div className="App">
      <Header />
      <AdminPanel />
      {`Online: ${online}`}
      <Switch>
        {(online) ? <Redirect to="/client-page" /> : "" }
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup" component={Signup} />
        <Route path="/client-page">
          <PrivateRoute component={ClientPage}/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  return{
    online: state.online
  };
}

export default connect(mapStateToProps, { checkToken })(App);
