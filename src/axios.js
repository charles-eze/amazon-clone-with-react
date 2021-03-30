import axios from "axios";


const instance = axios.create({
    baseURL: 'https://us-central1-clone-d9b8d.cloudfunctions.net/api'  //   Deployed API URL; 
   //   'http://localhost:5001/clone-d9b8d/us-central1/api' => This is the cloud function API url for localhost
});

export default instance;