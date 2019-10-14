import axios from "axios";

export const instAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});
