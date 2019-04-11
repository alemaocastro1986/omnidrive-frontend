import axios from "axios";

const api = axios.create({
  baseURL: "https://omnidrive-backend.herokuapp.com"
});

export default api;
