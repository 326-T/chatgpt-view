import axios from "axios";

const instance = axios.create({
  timeout: 0,
  baseURL: 'http://localhost:8080'
});


export default instance;