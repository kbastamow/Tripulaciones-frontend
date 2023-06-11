import React, { useEffect, useState } from 'react'
import { Button, Modal, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { resetEvent } from '../../features/events/eventSlice';
import logoH from "../../assets/logo-horizontal.png"

const EventModal = () => {

  const dispatch = useDispatch()
  const {message, isError} = useSelector(state => state.events)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

useEffect(() => {
  if (message) setIsModalOpen(true)
  setTimeout(() => {
    dispatch(resetEvent())
  }, 5000); 

}, [message])


 if (!isError) 
 return <></>
 
  return (
    <Modal
    title = {<img src={logoH}></img>}
    centered
    open={isModalOpen}
    onCancel={handleOk} // Call the close modal function
    footer={null}
  >
    <p>{message}</p>
  </Modal>
  )
}

export default EventModal