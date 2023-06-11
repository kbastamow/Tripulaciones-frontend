import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// import { getById } from "../../features/users/userSlice";
import {  addSocketMessage, getChatById
 } from "../../features/chat/chatSlice";
import { receiveMessage, sendMessage } from '../../actions/messageActions';

//SOCKET CLIENT
import io from 'socket.io-client';

const ChatKat = () => {
  const dispatch = useDispatch();
  const you = (JSON.parse(localStorage.getItem("user")))
  const { id } = useParams();
  // const { user } = useSelector((state) => state.user);

  const {chat, socketMessages} = useSelector((state) => state.chat)
  const [message, setMessage] = useState("");
  const [inputMessage, setInputMessage] = useState('');
  const [socket, setSocket] = useState(null);
  
  console.log(chat)

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    console.log("not important")
    // const chatData = {
    //   users: [user._id, userId._id],
    //   messages: [
    //     {
    //       sender: user._id,
    //       content: message,
    //     },
    //   ],
    // };
  
    // dispatch(create(chatData));
  };
  
useEffect(() => {
    console.log("this is id", id)
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
    <div>
   
    {chat.userIds[0].name ? <>Chat entre {chat.userIds[1].name} y {chat.userIds[0].name}</> : <></>}
<br />
<div>
      <div>
        {(socketMessages.length < 1) ? <></> : (
         socketMessages.map((message, index) => (
         <>
           <div key={index}>
            <span>{message.senderName} {message.timestamp}</span>
          <p >{message.content}</p>
          </div>
          </>
        )))
    }
      </div>
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <button onClick={socketSendMessage}>Send</button>
    </div>
<input type="text" value={message} onChange={handleInputChange} />
    <button type="submit" onClick={handleSendMessage}>
      Enviar
    </button> 
    </div>
    
  )
}

export default ChatKat