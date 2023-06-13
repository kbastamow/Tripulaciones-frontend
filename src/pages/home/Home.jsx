
import "./Home.scss"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from "../../features/events/eventSlice"

import { Button, Menu  } from 'antd';
import EventCard from "../../components/eventCard/eventCard";
import NavBar from "../../components/navBar/NavBar";
import Header from "../../components/header/Header";
import { Switch } from 'antd';
export const Home = () => {
      
const dispatch = useDispatch()



const onChange = (checked) => {
  console.log(`switch to ${checked}`);

  if (!checked) {
    console.log("Filtra por fecha")
  }

  if (checked) {
    console.log("Filtra por recomendacion")
  }
};


useEffect(() => {
  dispatch(getAll())
}, [])


  return (
    <>
    <div className="sticky">
      <Header/>
      <div className="event-menu">
      <span className="blue-menu-btn">Recientes</span>
      <span  className="blue-menu-btn blue-menu-active">Eventos</span>
      <span className="blue-menu-btn">Noticias</span>
      </div>
      <div className="event-toggle"><span>Por fecha</span><span><Switch defaultUnchecked onChange={onChange} /></span><span>Recomendados</span></div>

    </div>
    <EventCard></EventCard>
    <NavBar/>
</>
  )
}

export default Home
