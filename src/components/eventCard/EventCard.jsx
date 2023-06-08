import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
import { Button, Space } from 'antd';
import "./Eventcard.scss"



const EventCard = () => {
  return (
    <Card
    hoverable
    className="eventcard-general"
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
    <Space wrap>
    <Button>Default Button</Button>
  </Space>
  </Card>

  )
}

export default EventCard