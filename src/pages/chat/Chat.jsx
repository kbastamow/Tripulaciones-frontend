import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/users/userSlice";
import { create } from "../../features/chat/chatSlice";


const Chat = () => {
    const { id } = useParams();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

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
  
  


  return (
    <div>
    {user.name}
<br />
<input type="text" value={message} onChange={handleInputChange} />
    <button type="submit" onClick={handleSendMessage}>
      Enviar
    </button> 
    </div>
    
  )
}

export default Chat