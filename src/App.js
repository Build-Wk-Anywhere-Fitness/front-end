import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import * as yup from 'yup';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Signup from './components/Signup';
import CreateClass from './components/CreateClass';
import StandardForm from './components/signup_forms/StandardForm';
import InstructorForm from './components/signup_forms/InstructorForm';
import schema from './validation/schema';

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


export default function App() {
  // default states
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


  // posting the new user registration

  const postNewUser = newUser => {
    axios
      .post('https://build-wk-anywhere-fitness.herokuapp.com/api/auth/register', newUser)
      .then(res => {
        setUsers([res.data, ...users])
        setFormValues(initialFormValues)
        console.log('success, user created');
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


    return(
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
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
            <Route path='/create-class'>
                <CreateClass />
            </Route>
          </Switch>
          <Footer />
            </div>
    )
}