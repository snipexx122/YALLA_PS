import React, {useState,setState} from 'react';
import './style.css';
function RegistrationForm() {

    const [data, setData] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [cyperName, setCyperName] = useState(null);
    const [location, setLocation] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const consoles=["PC","PS","Both"];

    const onOptionChangeHandler = (e) => {
        setData(e.target.value);
        console.log(
            "Cyper Owner Selected Console - ",e.target.value
        );
    };


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
        if(id === "cyperName"){
            setCyperName(value);
        }
        if(id === "location"){
            setLocation(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,phone,cyperName,location,password,confirmPassword);
    }
    return(
      <div name="registrationForm"> 
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
                    <div className="cyperName">
                        <label className="form__label" for="cyperName">Cyper Name </label>
                        <input  type="cyperName" id="cyperName" className="form__input" value={cyperName} onChange = {(e) => handleInputChange(e)} placeholder="CyperName"/>
                    </div>
                    <div className="location">
                        <label className="form__label" for="location">Location </label>
                        <input  type="text" id="location" className="form__input" value={location} onChange = {(e) => handleInputChange(e)} placeholder="Location"/>
                    </div>
                    <div className="data">
                        <label className="form__label" for="console">Choose a Console:</label>
                        <select className="form__input" name="console" onChange = {onOptionChangeHandler}>
                            <option>Please choose one option</option>
                            {consoles.map((console,index)=>{
                                return (
                                    <option key={index}>
                                        {console}
                                    </option>
                                );
                            })}
                        </select>
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
                </div>
            </div>
      </div>  
    )       
}

export default RegistrationForm;