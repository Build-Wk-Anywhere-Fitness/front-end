import React, { useState, useEffect } from "react";
import axios from "axios";
import { getLogin } from '../actions/index';
import { connect } from "react-redux";

// This component houses utilities designed for brute force testing
function AdminPanel({getLogin, test}) {
    let client = {
        username: "client",
        password: "password",
        role: "client",
    };
    let instructor = {
        username: "instructor",
        password: "password",
        role: "instructor",
    };
    const submitAccount = (e) => {
        e.preventDefault();
        axios
            .post("https://build-wk-anywhere-fitness.herokuapp.com/api/auth/register", instructor)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const testLogin = () => {
        console.log('test login called')
        getLogin(client);
    }

    return ( 
        <div>
            <button onClick = { submitAccount } > Test Signup </button>
            <button onClick={testLogin}>Test Login</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        online: state.online
    };
}

export default connect(mapStateToProps, {getLogin})(AdminPanel);