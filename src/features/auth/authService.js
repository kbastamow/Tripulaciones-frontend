import axios from "axios";

const API_URL = "http://localhost:8080";

const register = async (userData) => {
  const res = await axios.post(API_URL + "/users/register", userData);   
  return res.data;
};

const updateProfile = async (userData) => {
  const res = await axios.put(API_URL + "/users/uploadPerfile", userData)
}

const authService = {
  register,
  updateProfile
};

export default authService;
