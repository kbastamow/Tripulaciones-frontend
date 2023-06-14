import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {  addSocketMessage, getChatById, clearSocketMessages, resetChat } from "../../features/chat/chatSlice";
import "./ChatInstant.scss"
import Header from "../../components/header/Header";
import Arrow from "../../components/arrow/Arrow";
//SOCKET CLIENT
import io from 'socket.io-client';
import DateTimeConverter from "../../components/dateTimeConverter/DateTimeConverter";
import { BiMicrophone, BiPlusCircle } from "react-icons/bi";

const ChatInstant = () => {
  const dispatch = useDispatch();
  const you = (JSON.parse(localStorage.getItem("user")))
  let otherPerson = {}
  const { id } = useParams()
  const {chat, socketMessages} = useSelector((state) => state.chat)
  const [inputMessage, setInputMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const bottom = useRef(null);
  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  const imagePath = API_URL + "/images/user/";
  
  useEffect(() => {
    bottom?.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
  dispatch(clearSocketMessages())
  dispatch(resetChat())
  dispatch(getChatById(id));


   // Set up socket.io connection
   const newSocket = io.connect(API_URL);
   setSocket(newSocket);

   // Join the chat room
   newSocket.emit('joinChat', id); 
   newSocket.on('message', (data) => {
    // Handle the received message
    if (data._id === id) {
      //add the socket message only if it belongs to the current chat
      dispatch(addSocketMessage(data));
    }
  });
   return () => {
     // Clean up the socket connection
     newSocket.disconnect();
   };
 }, []);

const socketSendMessage = () => {
  if (inputMessage === "") return
  
  const messageData = {
    _id: chat._id,
    content: inputMessage,
    sender: you._id,
    senderName: you.name,
    timestamp: new Date().toISOString(), // reducers don't accept otherwise
  };
  socket.emit("message", messageData);
  setInputMessage('');
};

if (!chat) {
  return <></>
} 

otherPerson = chat.userIds.filter(member => member._id !== you._id)


  return (
    <>
   <Header></Header>
   <div className="contacto-text blue-title">
   <Link> <Arrow></Arrow></Link>
    {otherPerson[0].name ? <>       <div className="contact-img-container"><img src={imagePath + otherPerson[0].image} alt="usuario" /> </div>{otherPerson[0].name}</> : <></>}</div>
<br />
<div className="msgwindow-div">
  {/* OLD MESSAGES */}
  {(chat.length < 1) ? <></> : (
         chat.messages.slice(-50).map((message) => (
           <div key={message._id}>
           <div className="msg-time"><DateTimeConverter datetime = {message.timestamp}/> mensaje de {message.sender.name}</div>
<div className="flex-div">
      
          <span className={message.sender._id === you._id ? "my-msg-container" : "msg-container"}>{message.content}</span>
          </div>
          </div>
        )))
    }
  {/* INSTANT MESSAGES */}
      <div>
        {(socketMessages.length < 1) ? <></> : (
         socketMessages.map((message, index) => (
         <>
           <div key={index}>
           <div className="msg-time"><DateTimeConverter datetime = {message.timestamp}/> {message.senderName}:</div>
<div className="flex-div">
      
          <span className={message.sender === you._id ? "my-msg-container" : "msg-container"}>{message.content}</span>
          </div>
          </div>
          </>
        )))
    }
      </div>
      <div ref={bottom}></div>
      </div>
      <hr />
      <div className="chatinput-div sticky">
      
      <BiPlusCircle/>
      <input
        type="text"
        placeholder="Aaa"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <button onClick={socketSendMessage}>Enviar</button>
      <BiMicrophone/>
      </div>
    
    </>
    
  )
}

export default ChatInstant