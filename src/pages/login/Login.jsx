import { login } from "../../features/auth/authSlice"
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Login.scss"


const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData
    const dispatch = useDispatch()


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formData))
        console.log('formData', formData)
    }
    return (
        <div className="principal-container-login">

            <img src={Logo} alt="" />
            <h1>Risky People.</h1>
            <form onSubmit={onSubmit}>
                <label className="email-label" htmlFor="email">Email</label>
                <input type="email" name="email" value={email} placeholder="micorreo@edem.es" onChange={onChange} />
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" value={password} placeholder="Contraseña" onChange={onChange} />
                <input className="checkbox" type="checkbox" name="checkbox" onChange={onChange} />
                <button type="submit">Iniciar sesión</button>
            </form>
            <div className="register-div-login">
                <span >¿Todavía no estás registrado? </span>
                <Link className="link-register" to="/register">Registrate</Link>
            </div>


        </div>)
}
export default Login