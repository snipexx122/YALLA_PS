import React from 'react';
import './style.css';
import RegistrationForm from './registrationForm';
import Login from './login';
import { Outlet, Link} from "react-router-dom";

function Layout () {
    return (

        <div> 
            <nav className="navbar">
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="registrationForm">Register</Link>
                </li>
                <li>
                    <Link to="login">Login</Link>
                </li>
                </ul>
            </nav>
  
            <Outlet />
        </div>

    );
}

export default Layout;