import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup(props) {
    return (
        <section className="signup-section">
            <h1>What kind of user are you?</h1>
            <div>
                {/* These are the links that will navigate the user to the forms that need to be created by the Unit 2 members */}
                {/* Since we have 2 Unit 2 members I've split the signup process into two parts so each member can participate */}
                {/* Please coordinate with one another for who is doing which form. The Instructor form just needs an additional prop */}
                <Link className="signup-select-btn" to="/signup-standard" >Standard User</Link>
                <Link className="signup-select-btn" to="/signup-instructor" >Instructor</Link>
            </div>
        </section>
    )
}