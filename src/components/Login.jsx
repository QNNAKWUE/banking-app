import React, { useState } from 'react';
import '../styles/Login.css';
import { Link, useHistory} from 'react-router-dom';
import {auth} from '../firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const signIn = (e) =>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message));

     
    }

    const register = (e) =>{
        e.preventDefault();

        //Firebase register user implementation
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //If user created successfully, please return
                if(auth) {
                    history.push('/')
                }
            })
            .catch(error  => alert(error.message))
       
    }

    return (
        <div className="login">
            <Link to='/'>
                <img 
                src="https://nigerianinfopedia.com.ng/wp-content/uploads/2020/07/wema-bank-new-logo-branches.png"
                className="login__logo"
                alt="wema header"
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>Email</h5>
                    <input 
                    type='text' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input 
                    type='password' 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                    <button 
                    type="submit" 
                    onClick={signIn} 
                    className="login__signInButton"> Sign In 
                    </button>
                </form>

                <p>
                    By signing-in you agree to the Wema 
                    Bank Conditions of Use & Sale. <br />
                    Please see our Privacy Notice, our 
                    Cookies Notice and our Interest-Based 
                    Ads Notice.
                </p>

                <button 
                type="submit"
                onClick={register}
                className="login__registerButton">Create a Wema Account
                </button>


            </div>
        </div>
    )
}

export default Login;
