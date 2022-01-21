// axios http request easy kerta hai
import axios from 'axios';
const instance =  axios.create({
    baseURL: 'https://tinderclone-backend-2.herokuapp.com'
}) ;
export default instance;