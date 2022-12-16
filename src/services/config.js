import axios from "axios";

const baseURL = "https://lab16dawa-production.up.railway.app/test";

const instance = axios.create({
    baseURL: baseURL,
    headers:{
        "Content-Type":"application/json",
    },
});
export default instance;