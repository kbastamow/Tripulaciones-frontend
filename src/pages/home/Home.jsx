
import "./Home.scss"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from "../../features/events/eventSlice"

import { Button, Menu  } from 'antd';
import EventCard from "../../components/eventCard/eventCard";
import NavBar from "../../components/navBar/NavBar";
import Header from "../../components/header/Header";

export const Home = () => {
      
const dispatch = useDispatch()

// const {events} = useSelector((state) => state.events)

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
    </div>
    <EventCard></EventCard>
    <NavBar/>
</>
  )
}

export default Home
