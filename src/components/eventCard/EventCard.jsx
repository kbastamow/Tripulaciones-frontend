import React, { useEffect } from 'react'
import { Card } from 'antd';
const { Meta } = Card;
import { Button, Space, Divider } from 'antd';
import "./EventCard.scss"
import { useSelector } from 'react-redux';


const EventCard = () => {

const {events} = useSelector((state) => state.events)

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
        cover={<img alt="evento" src="event.image" />}
          >
          <div>
        <h2>{event.title}</h2>
        <p className="card-text-event">{event.description}</p>
        </div>

        <Space wrap> 
        <div className="eventcard-btn-div">
        <Button className="btn-leer">Leer más</Button>
        </div>
          </Space>
          </Card>
          </div>

      ))}

</>
  )
}

export default EventCard