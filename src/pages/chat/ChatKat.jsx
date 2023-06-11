import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/users/userSlice";
import { create, addSocketMessage } from "../../features/chat/chatSlice";
import { receiveMessage, sendMessage } from '../../actions/messageActions';



//SOCKET CLIENT
import io from 'socket.io-client';
const socket = io.connect('http://localhost:8080');

const ChatKat = () => {
    const { id } = useParams();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  
  const {chat, socketMessages} = useSelector((state) => state.chat)



  useEffect(() => {
    dispatch(getById(id));
  }, []);

  const [message, setMessage] = useState("");
  const userId = JSON.parse(localStorage.getItem("user"));


  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    const chatData = {
      users: [user._id, userId._id],
      messages: [
        {
          sender: user._id,
          content: message,
        },
      ],
    };
  
    dispatch(create(chatData));
  };
  
  
//SOCKET

// const socket = io.connect('http://localhost:8080');
// const messages = useSelector((state) => state.chat.messages);

const [inputMessage, setInputMessage] = useState('');

useEffect(() => {
    socket.on("message", (data) => {
        console.log("first data", data)
        dispatch(addSocketMessage(data));
      });
 
//   socket.on('message', (data) => {
//     socket.emit('message', data);
//     dispatch(receiveMessage(data));
//   });

  return () => {
    // Clean up the socket connection
    socket.disconnect();
  };

}, []);

const socketSendMessage = () => {
  // Dispatch the send message action
  const messageData = {
    content: inputMessage,
    sender: user.name,
    timestamp: new Date().toISOString(), // Convert to ISO 8601 string or reducers doesn't accept
  };
  socket.emit('message', messageData);
  console.log("This is inputmessage:", inputMessage)
  dispatch(sendMessage(messageData));
  setInputMessage('');
};

  return (
    <div>
    {user.name}
<br />
<div>
      <div>
        {(socketMessages.length < 1) ? <></> : (
         socketMessages.map((message, index) => (
         <>
           <div key={index}>
            <span>{message.sender} {message.timestamp}</span>
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