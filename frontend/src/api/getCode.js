import apiClient from "./apiClient";

export default function getCode() {
    return apiClient.get("/cv").then((res) => res.data);
}
