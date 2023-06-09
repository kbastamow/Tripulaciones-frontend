import React, { useEffect } from 'react'
import { Card } from 'antd';
const { Meta } = Card;
import { Button, Space, Divider } from 'antd';
import "./EventCard.scss"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const imagePath = "http://localhost:8080/images/event/"


const EventCard = () => {

const {events} = useSelector((state) => state.events)

useEffect(()=> {

}, [events])


if(events?.length <= 0){
    console.log("no events")
    return "No hay contenido en este momento"
  }

return (
<>
      {events.map(event => (
        <div key={event._id}>
        <Card
        hoverable
        className="eventcard-general"
        cover={<img alt="evento" src={imagePath + event.image}/>}
          >
        <div>
        <img src="{imagePath + event.image}" alt="" />
        <h2>{event.title}</h2>
        <p className="card-text-event">{event.description}</p>
        </div>

        <Space wrap className='center-content-div'> 
        <Link to={"events/" + event._id} key={event._id}>
  
        <Button className="btn-leer">Leer más</Button>
        
        </Link>
        
      
          </Space>
          </Card>
          </div>

      ))}

</>
  )
}

export default EventCard