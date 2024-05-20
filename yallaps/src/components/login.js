import React, {useState} from 'react';
import './style.css';

function Login() {

    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
    }

    function formValidate(){
        return email.length>0&&password.length>0;
    }


    function sayDone(){
        console.log("Done");
    }

    return (

        <div className="form">
            <div className="form-body">
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="tel" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
            </div>
            <div class="footer">
                <button disabled={!formValidate()} onClick={()=>sayDone()}  type="submit" class="btn">Register</button>
                <a href="#">Need To Registed</a>
            </div>
        </div>
    );
}

export default Login;