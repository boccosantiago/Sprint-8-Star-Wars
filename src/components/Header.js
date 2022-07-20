import React from "react";
import logo from "../img/star-wars.png";
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa';
import '../styles/Header.css'

export default function Header() {
  return (
    <header>
    <div className="nav-wrapper">
      <div className="links">
      <a href="http://facebook.com">
        <FaFacebook className="link"/>
        </a>
        <> </>
        <a href="http://twitter.com">
        <FaTwitter className="link" />
        </a>
        <> </>
        <a href="http://instagram.com">
        <FaInstagram className="link"/>
        </a>
        <> </>
        <a href="http://youtube.com">
        <FaYoutube className="link"/>
        </a>
        </div>
        
          <img className="logo" alt="logo" src={logo} />
        
        <ul className="nav-log">
          <li>
            <a href="/login">LOG IN</a>
          </li>
          <li>{"//"}</li>
          <li>
            <a href="/signin">SIGN IN</a>
          </li>
        </ul>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/starships">STARSHIPS</a>
            </li>
          </ul>
        </nav>
      
    </header>
  );
}
