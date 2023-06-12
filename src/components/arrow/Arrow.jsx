import "./Arrow.scss";
import { SlArrowLeft } from "react-icons/sl";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Arrow = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); // Navega hacia atrás en la pila de historial de enrutamiento
  };

  return (
    <div className="arrow-container" onClick={handleClick}>
      <SlArrowLeft className="arrow-icon" />
    </div>
  );
};

export default Arrow;