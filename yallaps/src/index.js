import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from './components/registrationForm';
import Login from './components/login';
import Home from './components/home';
import Layout from './components/layout';
import RegistrationFormUser from './components/registrationFormUser';
import LoginUser from './components/loginUser';


export default function App(){
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="loginUser" element={<LoginUser />} />
                  <Route path="login" element={<Login />} />  
                  <Route path="registrationFormUser" element={<RegistrationFormUser />} />  
                  <Route path="registrationForm" element={<RegistrationForm />} /> 
              </Route>
          </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/*


root.render(


        <Router>
          <App />
        </Router>
    );



*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
