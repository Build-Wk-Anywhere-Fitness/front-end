import React, {useState} from 'react';
import { useHistory } from 'react-router';
import {getLogin} from '../actions/index';
import { connect } from 'react-redux';

const initialValues = {
    username: "",
    password: ""
};

const Login = (props) => {
    const [account, setAccount] = useState(initialValues);
    const { push } = useHistory();

    // A custom hook set up to be able to modify values in state in a centralized location rather than
    // creating several slices of state and their own changeHandlers. Super usefule when compiling data on forms :)
    // It sets state to its current self, but then we select the key we want to modify with e.target.name. 
    // It is super important to be consistant with naming conventions here. See initialValues key names and how
    // they are the same as the 'name=""' fields in the form. This is how the function knows which key to update in state.
    const handleChange = e => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value
        });
    };

    const invalidLogin = () => {
        alert('invalid credentials')
        setAccount(initialValues)
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        props.getLogin(account);
        setTimeout(() => {
            (localStorage.getItem('token') ? push('/signed-in') : invalidLogin())
        }, 1000);
        
    }

    return(
        <section className="login-form">
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username:</p> 
                    <input 
                    type="text"
                    name="username"
                    value={account.username}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    <p>Password:</p>
                    <input 
                    type="password"
                    name="password"
                    value={account.password}
                    onChange={handleChange}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        online: state.online
    }
}

export default connect(mapStateToProps, { getLogin })(Login);