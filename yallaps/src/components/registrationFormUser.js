import React, {useState,setState} from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

function RegistrationFormUser() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const navigate = useNavigate();
    
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "phone"){
            setPhone(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,phone,password,confirmPassword);
        navigate('/profileUser');
    }

    return(
        <div name="registrationFormUser"> 
              <h1>Registration Page</h1>
              <div className="form">
                  <div className="form-body">
                      <div className="username">
                          <label className="form__label" for="firstName">First Name </label>
                          <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                      </div>
                      <div className="lastname">
                          <label className="form__label" for="lastName">Last Name </label>
                          <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                      </div>
                      <div className="phone">
                          <label className="form__label" for="phone">Phone </label>
                          <input  type="tel" id="phone" className="form__input" value={phone} onChange = {(e) => handleInputChange(e)} placeholder="Phone"/>
                      </div>
                      <div className="email">
                          <label className="form__label" for="email">Email </label>
                          <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                      </div>
                      <div className="password">
                          <label className="form__label" for="password">Password </label>
                          <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                      </div>
                      <div className="confirm-password">
                          <label className="form__label" for="confirmPassword">Confirm Password </label>
                          <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                      </div>
                  </div>
                  <div class="footer">
                      <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
                      <a href="/loginUser">Already Registrated !!</a>
                  </div>
              </div>
        </div>  
      )
}

export default RegistrationFormUser;