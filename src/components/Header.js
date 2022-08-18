import React from "react";
import logo from "../img/star-wars.png";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "../styles/Header.css";
import { Link } from "react-router-dom";

export default function Header(props) {
  
    const userName = props.newUsers.filter(
      (item) =>
        item.email === props.userLogin.email &&
        item.password === props.userLogin.password
    );
  

  return (
    <header>
      <div className="nav-wrapper">
        <div className="links">
          <a href="http://facebook.com">
            <FaFacebook className="link" />
          </a>
          <> </>
          <a href="http://twitter.com">
            <FaTwitter className="link" />
          </a>
          <> </>
          <a href="http://instagram.com">
            <FaInstagram className="link" />
          </a>
          <> </>
          <a href="http://youtube.com">
            <FaYoutube className="link" />
          </a>
        </div>
        <div className="logo-wrapper">
          <img className="logo" alt="logo" src={logo} />
        </div>
        {!props.isLoggedIn ? (
          <div className="nav-log">
            <ul>
              <li>
                <button onClick={() => props.setPopupLogin(true)}>
                  LOG IN
                </button>
              </li>
              <li>{"//"}</li>
              <li>
                <button onClick={() => props.setPopupSignin(true)}>
                  SIGN IN
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="nav-log">
            <ul>
              <li>
                <p>Hi, {userName[0].firstName}</p>
              </li>
              <li>{"//"}</li>
              <li>
                <button onClick={() => props.setUserLogin(false)}>
                  SIGN OUT
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/starships">STARSHIPS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
