import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../imgs/logo.png'
// import Login from './Login';
import { connect } from 'react-redux';
import { getLogout} from '../actions/index';


const Header = (props) =>{
    const { online, getLogout } = props;

    const toggleLogout = e => {
        e.preventDefault();
        getLogout();
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
                    <Link className="nav-btn" to="/classes" >Classes</Link>
                    {/* Checks global state to see if the user is online, if they are online then we display the logout button */}
                    {(online) ? <button className="nav-btn" onClick={toggleLogout} >{"Logout"}</button> : 
                    // if the user is not online, we show the login button
                    <Link className="nav-btn" to="/login">{`Login`}</Link>
                    }
                </nav>
            </div>
            {
            // <div className="login-section">
            //     {/* If we've clicked the login button, show the Login component */}
            //     {(showLogin) ? <Login /> : ""}
            // </div>
            }
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

export default connect(mapStateToProps, { getLogout })(Header);