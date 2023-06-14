
import "./Home.scss"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll, getRecommendations, filterByRecommendation, filterByDate } from "../../features/events/eventSlice"
import EventCard from "../../components/eventCard/EventCard";
import NavBar from "../../components/navBar/NavBar";
import Header from "../../components/header/Header";
import { Switch } from 'antd';
export const Home = () => {
      
const dispatch = useDispatch()

const {events, recommendedEvents} = useSelector((state) => state.events)

useEffect(() => {
  dispatch(getAll())
  dispatch(getRecommendations())
}, [])


const onChange = (checked) => {
 
  if (!checked) {
   
    dispatch(filterByDate())
  }

  if (checked) {
    console.log("Filtra por recomendacion")
    dispatch(filterByRecommendation());
  }
};


  return (
    <>
    <div className="content-container-main">
      <div className="sticky">
        <Header/>
        <div className="event-menu">
        <span className="blue-menu-btn">Recientes</span>
        <span  className="blue-menu-btn blue-menu-active">Eventos</span>
        <span className="blue-menu-btn">Noticias</span>
        </div>
        <div className="event-toggle"><span>Por fecha</span><span><Switch defaultUnchecked onChange={onChange} /></span><span>Recomendados</span></div>
      </div>
      
      {events ? 
      <EventCard/>
      : 
      <></> 
    }
    </div>
    <NavBar/>
</>
  )
}

export default Home
