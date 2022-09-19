import axios from "axios";
import graphqlconfig from "./graphqlconfig";
// instance  from axios
const client = axios.create({
  baseURL: graphqlconfig.graphqlendpint,
});
export default client;
