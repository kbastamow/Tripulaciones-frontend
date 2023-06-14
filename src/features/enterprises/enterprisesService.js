import axios from "axios";
const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
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