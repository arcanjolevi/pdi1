import axios from "axios";

export const apiBaseUrl = "http://localhost:8000/";

const api = axios.create({
  baseURL: apiBaseUrl,
});

export default api;
