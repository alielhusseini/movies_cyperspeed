import axios from "axios";
const address = "https://search.imdbot.workers.dev/";

const api = axios.create({
  baseURL: address,
  timeout: 10000,
});

export default api;
