import apiClient from "./apiClient";

export default function getDevProjects() {
    return apiClient.get("/dev/").then((res) => res.data);
}
