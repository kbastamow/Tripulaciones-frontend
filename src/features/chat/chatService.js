import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;


const findOrCreate = async (otherId) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.post(API_URL + "/chats/findOrCreate", { otherId }, {
    headers: {
      'Authorization': token,
    }
  });
  return res.data;
};

const getChatById = async (chatId) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.get(API_URL + "/chats/getChatId/" + chatId, {
    headers: {
      'Authorization': token,
    }
  });
  return res.data;
};

const getChatsByUserId = async () => {
  try {
  const token = JSON.parse(localStorage.getItem("token"));
   const res = await axios.get(API_URL + "/chats/getChatsByUserId", {
    headers: {
      'Authorization': token,
    }
  })
  return res.data;
  } catch (error) {
    console.error(error) 
  }
}


const chatService = {
    findOrCreate,
    getChatById,
    getChatsByUserId
  };
  
  export default chatService;