import axios from "axios";
const API_URL = import.meta.env.VITE_REACT_APP_API_URL;


const register = async (userData) => {
  const res = await axios.post(API_URL + "/users/register", userData);
  console.log(res.data);
  return res.data;
};

const login = async (userData) => {
  const res = await axios.post(API_URL + "/users/login", userData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", JSON.stringify(res.data.token));
  }
  return res.data;
};

const logout = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.delete(API_URL + "/users/logout", {
    headers: {
      authorization: token,
    },
  });
  if (res.data) {
    localStorage.clear();
  }
  return res.data;
};

const updateProfile = async (data) => {
  const res = await axios.put(API_URL + "/users/updateProfile", data, {
    headers: {
      authorization: JSON.parse(localStorage.getItem("token")),
    },
  });
  console.log(res.data);
  return res.data;
};

const authService = {
  register,
  login,
  logout,
  updateProfile,
};

export default authService;
