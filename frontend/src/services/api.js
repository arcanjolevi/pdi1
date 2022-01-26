import axios from "axios";

const port = 9000;

export const apiBaseUrl = `https://pdi-trabalho1-levi-arcanjo.herokuapp.com/`;
//export const apiBaseUrl = `http://localhost:${port}/`;

const api = axios.create({
  baseURL: apiBaseUrl,
});

export default api;
