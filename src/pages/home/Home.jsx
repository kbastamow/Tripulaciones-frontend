
import "./Home.scss"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from "../../features/events/eventSlice"
import EventCard from '../../components/eventCard/EventCard';
import { Button, Menu  } from 'antd';

export const Home = () => {
      
const dispatch = useDispatch()

// const {events} = useSelector((state) => state.events)

useEffect(() => {
  dispatch(getAll())
}, [])


  return (
    <>
    <div>Home</div>
    <div className="event-menu">
    <span className="blue-menu-btn">Recientes</span>
    <span  className="blue-menu-btn blue-menu-active">Eventos</span>
    <span className="blue-menu-btn">Noticias</span>
    </div>
    <EventCard></EventCard>
</>
  )
}

export default Home
