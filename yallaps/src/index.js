import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import RegistrationForm from './components/registrationForm';
import Login from './components/login';



function Layout(){
    return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}> 
              <Route index element={<Home />} />
              <Route path="registerForm" element={<RegistrationForm />} />
              <Route path="login" element={<Login />} />
            </Route> 
          </Routes>
        </BrowserRouter>
      </div>  
    );

}
export default Layout;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Layout />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
