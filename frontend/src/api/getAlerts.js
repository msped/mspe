import apiClient from "./apiClient";

export default function getAlerts() {
    return apiClient.get("/alerts/").then((res) => res.data);
}
