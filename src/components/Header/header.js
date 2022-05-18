import React from 'react';
import Logo from '../assets/Family_Guy_Logo.svg.png';
import './header.css'
function Header(props){
return(
    <div className="header">
        <div className="left-header">
        <img src={Logo} alt='logo' className='logo'/>
        <span>Get points by clicking on an image but don't click on any more than once!</span>
        </div>
        <div className="rigth-header">
            <p>curent score:{props.score}</p>
            <p>best score:{props.bestScore}</p>
        </div>
    </div>
)
}
export default Header;