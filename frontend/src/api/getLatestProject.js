import apiClient from "./apiClient";

export default function getLatestProject() {
  return apiClient.get("/dev/latest/").then((res) => res.data)
}
