import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;


const getAllGroups = async() => {
    const token = JSON.parse(localStorage.getItem("token")) || "";
    const res = await axios.get(API_URL+"/groups/getAll", {
        headers: {
            'Authorization': token,
          } })
    return (res.data)
}

const groupService = {
    getAllGroups
};

export default groupService