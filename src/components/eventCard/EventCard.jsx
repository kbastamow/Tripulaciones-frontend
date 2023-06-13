import React, { useEffect } from 'react'
import { Card } from 'antd';
import { Button, Space, Divider } from 'antd';
import "./EventCard.scss"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import Spinner from '../spinner/Spinner';
const imagePath = "http://localhost:8080/images/event/"
const { Meta } = Card;

const EventCard = () => {

const {events} = useSelector((state) => state.events)

useEffect(()=> {
  
}, [events])



if(events?.length <= 0){
    return <Spinner/>
  }

return (
<>
      {events.map(event => (
        <div key={event._id} className="eventcard-container">
        <Card
        hoverable
        className="eventcard-general"
        cover={event.image ? <img alt="evento" src={imagePath + event.image}/> : <></>}
          >
        <div>
        <h2>{event.title}</h2>
        <p className="card-text-event">{event.description}</p>
        </div>

        <Space wrap className='center-button-div'> 
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