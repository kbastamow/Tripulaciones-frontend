import axios from "axios";

const API_URL = "http://localhost:8080";

const register = async (userData) => {
  const res = await axios.post(API_URL + "/users/register", userData); 
  console.log(res.data)  
  return res.data;
};

const login = async(userData)=>{
  const res = await axios.post(API_URL + '/users/login',userData)
  if (res.data) {
  localStorage.setItem("user", JSON.stringify(res.data.user));
  localStorage.setItem("token", JSON.stringify(res.data.token)); 
 }
  return res.data
 }

const updateProfile = async (data) => {
   const res = await axios.put(API_URL + "/users/updateProfile", data, {
    headers: {
      authorization: JSON.parse(localStorage.getItem("token")),
      }
  }); 
  console.log(res.data)  
  return res.data;
};

const authService = {
  register,
  updateProfile,
  login
};

export default authService;
