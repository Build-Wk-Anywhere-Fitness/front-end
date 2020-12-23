import React from 'react';
import logo from '../imgs/logo.png'

export default function Header(props){
    return(
        <div className="main-header">
            <div>
                <img src={logo} alt="Anywhere Fitness" width="150" />
                <h1>ANYWHERE FITNESS</h1>
            </div>
            <nav>
                <a className="nav-btn" href="/" >Home</a>
                <a className="nav-btn" href="/" >About</a>
                <a className="nav-btn" href="/" >Classes</a>
                <a className="nav-btn" href="/" >Login</a>
            </nav>
        </div>
    )
}