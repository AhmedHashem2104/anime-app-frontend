import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:3333/anime`,
});

export default instance;
