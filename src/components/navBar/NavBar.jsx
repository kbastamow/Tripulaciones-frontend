import React from "react";
import "./NavBar.scss";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { BsChat } from "react-icons/bs";

const NavBar = () => {
  const currentUrl = window.location.href;

  return (
    <div className="sticky-nav">
      <div className="navbar-container">
        <div className="headers">
          <div className={`home ${currentUrl === "http://localhost:5173/" ? "active" : ""}`}>
            <BiHomeAlt2 />
            <p>Home</p>
          </div>
          <div className={`empresas ${currentUrl.includes("/empresas") ? "active" : ""}`}>
            <BsHandbag />
            <p>Empresas</p>
          </div>
          <div className={`comunidad ${currentUrl.includes("/community") ? "active" : ""}`}>
            <FiUsers />
            <p>Comunidad</p>
          </div>
          <div className={`chat ${currentUrl.includes("/chat") ? "active" : ""}`}>
            <BsChat />
            <p>Chat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
