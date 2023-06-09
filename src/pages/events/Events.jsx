import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from "../../features/events/eventSlice"
import EventCard from '../../components/eventCard/eventCard';
import { Button, Menu  } from 'antd';


import "./Events.scss"
import NavBar from '../../components/navBar/NavBar';


const Events = () => {

const dispatch = useDispatch()

const {events} = useSelector((state) => state.events)

useEffect(() => {
  dispatch(getAll())
}, [])


const EventList = () => {
    if (events.length < 1) {
        return <></>;
    } else {
        return (
            <>
                {events.map((event) => (
                    <div key={event._id}>
                        <div>{event.title}</div>
                        <div>{event.description}</div>
                        <a href={event.url}>Enlace</a>
                    </div>
                ))}
            </>
        );
    }
};

return (
    <>


        <div>Home</div>
        {/* <div>
        <Button className='ant-button'>Primary Button</Button>
        <Button className='ant-button'>Default Button</Button>
        <Button className='ant-button'>Dashed Button</Button>
    </div> */}
    <div className="event-menu">
        <span className="menu-btn">Recientes</span>
        <span  className="menu-btn">Eventos</span>
        <span className="menu-btn">Noticias</span>
        </div>


        <EventCard></EventCard>
        {/* <EventList />  */}
    </>
);
};

export default Events;
