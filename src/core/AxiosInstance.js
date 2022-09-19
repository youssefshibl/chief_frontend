import axios from "axios";
// instance  from axios
const client = axios.create({
  baseURL: "http://cheifbackend.com/api",
});

// interceptor request to set the update of token
client.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Content-Type"] = "application/json";
  } else {
    config.headers.Authorization = `Bearer `;
  }
  return config;
});
export default client;
