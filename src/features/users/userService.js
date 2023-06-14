import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
const token = JSON.parse(localStorage.getItem("token")) || "";

const getAll = async() => {
        const res = await axios.get(API_URL + "/users/getAll", {
            headers: {
                'Authorization': token,
              } })
        console.log(res.data)
        return(res.data) 
}

const getById = async (_id) => {
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