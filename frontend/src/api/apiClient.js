import axios from "axios";

const apiClient = axios.create({
    baseURL: `${process.env.REACT_APP_API_HOST}/api`,
    headers: {
        "Content-type": "application/json",
    },
});

export default apiClient;
