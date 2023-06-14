import axios from "axios";
const API_URL = import.meta.env.VITE_REACT_APP_API_URL;



const getAll = async () => {
    try {
        const token = JSON.parse(localStorage.getItem("token")) || "";
        const res = await axios.get(API_URL + "/lanzadera/getAll",{
            headers: {
                'Authorization': token,
              } })
        return(res.data) 
    } catch (error) {
        console.error(error)
        
    }
};

const getById = async(id) => {
    try {
        const token = JSON.parse(localStorage.getItem("token")) || "";
        const res = await axios.get(API_URL + "/lanzadera/getById/" + id, {
                headers: {
                    'Authorization': token,
                  } })
            return (res.data)
    } catch (error) {
        console.error(error)
    }
 
}

const enterprisesService = {
 getAll,
 getById
};

export default enterprisesService;