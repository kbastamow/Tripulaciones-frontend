import React from 'react'
import logo from "../../assets/logo.png"
import "./PageNotFound.scss"
import Arrow from '../arrow/Arrow'


const PageNotFound = () => {
  return (
    <>
    <Arrow></Arrow>
    <div className="not-found-div">
    <div><img src={logo}></img></div>
    <h2 className='blue-title'>Página no encontrado</h2>
    </div>
    </>
  )
}

export default PageNotFound