import axios from "axios";
const API_URL = "http://localhost:8080";

const getAll = async () => {
    try {
        const res = await axios.get(API_URL + "/lanzadera/getAll")
        console.log(res.data)
        return(res.data) 
    } catch (error) {
        console.error(error)
        
    }
};
const enterprisesService = {
 getAll
};
export default enterprisesService;