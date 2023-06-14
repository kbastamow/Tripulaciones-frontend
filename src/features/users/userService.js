import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;


const getAll = async() => {
  try {
    const token = JSON.parse(localStorage.getItem("token")) || "";
    const res = await axios.get(API_URL + "/users/getAll", {
            headers: {
                'Authorization': token,
              } })
        return(res.data) 
  } catch (error) {
    console.error(error)  
}
  }
  

const getById = async (_id) => {
  const token = JSON.parse(localStorage.getItem("token")) || "";
    const res = await axios.get(API_URL + "/users/getById/" + _id, {
        headers: {
            'Authorization': token,
          } });
    return res.data;
  };

const userService = {
    getAll,
    getById
   };
   
   export default userService;