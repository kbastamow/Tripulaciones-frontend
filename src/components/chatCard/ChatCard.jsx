import React from 'react'
import { useSelector } from 'react-redux'
import DateTimeConverter from '../dateTimeConverter/DateTimeConverter'
import { Link } from 'react-router-dom'
import "./ChatCard.scss"
import { BsArrowUpRightCircle } from 'react-icons/bs'


const ChatCard = () => {

const imagePath = "http://localhost:8080/images/user/"
const {myChats} = useSelector(state => state.chat)

if (myChats.length < 1) return <>No hay chats</>
console.log(myChats)

  return (
    <>
    {myChats.map(chat => (
        <Link to={`/chat/instant/${chat._id}`} style={{ textDecoration: 'none' }} >
        <div key={chat._id} className="chatcontacts-card">
            <div className="contact-img-container">
                <img src={imagePath + chat.userIds[0].image} alt="" />
            </div>

            <div className="contact-details">
               <p>{chat.userIds[0].name} {chat.userIds[0].surname}</p>
               <div className="last-msg">{chat.lastMsg ? <>  <span>{chat.lastMsg.sender}:</span> {chat.lastMsg.content.slice(0, 35)} </> : <></>}</div>
               <div className="last-msg-time"><DateTimeConverter datetime={chat.updatedAt}/></div>
            </div>
            
            <div className="contact-right">
            <BsArrowUpRightCircle></BsArrowUpRightCircle>
            </div>
     

        </div>
        </Link>



    ))}

</>
  )
}

export default ChatCard