import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from "../../features/events/eventSlice"
import EventCard from '../../components/eventCard/eventCard';
import { Button, Menu  } from 'antd';


import "./Events.scss"

const items = [
    {
      label: 'Recientes',
      key: 'recientes',
    },
    {
      label: 'Eventos',
      key: 'eventos',
    
    },
    {
        label: 'Noticias',
        key: 'noticias',

      },
    ]



const Events = () => {

const [current, setCurrent] = useState('recientes');
const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
};

    

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
        <div>Events</div>
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

    {/* className=><button>Eventos</button><button>Noticias</button></div>
         <Menu className="event-menu" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />

        <EventCard></EventCard>
        <EventList /> */}
    </>
);
};

export default Events;
