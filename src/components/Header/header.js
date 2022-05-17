import React from 'react';
import Logo from '../assets/logo/family_guy_logo1.png';
function Header(props){
return(
    <div className="header">
        <img src={Logo} alt='logo' />
        <div className="score">
            <p>curent score:</p>
            <p>best score:</p>
        </div>
    </div>
)
}
export default Header;