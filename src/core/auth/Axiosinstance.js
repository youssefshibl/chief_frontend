import axios from "axios";
import backendconfig from "@/config/backend/main";
// instance  from axios
const client = axios.create({
  baseURL: backendconfig.BackendBaseurl,
});
export default client;
