import { login } from "../../features/auth/authSlice";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import ReCAPTCHA from "react-google-recaptcha";
import "./Login.scss";
import { FiAlertCircle } from "react-icons/fi";

const sitekey = import.meta.env.VITE_REACT_APP_RECAPTCHA_SITE_KEY;
console.log(sitekey)

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [captcha, setCaptcha] = useState(false);
  const navigate = useNavigate();
  const { email, password } = formData;
  const dispatch = useDispatch();
  //const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (captcha) {
      try {
        await dispatch(login(formData));
        setFormData({
          email: "",
          password: "",
        });
        console.log("formData", formData);
      } catch (error) {
        setError("Correo o contraseña inválido");
      }
    } else {
      setError("Por favor, completa el captcha");
    }
  };

  const onCaptchaChange = (value) => {
    if (value) {
      setCaptcha(true);
    }
  };

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError("");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  return (
    <div className="principal-container-login">
      <img src={Logo} alt="Marina de empresas" />
      <h1>Risky People.</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label className="email-label" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="micorreo@edem.es"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Contraseña"
            onChange={onChange}
          />
        </div>
        <ReCAPTCHA sitekey={sitekey} onChange={onCaptchaChange} />

        <div className="error-big">
          <div className="div-error">
            {error && (
              <div className="error">
                  <span>
                      <FiAlertCircle />
                  </span>
                {error}
              </div>
            )}
          </div>
        </div>

        <button type="submit">Iniciar sesión</button>
      </form>
      <div className="register-div-login">
        <span>¿Todavía no estás registrado? </span>
        <Link className="link-register" to="/registerIsma">
          Registrate
        </Link>
      </div>
    </div>
  );
};

export default Login;
