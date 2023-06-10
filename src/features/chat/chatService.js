import axios from "axios";

const API_URL = "http://localhost:8080";

const create = async (chatData) => {
  const res = await axios.post(API_URL + "/chats/create", chatData);
  console.log(res.data);
  return res.data;
};

const chatService = {
    create,
   
  };
  
  export default chatService;