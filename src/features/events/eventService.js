import axios from "axios";

const API_URL = "http://localhost:8080";
const token = JSON.parse(localStorage.getItem("token")) || "";

const getAll = async() => {
        const res = await axios.get(API_URL + "/events/getAll", {
            headers: {
                'Authorization': token,
              } })
        return(res.data) 
}

const getById = async(id) => {
        const res = await axios.get(API_URL + "/events/getById/" + id, {
            headers: {
                'Authorization': token,
              } })
        return res.data
}

const joinEvent = async(eventId) => {
    // const token = JSON.parse(localStorage.getItem("token"));
        const res = await axios.put(API_URL + "/events/joinEvent/" + eventId, {}, {
            headers: {
                'Authorization': token,
              }
            })
            return res.data
        };


const eventService = {
   getAll,
   getById,
   joinEvent
  };
  
  export default eventService;
  