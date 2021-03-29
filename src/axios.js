import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-d9b8d/us-central1/api' //This is the cloud function API url for localhost
});

export default instance;