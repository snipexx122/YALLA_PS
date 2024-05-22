
import './style.css';

import { Outlet, Link} from "react-router-dom";


function Layout () {
    return (

        <div> 
            <nav className="navbar">
                <ul className="list">
                    <li>
                        <Link to="/" className="home">Home</Link>
                    </li>
                    <li>
                        <Link to="/registrationForm" className="home">Register</Link>
                    </li>
                    <li>
                        <Link to="/login" className="home">Login</Link>
                    </li>
                </ul>
            </nav>
  
            <Outlet />
        </div>

    );
}

export default Layout;