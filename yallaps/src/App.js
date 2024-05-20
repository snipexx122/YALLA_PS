
import './App.css';
import { Outlet, Link} from "react-router-dom";


function App() {
  return (
   <> 
      <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="./components/registerationForm">Register</Link>
            </li>
            <li>
              <Link to="./components/login">Login</Link>
            </li>
          </ul>
      </nav>

      <Outlet />
    </>
  );
}



export default App;
