import React, { useState } from "react";
import { Input } from "antd";
import LogoHorizontal from "../../assets/logo-horizontal.png";
import IconoFlecha from "../../assets/icono-flecha.png";
import { Link } from "react-router-dom";

import "./RegisterIsma.scss";

const onChange = (e) => {
  console.log(e);
};

function RegisterIsma() {
  return (
    <div className="main-register">
      <div className="img-logo">
        <img src={LogoHorizontal} alt="" />
      </div>

      <div className="title-register">
        <div className="registro-text">
          <img src={IconoFlecha} alt="" />
          <h1>Registro</h1>
        </div>
        <p>Rellena los datos para darte de alta.</p>
      </div>

      <form className="register-form">
        <div className="input-one">
          <label>Nombre</label>
          <Input
            className="inputRegister"
            placeholder="Nombre"
            allowClear
            onChange={onChange}
          />
        </div>

        <div className="input-one">
          <label>Apellidos</label>
          <Input
            className="inputRegister"
            placeholder="Apellidos"
            allowClear
            onChange={onChange}
          />
        </div>

        <div className="input-one">
          <label>Email</label>
          <Input
            className="inputRegister"
            placeholder="Apellido"
            allowClear
            onChange={onChange}
          />
        </div>

        <div className="input-one">
          <label>Contraseña</label>
          <Input.Password className="inputPassword" placeholder="Contraseña" />
        </div>

        <div className="input-one">
          <label>Repetir contraseña</label>
          <Input.Password className="inputPassword" placeholder="Contraseña" />
        </div>

        <button type="submit">Crear cuenta</button>
        <p>
          ¿Ya tienes cuenta?{" "}
          <span>
            <Link className="link-register" to="/login">
              Inicia sesión
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default RegisterIsma;
