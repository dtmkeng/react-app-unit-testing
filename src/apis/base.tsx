import axios from "axios";

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
});
export default http;
