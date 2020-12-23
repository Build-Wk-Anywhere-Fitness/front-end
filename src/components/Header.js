import React, {useState} from 'react';
import logo from '../imgs/logo.png'
import Login from './Login';
import { connect } from 'react-redux';

const initialValue = false;

const Header = ({online}) =>{
    const [showLogin, setShowLogin] = useState(initialValue);

    const toggleLogin = e => {
        e.preventDefault();
        setShowLogin(!showLogin);
    }

    const toggleLogout = e => {
        e.preventDefault();
        console.log("logging out")
    }

    return(
        <header>
            <div className="main-header">
                <div>
                    <img src={logo} alt="Anywhere Fitness" width="150" />
                    <h1>ANYWHERE FITNESS</h1>
                </div>
                <nav>
                    <a className="nav-btn" href="/" >Home</a>
                    <a className="nav-btn" href="/" >About</a>
                    <a className="nav-btn" href="/" >Classes</a>
                    {/* Checks global state to see if the user is online, if they are online then we display the logout button */}
                    {(online) ? <button className="nav-btn" onClick={toggleLogout} >{"Logout"}</button> : 
                    // if the user is not online, we show the login/cancel button
                    (showLogin) ? <button className="nav-btn" onClick={toggleLogin} >{"Cancel"}</button> :
                    <button className="nav-btn" onClick={toggleLogin} >{"Login"}</button> }
                </nav>
            </div>
            <div className="login-section">
                {/* If we've clicked the login button, show the Login component */}
                {(showLogin) ? <Login /> : ""}
            </div>
        </header>
    )
}

// using Redux to grab a piece of our global state and inject it into this components props rather than passing it down through App
// This is setup by creating a 'store' and wrapping the App in a <Provider> in the main index.js file
const mapStateToProps = state => {
    return {
        online: state.online
    };
}

export default connect(mapStateToProps)(Header);