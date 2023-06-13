import axios from "axios";

const API_URL = "http://localhost:8080";
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