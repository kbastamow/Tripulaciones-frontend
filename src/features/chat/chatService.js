import axios from "axios";

const API_URL = "http://localhost:8080";
const token = JSON.parse(localStorage.getItem("token"));

const create = async (chatData) => {
  const res = await axios.post(API_URL + "/chats/create", chatData);
  console.log(res.data);
  return res.data;
};

const findOrCreate = async (otherId) => {
  console.log("findOrCreate", otherId)
  const res = await axios.post(API_URL + "/chats/findOrCreate", { otherId }, {
    headers: {
      'Authorization': token,
    }
  });
  console.log("findOrCreate", res.data)
  return res.data;
};

const getChatById = async (chatId) => {
  console.log(chatId)
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
    create,
    findOrCreate,
    getChatById,
    getChatsByUserId
  };
  
  export default chatService;