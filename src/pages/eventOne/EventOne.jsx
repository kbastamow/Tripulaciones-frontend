import "./EventOne.scss"
import React, { useEffect } from 'react'
import Arrow from "../../components/arrow/Arrow";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getById, joinEvent } from "../../features/events/eventSlice";
import logo from "../../assets/logo.png"
import { Button, Tag } from "antd";
import {AiOutlineCalendar} from "react-icons/ai"
import {BiGroup} from "react-icons/bi"
import DateTimeConverter from "../../components/dateTimeConverter/DateTimeConverter";
import {SlLocationPin} from "react-icons/sl"

const imagePath = "http://localhost:8080/images/event/"

const EventOne = () => {
const { id } = useParams();
const {event} = useSelector(state => state.events)


const dispatch = useDispatch();
useEffect(() => {
  dispatch(getById(id));
}, []);

const attendEvent = () => {
  console.log(event._id)
  dispatch(joinEvent(event._id))
}


if (!event) {
  return <></>
} else {

  return (
    <>
    <Arrow></Arrow>
    <div className="flex-column-container">
    
    <div>eventOne</div>
    <div className="eventone-img">
    <img src={event ? (imagePath + event.image) : logo} alt="" />

    </div>
    <div className="eventone-title">
      {event.title}

    </div>
    <div className="eventone-details card-text-event">
   
    <div><AiOutlineCalendar/><DateTimeConverter datetime={event.date}/></div>

    <div><BiGroup/>{event.userids?.length || 0} asistentes</div>
   
    <div><SlLocationPin/> Edem escuela de empresarios</div>

    </div>
    <div className="eventone-buttons">
    <Button className="btn-eventone" onClick={attendEvent}>Asistiré</Button>
    <Button className="btn-eventone" >Registrarse</Button>
    <span>...</span>
    </div>
    <div className="eventone-categories">
      {event.categoryIds?.map(category => (
        <Tag  className="grey-tag">{category.name}</Tag>
     ))}
    
    </div>
    <div className="eventone-description">
      <div className="eventone-title">Descripción del evento:</div>
      <br/>
      <div className="card-text-event">{event.description}</div>
    </div>


    </div>
  </>
  )
}
}

export default EventOne