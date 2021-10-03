import React from 'react';
import "../styles/Header.css";
import { Link } from 'react-router-dom';
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />


function Header() {
    
    return (
        <div className="header">
            <Link to='/Home'>
                <img 
                        src="https://nigerianinfopedia.com.ng/wp-content/uploads/2020/07/wema-bank-new-logo-branches.png" 
                        className="header__logo"
                        alt="wema header" />
            </Link>
                 
        <div className="header__nav">
            <Link to='/Login'>
                <div className="header__option">
                    <h2 
                    className="header__option1">
                    Hello, Sign up/in
                    </h2>
                </div>
            </Link>

         <div className='header__message'>
             <h1>Welcome to Wema Bank</h1>
         </div>

            
            
        </div>



    </div>
    )
}

export default Header
