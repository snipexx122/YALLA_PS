
import './style.css';

import { Outlet, Link} from "react-router-dom";


function Layout () {
    return (

        <div> 
            <nav className="navbar">
                <ul className="list">
                    <li>
                        <Link to="/" className="home" id="forHome">Yalla Ps</Link>
                    </li>
                    <li>
                        <Link to="/loginUser" className="home" id="forForm">User</Link>
                    </li>
                    <li>
                        <Link to="/login" className="home" id="forForm">Cyber Owner</Link>
                    </li>
                </ul>
            </nav>
  
            <Outlet />
        </div>

    );
}

export default Layout;