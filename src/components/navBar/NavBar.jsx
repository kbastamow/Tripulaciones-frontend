import React from "react";
import "./NavBar.scss";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { BsChat } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavBar = () => {
  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

  const currentUrl = window.location.href;

  return (
    <div className="sticky-nav">
      <div className="navbar-container">
        <div className="headers">
          <div
            className={`home ${currentUrl === API_URL + "/" ? "active" : ""}`}
          >
            <Link to={API_URL}>
              <BiHomeAlt2 />
              <p>Home</p>
            </Link>
          </div>
          <div
            className={`empresas ${currentUrl.includes("/enterprises") ? "active" : ""}`}
          >
            <Link to={`${API_URL}/enterprises`}>
              <BsHandbag />
              <p>Empresas</p>
            </Link>
          </div>
          <div
            className={`comunidad ${currentUrl.includes("/community") ? "active" : ""}`}
          >
            <Link to={`${API_URL}/community`}>
              <FiUsers />
              <p>Comunidad</p>
            </Link>
          </div>
          <div
            className={`chat ${currentUrl.includes("/chat") ? "active" : ""}`}
          >
            <Link to={`${API_URL}/chat`}>
              <BsChat />
              <p>Chat</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
