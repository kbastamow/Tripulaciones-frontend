import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


const Spinner = () => {
    const antIcon = (
        <LoadingOutlined
          style={{
            fontSize: 40,
            color: "#CB7862",
            margin: "20px auto",
            
          }}
          spin
        />)

  return (
    <div className="flex-column-container"><Spin indicator={antIcon} /></div>
  )
}

export default Spinner