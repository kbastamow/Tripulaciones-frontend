import React from "react";
import "./NavBar.scss";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { BsChat } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="sticky-nav">
        <div className="navbar-container">
          <div className="headers">
            <div className="home">
              <BiHomeAlt2 />
              <p>Home</p>
            </div>
            <div className="empresas">
              <BsHandbag />
              <p>Empresas</p>
            </div>
            <div className="comunidad">
              <FiUsers />
              <p>Comunidad</p>
            </div>
            <div className="chat">
              <BsChat />
              <p>Chat</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default NavBar;
