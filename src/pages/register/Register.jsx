import React, { useState } from "react";
import LogoHorizontal from "../../assets/logo-horizontal.png";
import IconoFlecha from "../../assets/icono-flecha.png";
import { Link } from "react-router-dom";

import "./Register.scss";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";

const Register = () => {

  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({

    name:'',
    surname:'',
    email:'',
    password:'',
    confirmPassword:''
    
  })

  const {name,surname,email,password,confirmPassword} = formData

  const dispatch = useDispatch()

  const onChange = (e)=>{
    setFormData((prevState)=> ({
    ...prevState,
    [e.target.name]:e.target.value,
    }))
  }
    
  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      setErrorMessage("Por favor, introduce tu nombre");
      return;
    }

    if (!surname) {
      setErrorMessage("Por favor, introduce tu apellido");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }

    const emailRegex = /^[^\s@]+@edem\.es$/;
    const validEmail = emailRegex.test(email);

    if (!validEmail) {
      setErrorMessage("Tiene que ingresar un email que termine en @edem.es");
      return;
    }

    setErrorMessage(""); // Limpiar el mensaje de error si no hay error
    dispatch(register(formData))
  };
  

    
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

      <form onSubmit={onSubmit} className="register-form">
        <div className="input-one">
          <label>Nombre</label>
          <input
            className="inputRegister"
            name="name"
            placeholder="Nombre"
            value={name}
            onChange={onChange}
          />
        </div>

        <div className="input-one">
          <label>Apellidos</label>
          <input
            className="inputRegister"
            name="surname"
            placeholder="Apellidos"
            allowClear
            value={surname}
            onChange={onChange}
          />
        </div>

        <div className="input-one">
          <label>Email</label>
          <input
            className="inputRegister"
            placeholder="Email"
            name="email"
            allowClear
            value={email}
            onChange={onChange}
          />
        </div>

        <div className="input-one">
          <label>Contraseña</label>
          <Input.Password className="inputPassword" type="password" name="password"
          value={password} placeholder="Contraseña" onChange={onChange}/>
        </div>

        <div className="input-one">
          <label>Repetir contraseña</label>
          <Input.Password className="inputPassword" type="password" name="confirmPassword" value={confirmPassword}placeholder="Contraseña" onChange={onChange}/>
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

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

export default Register;