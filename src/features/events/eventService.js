import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;




const getAll = async() => {
    const token = JSON.parse(localStorage.getItem("token")) || "";
        const res = await axios.get(API_URL + "/events/getAll", {
            headers: {
                'Authorization': token,
              } })
        return(res.data) 
}

const getById = async(id) => {
    const token = JSON.parse(localStorage.getItem("token")) || "";
        const res = await axios.get(API_URL + "/events/getById/" + id, {
            headers: {
                'Authorization': token,
              } })
        return res.data
}

const getRecommendations = async() => {
    const token = JSON.parse(localStorage.getItem("token")) || "";
    const res = await axios.get(API_URL + "/events/getRecommendations/", {
        headers: {
            'Authorization': token,
          } })
    return res.data
}

const joinEvent = async(eventId) => {
    const token = JSON.parse(localStorage.getItem("token")) || "";
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
   joinEvent,
   getRecommendations,
  };
  
  export default eventService;
  