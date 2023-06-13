import axios from "axios";
const API_URL = "http://localhost:8080";
const token = JSON.parse(localStorage.getItem("token")) || "";


const getAll = async () => {
    try {
        const res = await axios.get(API_URL + "/lanzadera/getAll",{
            headers: {
                'Authorization': token,
              } })
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