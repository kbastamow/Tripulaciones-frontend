import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getChatsByUserId} from "../../features/chat/chatSlice";
import ChatCard from "../../components/chatCard/chatCard";
import Header from "../../components/header/Header";
import { Input } from 'antd';
import "./Chat.scss"
const { Search } = Input;


const Chat = () => {

  const dispatch = useDispatch()
  const {myChats} = useSelector(state => state.chat)

  useEffect(()=> {
    dispatch(getChatsByUserId())
    console.log(myChats)

  }, [])


const onSearch = () => {
  console.log("search on...")
}



  return (
<>
<div  className="flex-column-container">
<Header></Header>
<div className="chats-container">
<Search
      placeholder="Buscar personas"
      allowClear
      onSearch={onSearch}
      style={{
        width: 250,
      }}
    />
<ChatCard></ChatCard>
</div>
</div>
</>
    
  )
}

export default Chat