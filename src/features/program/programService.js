import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
const token = JSON.parse(localStorage.getItem("token")) || "";

const getAll = async() => {
    const res = await axios.get(API_URL+"/programs/getAll", {
        headers: {
            'Authorization': token,
          } })
    return res.data
}

const programService = {
    getAll
}

export default programService