import axios from "axios";

const port = 8000;

export const apiBaseUrl = `http://localhost:${port}/`;

const api = axios.create({
  baseURL: apiBaseUrl,
});

export default api;
