import axios from "axios";

const API_URL = "http://localhost:8080";

const getAll = async() => {
    try {
        const res = await axios.get(API_URL + "/events/getAll")
        console.log(res.data)
        return(res.data) 
    } catch (error) {
        console.error(error)
        
    }
}

const getById = async(id) => {
    try {
        const res = await axios.get(API_URL + "/events/getById/" + id)
        console.log(res.data)
        return res.data
    } catch(error) {
        console.error(error)
    }
}

const eventService = {
   getAll,
   getById
  };
  
  export default eventService;
  