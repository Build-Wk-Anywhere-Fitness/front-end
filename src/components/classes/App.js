import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import schema from '';

// Components used for the different routes
import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';
import Signup from '../Signup';
import CreateClass from './CreateClass'
import Class from './Class'

// blank forms
const initialFormValues = {
  name: '',
  specialIns: '',
  duration: '',
  intensity: '',
  boxing: false, 
  yoga: false,
  hiit: false,
  pilates: false,
  crossfit: false,
}

const initialFormErrors = {
  name: '',
  intensity: '',
  time: '',
  location: '',
  duration: '',
}

const initialDisabled = true

const App = () => {

  const [ classes, setClasses ] = useState([]);
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ formErrors, setFormErrors ] = useState(initialFormErrors);
  const [ disabled, setDisabled ] = useState(initialDisabled);

  const postNewClass = newClass => {
    axios
    .post('https://reqres.in/api/users', newClass)
    .then(res => {
      setClasses([res.data, ...classes])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      console.log('error', err)
    })
  }

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

  const submitForm = () => {
    const newClass = {
      name: formValues.name.trim(),
      location: formValues.location.trim(),
      time: formValues.time.trim(),
      specialIns: formValues.specialIns.trim(),
      duration: formValues.duration,
      intensity: formValues.intensity,
      boxing: formValues.boxing,
      yoga: formValues.yoga,
      hiit: formValues.hiit,
      pilates: formValues.pilates,
      crossfit: formValues.crossfit,

    };
      postNewClass(newClass);
  };

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues])


  return (
  <div className='App'> 
    <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path='/create-class'>
            <CreateClass 
            values={formValues} 
            change={inputChange} 
            submit={submitForm} 
            errors={formErrors}
            disabled={disabled} />
            {
            classes.map(newClass => {
                return (
                    <Class key={newClass.id} details={newClass} />
                )
            })
            }
            </Route>
            </Switch>
            <Footer />
  </div>
  );
};
export default App;
