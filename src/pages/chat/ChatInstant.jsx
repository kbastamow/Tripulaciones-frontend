import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {  addSocketMessage, getChatById } from "../../features/chat/chatSlice";
import { receiveMessage, sendMessage } from '../../actions/messageActions';
import "./ChatInstant.scss"

//SOCKET CLIENT
import io from 'socket.io-client';
import DateTimeConverter from "../../components/dateTimeConverter/DateTimeConverter";
import { BiMicrophone, BiPlusCircle } from "react-icons/bi";

const ChatInstant = () => {
  const dispatch = useDispatch();
  const you = (JSON.parse(localStorage.getItem("user")))
  const { id } = useParams()
  const {chat, socketMessages} = useSelector((state) => state.chat)
  const [message, setMessage] = useState("");
  const [inputMessage, setInputMessage] = useState('');
  const [socket, setSocket] = useState(null);
  
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

useEffect(() => {
  dispatch(getChatById(id));
   // Set up socket.io connection
   const newSocket = io.connect('http://localhost:8080');
   setSocket(newSocket);

   // Receive messages from the server
   newSocket.on('message', (data) => {
     dispatch(addSocketMessage(data));
   });

   return () => {
     // Clean up the socket connection
     newSocket.disconnect();
   };
 }, []);

const socketSendMessage = () => {
  if (inputMessage === "") return
  // Dispatch the send message action
  const messageData = {
    _id: chat._id,
    content: inputMessage,
    sender: you._id,
    senderName: you.name,
    timestamp: new Date().toISOString(), // Convert to ISO 8601 string or reducers doesn't accept
  };
  socket.emit('message', messageData);
  console.log("This is inputmessage:", inputMessage)
  dispatch(sendMessage(messageData));
  setInputMessage('');
};

if (!chat) {
  console.log("no hay chat")
  return <></>
}

  return (
    <>
   
    {chat.userIds[0].name ? <>Chat entre {chat.userIds[1].name} y {chat.userIds[0].name}</> : <></>}
<br />
<div className="msgwindow-div">
  {/* OLD MESSAGES */}
  {(chat.length < 1) ? <></> : (
         chat.messages.map((message) => (
         <>
           <div key={message._id}>
           <div className="msg-time"><DateTimeConverter datetime = {message.timestamp}/> mensaje de {message.sender.name}</div>
<div className="flex-div">
      
          <span className={message.sender._id === you._id ? "my-msg-container" : "msg-container"}>{message.content}</span>
          </div>
          </div>
          </>
        )))
    }
  {/* INSTANT MESSAGES */}
      <div>
        {(socketMessages.length < 1) ? <></> : (
         socketMessages.map((message, index) => (
         <>
           <div key={index}>
           <div className="msg-time"><DateTimeConverter datetime = {message.timestamp}/> mensaje de {message.senderName}</div>
<div className="flex-div">
      
          <span className={message.sender === you._id ? "my-msg-container" : "msg-container"}>{message.content}</span>
          </div>
          </div>
          </>
        )))
    }
      </div>
      </div>
      <hr />
      <div className="chatinput-div">
      
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