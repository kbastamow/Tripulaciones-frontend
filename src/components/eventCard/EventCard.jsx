import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
import { Button, Space, Divider } from 'antd';
import "./Eventcard.scss"


const EventCard = () => {
  return (

      <Card
      hoverable
      className="eventcard-general"
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <div>
      <h2>Title</h2>
      <p className="card-text-event">Description</p>
      </div>
      <Divider />
      <Space wrap>
     
      <Button className="btn-leer">Leer más</Button>
        </Space>
        </Card>
   
  )
}

export default EventCard