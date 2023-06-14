import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getChatsByUserId} from "../../features/chat/chatSlice";
import ChatCard from "../../components/chatCard/ChatCard";
import Header from "../../components/header/Header";
import NavBar from "../../components/navBar/NavBar";
import "./Chat.scss"
import { BiSearch } from "react-icons/bi";




const Chat = () => {
  const dispatch = useDispatch()
  const {myChats} = useSelector(state => state.chat)
  
  useEffect(()=> {
    if (!myChats || myChats.length < 1) {
    dispatch(getChatsByUserId())
    }
 
  }, [])


const onSearch = () => {
  console.log("search on...")
}



  return (
<>
<div  className="flex-column-container">
<Header></Header>
<div className="chats-container">
<div>
  <div className="input-search"><span><BiSearch/></span> <input type="text" placeholder="Buscar mensajes" /> </div>
  <p></p>
</div>
<div className="chats-container-cards">
  <ChatCard></ChatCard>
</div>
</div>
<NavBar></NavBar>
</div>
</>
    
  )
}

export default Chat