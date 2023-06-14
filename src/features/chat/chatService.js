import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
const token = JSON.parse(localStorage.getItem("token"));

const findOrCreate = async (otherId) => {
  const res = await axios.post(API_URL + "/chats/findOrCreate", { otherId }, {
    headers: {
      'Authorization': token,
    }
  });
  return res.data;
};

const getChatById = async (chatId) => {
  const res = await axios.get(API_URL + "/chats/getChatId/" + chatId, {
    headers: {
      'Authorization': token,
    }
  });
  console.log("getChatById", res.data)
  return res.data;
};

const getChatsByUserId = async () => {
  console.log(token)
   const res = await axios.get(API_URL + "/chats/getChatsByUserId", {
    headers: {
      'Authorization': token,
    }
  })
  console.log(res.data)
  return res.data;
}


const chatService = {
    findOrCreate,
    getChatById,
    getChatsByUserId
  };
  
  export default chatService;