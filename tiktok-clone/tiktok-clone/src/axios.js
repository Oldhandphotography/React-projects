import axios from "axios";
const instance = axios.create({baseURL:"https://tiktok-backend-2.herokuapp.com",});
export default instance;
