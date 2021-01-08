import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as yup from 'yup';
import axios from 'axios';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';
import Signup from './components/Signup';
import StandardForm from './components/signup_forms/StandardForm';
import InstructorForm from './components/signup_forms/InstructorForm';
import PrivateRoute from './components/PrivateRoute';
import ClientPage from './components/ClientPage';
import InstructorPage from './components/InstructorPage';
import Classes from './components/Classes';
import Filter from './components/Filter';
import Signedin from './components/Signedin';

import schema from './validation/schema';

import { checkToken } from './actions/index';

// blank forms
const initialFormValues = {

  username: '',
  password: '',
  confirmPassword: '',
  role: '',
}
const initialFormErrors = {
  username: '',
  password: '',
  confirmPassword: '',
  role: '',
}

const initialDisabled = true


function App(props) {
  // default states
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const { push } = useHistory();
  
  const checkRole = () => {
    let role = localStorage.getItem("role");
    return role;
  }

  // posting the new user registration

  const postNewUser = newUser => {
    console.log(newUser);
    let createUser = {
      username: newUser.username,
      password: newUser.password,
      role: newUser.role
    }
    axios
      .post('https://build-wk-anywhere-fitness.herokuapp.com/api/auth/register', createUser)
      .then(res => {
        setUsers([res.data, ...users])
        setFormValues(initialFormValues)
        push(`/login`)
      })
      .catch(err => {
        console.log('error', err);
      })
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors, [name]: ""
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors, [name]: err.errors[0]
        });
      });

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  // form submissions

  const submitForm = () => {
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      role: formValues.role,
    };
    postNewUser(newUser);
  };

  // schema validation

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues])



  // Bryce TODO: setup Private Routes


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/signed-in" component={Signedin} />
        <PrivateRoute exact path="/instructor-page" component={InstructorPage} />
        <Redirect exact from="/reload" to="/" />
        <Route exact path="/">
          { (checkRole() === 'client') ? <PrivateRoute component={ClientPage} /> : (checkRole() === 'instructor') ? <PrivateRoute component={InstructorPage} /> : <Home />}
          {/* <Home /> */}
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path='/signup-standard'>
          <StandardForm
            values={formValues}
            change={inputChange}
            submit={submitForm}
            errors={formErrors}
            disabled={disabled} />
        </Route>
        <Route path='/signup-instructor'>
          <InstructorForm
            values={formValues}
            change={inputChange}
            submit={submitForm}
            errors={formErrors}
            disabled={disabled} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/classes" component={Classes} />
        <PrivateRoute path="/filter" component={Filter} />
      </Switch>
      <Footer />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    online: state.online
  }
}

export default connect(mapStateToProps, { checkToken })(App);
