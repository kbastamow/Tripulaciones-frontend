import axios from "axios";

const API_URL = "http://localhost:8080";


const getAll = async() => {
    const res = await axios.get(API_URL+"/programs/getAll")
    console.log("This is programData", res.data)
    return res.data
}

const programService = {
    getAll
}

export default programService