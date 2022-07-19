import React from "react";
import logo from '../img/star-wars.svg'

export default function Header(){

    return(
        <div>
        <header>
        <div className='wrapper'>
        <img className='logo' alt='logo' src={logo}/>
        </div>
          <ul className='nav-log'>
          <li><a href='/login'>LOG IN</a></li>
          <li><a href='/signin'>SIGN IN</a></li>
          </ul>
      </header>
      <nav>
      <ul className='nav-links'>
          <li><a href='/'>HOME</a></li>
          <li><a href='/starships'>STARSHIPS</a></li>
      </ul>
      </nav>
      </div>
      )

}