import axios from "axios";

const api = axios.create({
  baseURL: "https://to-do-api-hyan.herokuapp.com/api/",
  timeout: 5000,
  // headers: {},
});

export default api;
