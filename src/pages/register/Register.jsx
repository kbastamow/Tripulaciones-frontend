import React, { useEffect, useState } from "react";
import LogoHorizontal from "../../assets/logo-horizontal.png";
import { Link, useNavigate } from "react-router-dom";
import Arrow from "../../components/arrow/Arrow";
import "./Register.scss";
import { Checkbox, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../features/auth/authSlice";
import { FiAlertCircle } from "react-icons/fi";


const Register = () => {

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({

    name:'',
    surname:'',
    email:'',
    password:'',
    confirmPassword:''
    
  })

  const {name,surname,email,password,confirmPassword} = formData

  const dispatch = useDispatch()

  const { isSuccess, message, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        dispatch(reset())
        navigate("/login")
      }, 3000);
    }   
    if (isError) {
      setTimeout(() => {
        dispatch(reset())
      }, 3000);
    }
  }, [isSuccess, isError, message]);

  const onChange = (e)=>{
    setFormData((prevState)=> ({
    ...prevState,
    [e.target.name]:e.target.value,
    }))
    setIsChecked(e.target.checked);
  }
  const navigate = useNavigate();

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

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const passwordValid = passwordRegex.test(password)
    const emailRegex = /^[^\s@]+@edem\.es$/;
    const validEmail = emailRegex.test(email);

    if (!validEmail) {
      setErrorMessage("Tiene que ingresar un email que termine en @edem.es");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }

    if (!passwordValid) {
      const errorList = [
        'La contraseña debe tener:',
        'Al menos una mayúscula y minúscula.',
        'Mínimo una longitud de 8 caracteres.',
        'Uso de caracteres alfanuméricos',
      ]
      setErrorMessage(errorList.join('\n'));
      return;
    }

    if (!isChecked) {
      setErrorMessage("Acepta los terminos y condiciones de privacidad")
      return;
    }

    setErrorMessage(""); // Limpiar el mensaje de error si no hay error
    dispatch(register(formData))
    
    //setSuccessMessage("Usuari@ creado con éxito");

    // setTimeout(() => {
    //   navigate("/login");
    // }, 2000);
    
  };
  
  useEffect(() => {
    if (errorMessage) {
      const timeout = setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [errorMessage]);

  return (
    <div className="main-register">
      <div className="img-logo">
        <img src={LogoHorizontal} alt="" />
      </div>

      <div className="title-register">
        <div className="registro-text">
          <Arrow/>
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
        <Checkbox onChange={onChange}>Términos de privacidad</Checkbox>
          {errorMessage && (
          <div className="div-error">
            {errorMessage.split('\n').map((error, index) => (
              <div key={index} className="error">
                <span><FiAlertCircle/></span>{error}
              </div>
            ))}
          </div>
        )}
        {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {isSuccess && <p className="success-message">Registro realizado con exito, entra en tu email para confirmar</p>}
        {isError && <p className="success-message">Este usuari@ ya existe</p>}
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
