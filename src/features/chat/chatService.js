import axios from "axios";

const API_URL = "http://localhost:8080";

const create = async (chatData) => {
  const res = await axios.post(API_URL + "/chats/create", chatData);
  console.log(res.data);
  return res.data;
};

const findOrCreate = async (otherId) => {
  console.log(otherId)
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.post(API_URL + "/chats/findOrCreate", { otherId }, {
    headers: {
        'Authorization': token,
      }
    });
  return res.data;
};


const chatService = {
    create,
    findOrCreate
  };
  
  export default chatService;